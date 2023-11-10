import { TODO_TYPES } from "./types";

const initialState = {
  todos: [],
  loading: false,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_TYPES.ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case TODO_TYPES.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo, index) => index !== action.payload),
      };
    case TODO_TYPES.EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === action.payload.index ? action.payload.todo : todo
        ),
      };

    default:
      return state;
  }
};

export default todoReducer;
