import React from "react";
import { Todo } from "../Todo/Todo";
import { useSelector } from "react-redux";
import "./TodoList.css"

const TodoList = () => {
  const { todos } = useSelector((state) => state.todoState);

  return (
    <div className="todo-Container">
      {todos.map((todo, index) => (
        <Todo index={index} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
