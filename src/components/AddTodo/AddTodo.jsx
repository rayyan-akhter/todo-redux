import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addingDataToTodoList } from "../../modules/todos/action";
import"./addTodo.css"

export const AddTodo = () => {
  const [input, setInput] = useState("");
  const { loading } = useSelector((state) => state.todoState);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(addingDataToTodoList(input));
    setInput("");
  };

  return (
    <div className="todo-action-container">
      <div class="input-container">
        <input placeholder="Enter text" class="input-field" type="text" onChange={(e)=>setInput(e.target.value)} value={input} />
        <label for="input-field" class="input-label">
          Enter text
        </label>
        <span class="input-highlight"></span>
      </div>
      <button disabled={loading} onClick={handleClick} className="addTodo">
        add todo
      </button>
    </div>
  );
};
