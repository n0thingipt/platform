import { createAction, union, props } from '@ngrx/store';
import { Book } from '@example-app/books/models/book';

export const SelectedBookPageActions = {
  addBook: createAction(
    '[Selected Book Page] Add Book',
    props<{ book: Book }>()
  ),
  removeBook: createAction(
    '[Selected Book Page] Remove Book',
    props<{ book: Book }>()
  ),
};

const all = union(SelectedBookPageActions);
export type SelectedBookPageActions = typeof all;
