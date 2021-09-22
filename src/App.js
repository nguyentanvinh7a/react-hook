import { useEffect, useState } from 'react';

import './App.scss';
import PostList from './components/PostList';

function App() {


  // const [todoList, setTodoList] = useState([
  //   { id: 1, title: 'I love easy front-end!' },
  //   { id: 2, title: 'We love easy front-end!' },
  //   { id: 3, title: 'They love easy front-end!' }
  // ]);

  // function handleTodoClick(todo) {
  //   const index = todoList.findIndex(x => x.id === todo.id);
  //   if (index < 0) return;
  //   const newTodoList = [...todoList];
  //   newTodoList.splice(index, 1);
  //   setTodoList(newTodoList);
  // }

  // function handleTodoFormSubmit(formValue) {
  //   const newTodo = {
  //     id: todoList.length + 1,
  //     ...formValue
  //   }
  //   const newTodoList = [...todoList];
  //   newTodoList.push(newTodo);
  //   setTodoList(newTodoList);
  // }

  const [postList, setPostList] = useState([]);

  useEffect(() => {
    try {
      async function fetchPostList() {
        const requestUrl = 'https://js-post-api.herokuapp.com/api/posts?_limit=10&_page=1';
        const response = await (await fetch(requestUrl)).json();
        const { data } = response;
        setPostList(data);
      }
      fetchPostList();
    } catch (error) {
      console.log('Failed to fetch post list: ', error.message);
    }

  }, []);

  return (
    <div className="app">
      <header className="App-header">
        <h1>React hooks - PostList</h1>

        {/* <TodoForm onSubmit={handleTodoFormSubmit} />
        <TodoList todos={todoList} onTodoClick={handleTodoClick} /> */}

        <PostList posts={postList} />
      </header>
    </div>
  );
}

export default App;
