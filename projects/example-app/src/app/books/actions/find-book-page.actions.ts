import { createAction, props, union } from '@ngrx/store';

export const FindBookPageActions = {
  searchBooks: createAction(
    '[Find Book Page] Search Books',
    props<{ query: string }>()
  ),
};

const all = union(FindBookPageActions);
export type FindBookPageActions = typeof all;
