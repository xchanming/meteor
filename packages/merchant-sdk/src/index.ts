import * as window from './window';
import * as notification from './notification';
import * as toast from './toast';
import * as context from './context';
import * as componentSection from './ui/component-section';
import tabs from './ui/tabs';
import * as location from './location';
import * as menu from './ui/menu';
import * as mainModule from './ui/main-module';
import * as modal from './ui/modal';
import * as data from './data';
import * as iap from './iap';
import type EntityCollectionType from './_internals/data/EntityCollection';
import type { Entity as EntityType } from './_internals/data/Entity';
import composables from './data/composables';

const ui = {
  componentSection,
  tabs,
  menu,
  mainModule,
  modal,
};

/**
 * The main export which will be available by direct imports.
 */
export {
  window,
  notification,
  toast,
  context,
  ui,
  location,
  data,
  composables,
  iap,
};

/**
 * Declare global EntitySchema namespace for allowing to extend the entity definitions
 */

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace EntitySchema {
    type EntityCollection<EntityName extends keyof EntitySchema.Entities> = EntityCollectionType<EntityName>;
    type Entity<EntityName extends keyof EntitySchema.Entities> = EntityType<EntityName>;

    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    export interface Entities {
      /* This will be extended by the entity-schema */
      private_example_entity: private_example_entity,
      private_example_entity_two: private_example_entity_two,
    }

    interface private_example_entity {
      id: string,
    }

    interface private_example_entity_two {
      id: string,
    }
  }
}