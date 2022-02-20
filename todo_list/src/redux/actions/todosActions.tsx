import { ACTIONS } from '../constants';

export const addTodo = (text: string) => {
  return {
    type: ACTIONS.ADD_TODO,
    text: text,
  };
};

export const deleteTodo = (id: string) => {
  return {
    type: ACTIONS.DELETE,
    id: id,
  };
};

export const completeTodo = (id: string) => {
  return {
    type: ACTIONS.COMPLETE,
    id: id,
  };
};

export const showDate = (id: string) => {
  return {
    type: ACTIONS.COMPLETE,
    id: id,
  };
};

export const check = (id: string) => {
  return {
    type: ACTIONS.CHECK,
    id: id,
  };
};

export const deleteAll = () => {
  return {
    type: ACTIONS.DELETE_ALL,
  };
};

export const completeAll = () => {
  return {
    type: ACTIONS.COMPLETE_ALL,
  };
};
