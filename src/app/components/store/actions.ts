import { createAction, props } from '@ngrx/store';

export const currentUser = createAction(
  '[Login] Current User',
  props<{ user: any }>()
);