import { TODO_TYPES } from "./types";

export function addingDataToTodoList(todo) {
  return {
    type: TODO_TYPES.ADD_TODO,
    payload: todo,
  };
}
export function deleteDataToTodoList(index) {
  return {
    type: TODO_TYPES.DELETE_TODO,
    payload: index,
  };
}
export function editDataToTodoList(index, todo) {
  return {
    type: TODO_TYPES.EDIT_TODO,
    payload: {
      index,
      todo,
    },
  };
}
