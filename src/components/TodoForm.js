import React, { useState, useContext } from "react";

import { HiPlusCircle } from 'react-icons/hi';

import './TodoForm.css';
import TodosContext from "../store/todos-context";

/* Renders a form for adding a new todo.
Also handles the form submission logic. */
function TodoForm() {

  const todosCtx = useContext(TodosContext);

  const [newTodoName, setNewTodoName] = useState('');

  function newTodoNameHandler(event) {
    event.preventDefault();
    setNewTodoName(event.target.value);
  };

  function onSubmit(event) {
    event.preventDefault();
    todosCtx.addTodo(newTodoName);
  };

  return (
    <form
      className={'input-container'}
      onSubmit={onSubmit}
    >
      <input
        className={'input-field'}
        placeholder='Add new todo'
        onChange={newTodoNameHandler}
        value={newTodoName}
      />
      <button
        className={'submit-btn'}
        type="submit">
        <HiPlusCircle />
      </button>
    </form>
  );
};

export default TodoForm;