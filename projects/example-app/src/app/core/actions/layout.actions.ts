import { createAction, union } from '@ngrx/store';

export const LayoutActions = {
  openSidenav: createAction('[Layout] Open Sidenav'),
  closeSidenav: createAction('[Layout] Close Sidenav'),
};

const all = union(LayoutActions);
export type LayoutActions = typeof all;
