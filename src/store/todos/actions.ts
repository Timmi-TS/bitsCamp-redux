import { action } from 'typesafe-actions';

import { TodoActionTypes, Todo } from './types';

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
//
// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.
export const addTodo = (todo: Todo) => action(TodoActionTypes.ADD_TODO, todo);
export const setTodoChecked = (index: number, checked: boolean) =>
    action(TodoActionTypes.SET_TODO_CHECKED, { index, checked });
export const setTodoDelete = (index: number) => action(TodoActionTypes.SET_TODO_DELETE, index);
