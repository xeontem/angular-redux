import { ITodo } from './todo';
import { ActionTypes } from './actions';
import { Action } from './actions';

export interface IAppState {
  todos: ITodo[];
  lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
  todos: [],
  lastUpdate: null
};

export function rootReducer(state: IAppState, action: Action): IAppState {
  switch (action.type) {
    case ActionTypes.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
        lastUpdate: new Date()
      };
    case ActionTypes.REMOVE_TODO:
    console.log(action.payload)
      return {
        ...state,
        todos: [...state.todos.splice(0, action.payload), ...state.todos.splice(action.payload + 1)]
      };
    case ActionTypes.TOGGLE_TODO:
      const nextTodos = [...state.todos];
      nextTodos[action.payload].isCompleted = !nextTodos[action.payload].isCompleted;
      return {
        ...state,
        todos: nextTodos
      };
    case ActionTypes.REMOVE_ALL_TODOS:
      return {
        ...state,
        todos: [],
        lastUpdate: new Date()
      };
  }
  return state;
}
