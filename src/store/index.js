import React, { createContext, useReducer } from 'react';
import { baseURL, defaultState } from '../constants';
import { reducer } from './reducer/reducer';

const initialState = {
  values: defaultState,
  fields: defaultState,
  baseURL: baseURL,
  disableButton: true,
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
};

export const Context = createContext(initialState);

export default Store;
