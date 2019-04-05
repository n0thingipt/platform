import { createAction, union } from '@ngrx/store';

export const CollectionPageActions = {
  loadCollection: createAction('[Collection Page] Load Collection'),
};

const all = union(CollectionPageActions);
export type CollectionPageActions = typeof all;
