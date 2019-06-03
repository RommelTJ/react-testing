import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import async from "./middlewares/async";
import reducers from './reducers';
import reduxThunk from 'redux-thunk';

export default ({children, initialState = {}}) => {
  const store = createStore(reducers, initialState, applyMiddleware(async, reduxThunk));
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
