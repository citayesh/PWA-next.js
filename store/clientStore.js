import { createStore } from 'redux';
import storage from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from "redux-persist";
import {loadSuccess} from "../actions";
import rootReducer from '../redux/root-reducer';
import logger from "redux-logger";
import thunk from 'redux-thunk';
import { createWrapper } from "next-redux-wrapper";


const persistConfig = {
  key: 'root',
  storage: storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middlewares = [thunk];
if (process.env.NODE_ENV === 'development') {
  middlewares.push(logger);
}


export const store =(initialState)=>{
     createStore(
     persistedReducer,
     initialState,
     applyMiddleware(...middlewares)
     );

  setTimeout(() => {
    persistStore(store);

  }, 3000);

  return store;
}
export const wrapper=createWrapper(store)