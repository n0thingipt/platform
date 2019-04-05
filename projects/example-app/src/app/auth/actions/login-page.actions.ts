import { createAction, props, union } from '@ngrx/store';
import { Credentials } from '@example-app/auth/models/user';

export const LoginPageActions = {
  login: createAction(
    '[Login Page] Login',
    props<{ credentials: Credentials }>()
  ),
};

const all = union(LoginPageActions);
export type LoginPageActions = typeof all;
