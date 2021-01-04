import { createFeatureSelector, createSelector } from '@ngrx/store';
import {userFeatureKey, UserState} from './user.reducer';

export const getFeatureState = createFeatureSelector<UserState>(userFeatureKey);

export const userSelector = {
  getPosts: createSelector(getFeatureState, state => state.data),
};
