import { IToDoItem } from '../../components/Item/ToDoItem';
import { ACTIONS } from '../constants';

export interface ITodosState {
  todos: IToDoItem[];
}

const defaultState: ITodosState = {
  todos: [],
};

const getDate = () => {
  const date = new Date();
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
};

export const todosReducer = (state = defaultState, action: any) => {
  if (action.type === ACTIONS.ADD_TODO) {
    const date = new Date();

    const newItem = {
      key: Math.random().toString(16).slice(2),
      task: action.text,
      dateTime: getDate(),
      showDate: false,
      done: false,
      checked: false,
    };

    const newTodos = [...state.todos, newItem];

    return {
      todos: newTodos,
    };
  }

  if (action.type === ACTIONS.DELETE) {
    const afterDel = state.todos.filter((el) => el.key !== action.id);
    return {
      todos: afterDel,
    };
  }

  if (action.type === ACTIONS.COMPLETE) {
    const afterCompl = state.todos.map((el) => {
      if (el.key === action.id) {
        el.done = !el.done;
      }
      return el;
    });

    return {
      todos: afterCompl,
    };
  }

  if (action.type === ACTIONS.SHOW_DATE) {
    const afterClick = state.todos.map((el) => {
      if (el.key === action.id) {
        el.showDate = !el.showDate;
      }
      return el;
    });

    return {
      todos: afterClick,
    };
  }

  if (action.type === ACTIONS.CHECK) {
    const afterCheck = state.todos.map((el) => {
      if (el.key === action.id) {
        el.checked = !el.checked;
      }
      return el;
    });

    return {
      todos: afterCheck,
    };
  }

  if (action.type === ACTIONS.DELETE_ALL) {
    const afterDel = state.todos.filter((el) => el.checked === false);

    return {
      todos: afterDel,
    };
  }

  if (action.type === ACTIONS.COMPLETE_ALL) {
    const afterCompl = state.todos.map((el) => {
      if (el.checked === true) {
        el.done = !el.done;
        el.checked = !el.checked;
      }
      return el;
    });
    return {
      todos: afterCompl,
    };
  }

  return state;
};
