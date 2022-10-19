import { createContext } from "react";

export interface Context {
  state: Record<string, unknown>,
  setGlobalState: (state: Record<string, unknown>) => void
}

export const initState = {
  state: {},
  setGlobalState: () => {}
}

export const QiankunContext = createContext<Context>(initState)
