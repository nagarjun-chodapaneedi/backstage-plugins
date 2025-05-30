## API Report File for "@alithya-oss/backstage-plugin-amazon-ecs-common"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { Cluster } from '@aws-sdk/client-ecs';
import { Entity } from '@backstage/catalog-model';
import { Service } from '@aws-sdk/client-ecs';
import { Task } from '@aws-sdk/client-ecs';

// @public (undocumented)
export const AWS_ECS_SERVICE_ARN_ANNOTATION =
  'aws.amazon.com/amazon-ecs-service-arn';

// @public (undocumented)
export const AWS_ECS_SERVICE_TAGS_ANNOTATION =
  'aws.amazon.com/amazon-ecs-service-tags';

// @public (undocumented)
export interface ClusterResponse {
  // (undocumented)
  cluster: Cluster;
  // (undocumented)
  services: Array<ServiceResponse>;
}

// @public (undocumented)
export function mockEcsCluster(cluster: string): {
  activeServicesCount: number;
  capacityProviders: string[];
  clusterArn: string;
  clusterName: string;
  defaultCapacityProviderStrategy: {
    base: number;
    capacityProvider: string;
    weight: number;
  }[];
  pendingTasksCount: number;
  registeredContainerInstancesCount: number;
  runningTasksCount: number;
  settings: never[];
  statistics: never[];
  status: string;
  tags: never[];
};

// @public (undocumented)
export function mockEcsService(
  service: string,
  cluster: string,
  desiredCount: number,
  runningCount: number,
  pendingCount: number,
): {
  clusterArn: string;
  createdAt: Date;
  createdBy: string;
  deploymentConfiguration: {
    deploymentCircuitBreaker: {
      enable: boolean;
      rollback: boolean;
    };
    maximumPercent: number;
    minimumHealthyPercent: number;
  };
  deploymentController: {
    type: 'ECS';
  };
  deployments: {
    createdAt: Date;
    desiredCount: number;
    failedTasks: number;
    id: string;
    launchType: 'FARGATE';
    networkConfiguration: {
      awsvpcConfiguration: {
        assignPublicIp: 'DISABLED';
        securityGroups: string[];
        subnets: string[];
      };
    };
    pendingCount: number;
    platformFamily: string;
    platformVersion: string;
    rolloutState: 'COMPLETED';
    rolloutStateReason: string;
    runningCount: number;
    status: string;
    taskDefinition: string;
    updatedAt: Date;
  }[];
  desiredCount: number;
  enableECSManagedTags: boolean;
  enableExecuteCommand: boolean;
  events: {
    createdAt: Date;
    id: string;
    message: string;
  }[];
  healthCheckGracePeriodSeconds: number;
  launchType: 'FARGATE';
  loadBalancers: {
    containerName: string;
    containerPort: number;
    targetGroupArn: string;
  }[];
  networkConfiguration: {
    awsvpcConfiguration: {
      assignPublicIp: 'DISABLED';
      securityGroups: string[];
      subnets: string[];
    };
  };
  pendingCount: number;
  placementConstraints: never[];
  placementStrategy: never[];
  platformFamily: string;
  platformVersion: string;
  propagateTags: 'SERVICE';
  roleArn: string;
  runningCount: number;
  schedulingStrategy: 'REPLICA';
  serviceArn: string;
  serviceName: string;
  serviceRegistries: never[];
  status: string;
  taskDefinition: string;
};

// @public (undocumented)
export function mockEcsTask(
  service: string,
  cluster: string,
): {
  attachments: {
    details: {
      name: string;
      value: string;
    }[];
    id: string;
    status: string;
    type: string;
  }[];
  attributes: {
    name: string;
    value: string;
  }[];
  availabilityZone: string;
  clusterArn: string;
  connectivity: 'CONNECTED';
  connectivityAt: Date;
  containers: {
    containerArn: string;
    cpu: string;
    healthStatus: 'UNKNOWN';
    image: string;
    imageDigest: string;
    lastStatus: string;
    name: string;
    networkBindings: never[];
    networkInterfaces: {
      attachmentId: string;
      privateIpv4Address: string;
    }[];
    runtimeId: string;
    taskArn: string;
  }[];
  cpu: string;
  createdAt: Date;
  desiredStatus: string;
  enableExecuteCommand: boolean;
  ephemeralStorage: {
    sizeInGiB: number;
  };
  group: string;
  healthStatus: 'HEALTHY';
  lastStatus: string;
  launchType: 'FARGATE';
  memory: string;
  overrides: {
    containerOverrides: {
      name: string;
    }[];
    inferenceAcceleratorOverrides: never[];
  };
  platformFamily: string;
  platformVersion: string;
  pullStartedAt: Date;
  pullStoppedAt: Date;
  startedAt: Date;
  startedBy: string;
  tags: never[];
  taskArn: string;
  taskDefinitionArn: string;
  version: number;
};

// @public (undocumented)
export const mockEntityWithArn: Entity;

// @public (undocumented)
export const mockEntityWithTags: Entity;

// @public (undocumented)
export interface ServiceResponse {
  // (undocumented)
  service: Service;
  // (undocumented)
  tasks: Array<Task>;
}

// @public (undocumented)
export interface ServicesResponse {
  // (undocumented)
  clusters: Array<ClusterResponse>;
}

// (No @packageDocumentation comment for this package)
```
