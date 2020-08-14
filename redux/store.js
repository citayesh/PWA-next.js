import logger from "redux-logger";
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import { useMemo } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { createWrapper } from "next-redux-wrapper";

let store;

const persistConfig = {
  key: 'primary',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const initStore = (initialState) => {
  return createStore(
    persistedReducer,
    initialState,
    applyMiddleware(...middlewares)
  )
}


export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState)


  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    })
    // Reset the current store
    store = undefined
  }


  // For SSG and SSR always create a new store
  if (typeof window === 'undefined') return _store
  // Create the store once in the client
  if (!store) store = _store

  return _store
}

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState])
  return store
}

export const wrapper =createWrapper((initializeStore));

