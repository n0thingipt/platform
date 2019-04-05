import { createAction, props, union } from '@ngrx/store';
import { Book } from '@example-app/books/models/book';

export const CollectionApiActions = {
  addBookSuccess: createAction(
    '[Collection/API] Add Book Success',
    props<{ book: Book }>()
  ),
  addBookFailure: createAction(
    '[Collection/API] Add Book Failure',
    props<{ book: Book }>()
  ),
  removeBookSuccess: createAction(
    '[Collection/API] Remove Book Success',
    props<{ book: Book }>()
  ),
  removeBookFailure: createAction(
    '[Collection/API] Remove Book Failure',
    props<{ book: Book }>()
  ),
  loadBooksSuccess: createAction(
    '[Collection/API] Load Books Success',
    props<{ books: Book[] }>()
  ),
  loadBooksFailure: createAction(
    '[Collection/API] Load Books Failure',
    props<{ error: any }>()
  ),
};

const all = union(CollectionApiActions);
export type CollectionApiActions = typeof all;
