import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
    deleteDataToTodoList,
    editDataToTodoList,
} from "../../modules/todos/action";

import "./todo.css"



export function Todo({index, todo}) {
    const [ediText, setEditText] = useState("");
    const [isEditing, setIsEditing] = useState(false); 
    const dispatch = useDispatch();
  
    const handleEditToggle = () => {
        setIsEditing(!isEditing); 
        setEditText(""); 
      };
    const handleEddit = (index) => {
      dispatch(editDataToTodoList(index, ediText));
      setEditText("");
      setIsEditing(false);
    };
    const handleDelete = (index) => {
      dispatch(deleteDataToTodoList(index));
    };
  
    return (
      <div key={index} className="todo">
        <h3>TODOS</h3>
        <p>{todo}</p>
        {isEditing ? (
        <>
          <input
            placeholder="edit text"
            onChange={(e) => setEditText(e.target.value)}
            value={ediText}
            className="editInput"

          />
          <button  onClick={() => handleEddit(index)}>save</button>
        </>
      ) : (
        <>
          <button onClick={handleEditToggle}>edit</button>
        </>
      )}
      
<button onClick={() => handleDelete(index)}>delete</button> 
      
      </div>
    );
}
