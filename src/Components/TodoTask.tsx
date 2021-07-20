import React from "react";
import { ITodo } from "../interfaces";

interface Props {
    todo: ITodo;
    completeTask(todoNameToDelete: string): void; 
}

const TodoTask = ( {todo, completeTask }: Props) => {
    return (
        <div className="todo">
            <div className="content">
                <span>{ todo.todoName }</span>
            </div>
            <button 
            onClick={() => {
                completeTask(todo.todoName);}}>X</button>
        </div>
    )
}

export default TodoTask
