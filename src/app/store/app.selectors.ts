import { createSelector } from 'reselect';
import { IAppState } from './app.types';

export const counterStateSelector = (state: IAppState) => state.counter;

export const countPathSelector = createSelector(
  counterStateSelector,
  (counter: any) => counter.count,
);

export const jsonStateSelector = (state: IAppState) => state.json;

export const postsPathSelector = createSelector(
  jsonStateSelector,
  (json: any) => json.posts,
);