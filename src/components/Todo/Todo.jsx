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
        setEditText(todo); 
    };

    const handleEdit = () => {
        dispatch(editDataToTodoList(index, ediText));
        setEditText("");
        setIsEditing(false);
    };

    const handleDelete = () => {
        dispatch(deleteDataToTodoList(index));
    };
  
    return (
        <div key={index} className="todo">
            <h3>TODOS</h3>
            {isEditing ? (
                <>
                    <input
                        placeholder="edit text"
                        onChange={(e) => setEditText(e.target.value)}
                        value={ediText}
                        className="editInput"
                    />
                    <button onClick={handleEdit}>save</button>
                </>
            ) : (
                <>
                    <p>{todo}</p>
                    <button onClick={handleEditToggle}>edit</button>
                </>
            )}
            <button onClick={handleDelete}>delete</button>
        </div>
    );
}
