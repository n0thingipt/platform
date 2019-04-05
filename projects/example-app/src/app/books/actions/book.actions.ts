import { createAction, props, union } from '@ngrx/store';
import { Book } from '@example-app/books/models/book';

export const BookActions = {
  loadBook: createAction(
    '[Book Exists Guard] Load Book',
    props<{ book: Book }>()
  ),
};

const all = union(BookActions);
export type BookActions = typeof all;
