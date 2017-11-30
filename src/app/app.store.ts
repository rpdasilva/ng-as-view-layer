import { combineReducers, createStore, applyMiddleware, compose, StoreEnhancer } from 'redux';
import logger from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';
import { appEpics, IAppState, counterReducer, jsonReducer} from './store';

export const rootReducer = combineReducers<IAppState>({
  counter: counterReducer,
  json: jsonReducer
});

const epicMiddleware = createEpicMiddleware(appEpics);

const middlewares = applyMiddleware(epicMiddleware, logger);

const enhancers = <StoreEnhancer<IAppState>> compose(middlewares);

export const store = createStore<IAppState>(rootReducer, enhancers);
