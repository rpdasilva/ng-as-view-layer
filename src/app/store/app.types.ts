export type IAppState = {
  counter: { count: number },
  json: any
};

export type Action<T, P, M> = {
  type: T,
  payload?: P,
  meta?: M,
};

export type PingActionType = 'PING';
export type PongActionType = 'PONG';

export type PingAction = Action<PingActionType, string, void>;
export type PongAction = Action<PongActionType, string, void>;

export type IncrementActionType = 'INCREMENT';
export type DecrementActionType = 'DECREMENT';
export type ResetActionType = 'RESET';

export type IncrementAction = Action<IncrementActionType, void, void>;
export type DecrementAction = Action<DecrementActionType, void, void>;
export type ResetAction = Action<ResetActionType, void, void>;

export type FetchJsonActionType = 'FETCH_JSON';
export type FetchJsonSucceededActionType = 'FETCH_JSON_SUCCEEDED';

export type FetchJsonAction = Action<FetchJsonActionType, any, void>;
export type FetchJsonSucceededAction = Action<FetchJsonSucceededActionType, any, void>;
