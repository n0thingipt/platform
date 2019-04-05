import { createAction, props, union } from '@ngrx/store';
import { User } from '@example-app/auth/models/user';

export const AuthApiActions = {
  loginSuccess: createAction(
    '[Auth/API] Login Success',
    props<{ user: User }>()
  ),
  loginFailure: createAction(
    '[Auth/API] Login Failure',
    props<{ error: any }>()
  ),
  loginRedirect: createAction('[Auth/API] Login Redirect'),
};

const all = union(AuthApiActions);
export type AuthApiActions = typeof all;
