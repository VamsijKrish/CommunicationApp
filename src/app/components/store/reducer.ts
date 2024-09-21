import { createReducer, on } from '@ngrx/store';
import { currentUser } from './actions';

export interface InitialState {
  user: any;
}

export const initialState: InitialState = {
  user: null
};

const _dataReducer = createReducer(
  initialState,
  on(currentUser, (state, { user }) => ({ ...state, user }))
);

export function dataReducer(state: InitialState | undefined, action: any) {
  return _dataReducer(state, action);
}
