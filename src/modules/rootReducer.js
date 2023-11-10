import todoReducer from "./todos/reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todoState: todoReducer,
});


export default rootReducer