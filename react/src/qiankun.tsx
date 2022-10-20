import { createContext, Dispatch } from "react";

export interface State {
  token?: string;
  user?: Record<string, unknown>;
}

export interface Action {
  type: string;
  payload: State;
}

export const initState: State = {
  token: "token...",
  user: {},
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    default:
      return { ...state, ...action.payload };
  }
}

export const Context = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: initState, dispatch: () => undefined });
