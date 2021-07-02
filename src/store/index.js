/* eslint-disable no-underscore-dangle */
import { createStore } from 'redux';
import rootReducer from '../reducers';
// Adiciona a configuração da extensão Redux DevTools "window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
