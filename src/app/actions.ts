import { ITodo } from './todo';
export enum ActionTypes { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, REMOVE_ALL_TODOS }

export interface Action {
  type: ActionTypes;
  payload?: any;
}

export const removeToDos = (): Action => ({
  type: ActionTypes.REMOVE_ALL_TODOS
});

export const addToDo = (payload): Action => ({
  type: ActionTypes.ADD_TODO,
  payload
});

export const removeToDo = (payload): Action => ({
  type: ActionTypes.REMOVE_TODO,
  payload
});

export const toggleToDo = (payload): Action => ({
  type: ActionTypes.TOGGLE_TODO,
  payload
});
