## API Report File for "@alithya-oss/backstage-plugin-scaffolder-backend-module-aws-core"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { AwsCredentialsManager } from '@backstage/integration-aws-node';
import { BackendFeature } from '@backstage/backend-plugin-api';
import { TemplateAction } from '@backstage/plugin-scaffolder-node';

// @public (undocumented)
const awsCoreScaffolderModule: BackendFeature;
export default awsCoreScaffolderModule;

// @public (undocumented)
export const createAwsCloudControlCreateAction: (options: {
  credsManager: AwsCredentialsManager;
}) => TemplateAction<any, any, 'v1'>;

// @public (undocumented)
export const createAwsCodeCommitPublishAction: (options: {
  credsManager: AwsCredentialsManager;
}) => TemplateAction<any, any, 'v1'>;

// @public (undocumented)
export const createAwsEventBridgeEventAction: (options: {
  credsManager: AwsCredentialsManager;
}) => TemplateAction<any, any, 'v1'>;

// @public (undocumented)
export const createAwsS3CpAction: (options: {
  credsManager: AwsCredentialsManager;
}) => TemplateAction<any, any, 'v1'>;

// (No @packageDocumentation comment for this package)
```
