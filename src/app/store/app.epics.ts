import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mapTo';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/dom/ajax';
import { Observable } from 'rxjs/Observable';
import { combineEpics, ActionsObservable } from 'redux-observable';
import {
  createFetchJsonSucceededAction,
  createPongAction,
  FETCH_JSON_ACTION_TYPE,
  PING_ACTION_TYPE,
} from './app.actions';

export const testEpic = (action$: Observable<any>) =>
  action$.filter(action => action.type === PING_ACTION_TYPE)
    .delay(3000)
    .mapTo(createPongAction('PONG'));

export const getJSONMock = (action$: ActionsObservable<any>) =>
  action$.ofType(FETCH_JSON_ACTION_TYPE)
    .switchMap(() => Observable.ajax('https://jsonplaceholder.typicode.com/posts')
      .map(({response}) => response)
      .map(createFetchJsonSucceededAction));

export const appEpics = combineEpics(testEpic, getJSONMock);
