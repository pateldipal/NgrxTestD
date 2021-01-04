import { Action, createReducer, on, State } from '@ngrx/store';
import {LoadUsersAction} from './user.actions';

export const userFeatureKey = 'user';

// tslint:disable-next-line:no-empty-interface
export interface UserState {
  data: any;
  name: string;
}

export const initialState: UserState = {
  data: '',
  name: ''
};
export interface UserAppState {
  [userFeatureKey]: UserState;
}


export const GetreducerUser = createReducer<UserState>(
  initialState,
  on(LoadUsersAction.loadUsersSuccess, (state, { data }) => {
    return { ...state, data , name: 'test' };
  }),
);
// tslint:disable-next-line:typedef
export function reducer(state: UserState | undefined, action: Action) {
  return GetreducerUser(state, action);
}

