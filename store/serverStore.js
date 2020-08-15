import { createStore } from 'redux';
import reducers from "../reducers/index";
import rootReducer from '../redux/root-reducer';

export default (initialState, {isServer}) => {
  return createStore(rootReducer, initialState);
}