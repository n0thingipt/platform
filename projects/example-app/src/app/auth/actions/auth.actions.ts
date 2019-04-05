import { createAction, union } from '@ngrx/store';

export const AuthActions = {
  logout: createAction('[Auth] Logout'),
  logoutConfirmation: createAction('[Auth] Logout Confirmation'),
  logoutConfirmationDismiss: createAction('[Auth] Logout Confirmation Dismiss'),
};

const all = union(AuthActions);
export type AuthActions = typeof all;
