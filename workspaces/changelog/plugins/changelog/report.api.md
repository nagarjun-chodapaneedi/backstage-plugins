## API Report File for "@alithya-oss/backstage-plugin-changelog"

> Do not edit this file. It is a report generated by [API Extractor](https://api-extractor.com/).

```ts
import { Entity } from '@backstage/catalog-model';
import { JSX as JSX_2 } from 'react/jsx-runtime';

// @public (undocumented)
export const CHANGELOG_ANNOTATION_NAME = 'changelog-name';

// @public (undocumented)
export const CHANGELOG_ANNOTATION_REF = 'changelog-file-ref';

// @public (undocumented)
export type ChangelogAction = {
  name: string;
  counter: number;
  content: string;
  icon?: any;
};

// @public (undocumented)
export type ChangelogProps = {
  versionNumber: string;
  actions: ChangelogAction[];
  versionContent: string | undefined;
};

// @public (undocumented)
export const EntityChangelogCard: (
  props: EntityChangelogProps,
) => JSX_2.Element;

// @public (undocumented)
export const EntityChangelogContent: (
  props: EntityChangelogProps,
) => JSX_2.Element;

// @public
export interface EntityChangelogProps {
  // (undocumented)
  parser?(content: string): ChangelogProps[];
}

// @public (undocumented)
export const getInfoAboutChangelogAnnotationConfiguration: (
  entity: Entity,
) => string;

// @public (undocumented)
export const isChangelogAvailable: (entity: Entity) => boolean;

// @public (undocumented)
export function semverParser(content: string): ChangelogProps[];

// (No @packageDocumentation comment for this package)
```
