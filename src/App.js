import React, { useContext } from 'react';

import './App.css';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import TodosContext from './store/todos-context';

function App() {

  const todosCtx = useContext(TodosContext);

  const todoItems = (
    todosCtx.todosArray.map((todo) =>
      <TodoItem
        id={todo.id}
        key={todo.id}
        name={todo.name}
        completionStatus={todo.complete}
      />
    ));

  return (
    <div className={'main-container'}>
      <TodoForm />
      {todoItems}
    </div>
  );
}

export default App;
