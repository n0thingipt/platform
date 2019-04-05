import { createAction, props, union } from '@ngrx/store';

export const ViewBookPageActions = {
  selectBook: createAction(
    '[View Book Page] Select Book',
    props<{ id: string }>()
  ),
};

const all = union(ViewBookPageActions);
export type ViewBookPageActions = typeof all;
