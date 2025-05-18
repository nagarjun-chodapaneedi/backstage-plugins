import {
  coreServices,
  createBackendModule,
} from '@backstage/backend-plugin-api';
import { CatalogClient } from '@backstage/catalog-client';
import { loggerToWinstonLogger } from '@backstage/backend-common';
import {
  augmentationIndexerExtensionPoint,
  retrievalPipelineExtensionPoint,
  modelExtensionPoint,
} from '@alithya-oss/backstage-plugin-rag-ai-node';
import { createRoadiePgVectorStore } from '@alithya-oss/backstage-plugin-rag-ai-storage-pgvector';
import { createDefaultRetrievalPipeline } from '@alithya-oss/backstage-plugin-rag-ai-backend-retrieval-augmenter';
import { initializeOpenAiEmbeddings } from '@alithya-oss/backstage-plugin-rag-ai-backend-embeddings-openai';
import { OpenAI } from '@langchain/openai';

/** OpenAI module for Rag AI backend plugin
 * @public
 *
 */
export const ragAiModuleOpenAI = createBackendModule({
  pluginId: 'rag-ai',
  moduleId: 'openai',
  register(reg) {
    reg.registerInit({
      deps: {
        auth: coreServices.auth,
        logger: coreServices.logger,
        database: coreServices.database,
        discovery: coreServices.discovery,
        config: coreServices.rootConfig,
        indexer: augmentationIndexerExtensionPoint,
        pipeline: retrievalPipelineExtensionPoint,
        model: modelExtensionPoint,
      },
      async init({
        auth,
        logger,
        database,
        discovery,
        config,
        indexer,
        pipeline,
        model,
      }) {
        const catalogApi = new CatalogClient({ discoveryApi: discovery });
        const vectorStore = await createRoadiePgVectorStore({
          logger: loggerToWinstonLogger(logger),
          database,
          config,
        });

        indexer.setAugmentationIndexer(
          await initializeOpenAiEmbeddings({
            logger: loggerToWinstonLogger(logger),
            auth,
            catalogApi,
            vectorStore,
            discovery,
            config,
          }),
        );

        pipeline.setRetrievalPipeline(
          createDefaultRetrievalPipeline({
            auth,
            logger: loggerToWinstonLogger(logger),
            discovery,
            vectorStore,
          }),
        );

        let llmBase;

        if (config.getOptionalString('ai.query.openai.azureOpenAIApiKey')) {
          llmBase = new OpenAI({
            configuration: {
              baseURL: `https://${config.getOptionalString('ai.query.openai.azureOpenAIApiInstanceName')}.openai.azure.com/openai/deployments/${config.getOptionalString('ai.query.openai.azureOpenAIApiDeploymentName')}/chat/completions?api-version=${config.getOptionalString('ai.query.openai.azureOpenAIApiVersion')}`
            },
            apiKey: config.getOptionalString('ai.query.openai.azureOpenAIApiKey'),
            modelName: config.getOptionalString('ai.query.openai.azureOpenAIApiDeploymentName')
          })
        } else {
          llmBase = new OpenAI({
            configuration: {
              baseURL:
                config.getOptionalString('ai.query.openai.baseURL') ??
                'https://api.openai.com/v1',
            },
            apiKey:
              config.getOptionalString('ai.query.openai.apiKey') ??
              config.getOptionalString('ai.query.openai.openAIApiKey'),
            modelName:
              config.getOptionalString('ai.query.openai.modelName') ??
              'gpt-4o-mini',
          })
        }

        model.setBaseLLM(llmBase);
      },
    });
  },
});
