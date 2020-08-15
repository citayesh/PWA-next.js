import logger from "redux-logger";
import thunk from 'redux-thunk';
import rootReducer from './root-reducer';
import { createStore, applyMiddleware } from 'redux';
import { persistReducer,persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import { createWrapper } from "next-redux-wrapper";


const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}

const makeStore = () => {

          const isServer = typeof window === 'undefined';
      
          if (isServer) {
            return createStore(rootReducer, applyMiddleware(...middlewares))      
          } else {
            const { persistStore, persistReducer } = require("redux-persist");
            const storage = require("redux-persist/lib/storage").default;
        
        const persistConfig = {
          key: 'nextjs',
          storage
      };
      const persistedReducer = persistReducer(persistConfig, rootReducer);
      const store = createStore(persistedReducer,applyMiddleware(...middlewares))
      store.__persistor = persistStore(store); // Nasty hack

      return store;
  }
};
      
export const wrapper = createWrapper(makeStore);



