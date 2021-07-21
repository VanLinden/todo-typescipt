import React from "react";
import { ITodo } from "../interfaces";

interface Props {
    todo: ITodo;
    completeTask(todoNameToDelete: string): void; 
    markAsDone(todoNameToMark: string): void;
}

const TodoTask = ( {todo, markAsDone, completeTask }: Props) => {
    return (
        <div className="todo">
            <div className="content">
            {todo.isDone.toString() === "false" && <span>{ todo.title }</span>}
            {todo.isDone.toString() === "true" && <span className="contred">{ todo.title }</span>}
            </div>
            {todo.isDone.toString() === "false" && <button className="mark" onClick={() => { markAsDone(todo.title); }}>
                Mark as done
            </button>}
            {todo.isDone.toString() === "true" && <button className="mark" onClick={() => { markAsDone(todo.title); }}>
                Mark as not done
            </button>}
            <button onClick={() => {completeTask(todo.title);}}>
                    X
            </button>
        </div>
    )
}

export default TodoTask
