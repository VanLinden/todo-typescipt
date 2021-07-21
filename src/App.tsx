import {FC, ChangeEvent, useState} from 'react';
import './App.css';
import TodoTask from './Components/TodoTask';
import {ITodo} from './interfaces';

type Props = {
  todos?: todo[];
};

type todo = {
  id: string | number;
  title: string;
  isDone: boolean;
};

const App: FC<Props> = (props) => {
  const [todo, setTodo] = useState<string>("")
  // const [filter, setFilter] = useState<'all' | 'undone'>('all');
  // const [doneCount, setDoneCount] = useState(0);
  const [todoList, setTodoList] = useState<ITodo[]>([])
  const [updateView, setUpdateView] = useState(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === "todo") {
      setTodo(event.target.value);
    }
  }

  const addTask = (): void => {
    const newTodo = { id: new Date().getTime(), title: todo, isDone: false }
    setTodoList([...todoList, newTodo]);
    setTodo("");
  }

  const markAsDone = (todoNameToMark: string): void => {
      todoList.forEach(element => {
        if (element.title === todoNameToMark) 
        {
          element.isDone = true
        }
      });
      setUpdateView((updateView) => ++updateView);
  };

  const completeTask = (todoNameToDelete: string): void => {
    setTodoList(todoList.filter((todo) => {
      return todo.title !== todoNameToDelete
    }))
    // setDoneCount(todoList.length);
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
          return <TodoTask key={key} todo={todo} completeTask={completeTask} markAsDone={markAsDone} />;
        })}
      </div>
      <span style={{ display: "none" }}>{updateView}</span>
    </div>
  );
}

export default App;
