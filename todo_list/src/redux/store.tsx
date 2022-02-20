import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ITodosState, todosReducer } from './reducers/TodosReducer';

export interface IState {
  todosReducer: ITodosState;
}

export const store = createStore(
  combineReducers({ todosReducer }),
  composeWithDevTools()
);
