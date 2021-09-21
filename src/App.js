import { useState } from 'react';
import './App.scss';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {


  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love easy front-end!' },
    { id: 2, title: 'We love easy front-end!' },
    { id: 3, title: 'They love easy front-end!' }
  ]);

  function handleTodoClick(todo) {
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;
    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValue) {
    const newTodo = {
      id: todoList.length + 1,
      ...formValue
    }
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <header className="App-header">
        <h1>React hooks - TodoList</h1>

        <TodoForm onSubmit={handleTodoFormSubmit} />
        <TodoList todos={todoList} onTodoClick={handleTodoClick} />
      </header>
    </div>
  );
}

export default App;
