import {FC, ChangeEvent, useState} from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import {ITodo} from './interfaces';

const App: FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todoList, setTodoList] = useState<ITodo[]>([])

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "todo") {
      setTodo(event.target.value);
    }
  }

  const addTask = (): void => {
    const newTodo = { todoName: todo }
    setTodoList([...todoList, newTodo]);
    setTodo("");
  }

  const completeTask = (todoNameToDelete: string): void => {
    setTodoList(todoList.filter((todo) => {
      return todo.todoName !== todoNameToDelete
    }))
  }

  return (
    <div className="App">
      <div className="header">
        <div className="imputContainer">
          <input 
          type="text" 
          autoComplete="off"
          placeholder="What to do" 
          name="todo" 
          value={todo} 
          onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add todo</button>
      </div>
      <div className="todoList">
        {todoList.map((todo: ITodo, key: number) => {
          return <TodoTask key={key} todo={todo} completeTask={completeTask} />;
        })}
      </div>
    </div>
  );
}

export default App;
