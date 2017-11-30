import {
  PING_ACTION_TYPE,
  PONG_ACTION_TYPE,
  INCREMENT_ACTION_TYPE,
  DECREMENT_ACTION_TYPE,
  RESET_ACTION_TYPE,
  FETCH_JSON_ACTION_TYPE,
  FETCH_JSON_SUCCEEDED_ACTION_TYPE
} from './app.actions';

export type Strategy = {
  [x: string]: (state?: any, action?: any) => any;
}

const initialCounterState = { count: 0 };

export const counterReducer = ((strategies: Strategy) => (state = initialCounterState, action) => strategies[action.type] ? strategies[action.type](state, action) : state)({
  [INCREMENT_ACTION_TYPE]: state => Object.assign({}, { count: state.count + 1 }),
  [DECREMENT_ACTION_TYPE]: state => Object.assign({}, { count: state.count - 1 }),
  [RESET_ACTION_TYPE]: () => Object.assign({}, initialCounterState)
});

const initialJsonState = { posts: [] };

export const jsonReducer = ((strategies: Strategy) => (state = initialJsonState, action) => strategies[action.type] ? strategies[action.type](state, action) : state)({
  [FETCH_JSON_SUCCEEDED_ACTION_TYPE]: (state, action) => Object.assign({}, { posts: action.payload })
});