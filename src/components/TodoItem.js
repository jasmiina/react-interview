import React, { useContext } from "react";

import { HiOutlineCheckCircle } from 'react-icons/hi';
import { HiCheckCircle } from 'react-icons/hi';
import { HiTrash } from 'react-icons/hi';

import "./TodoItem.css";
import TodosContext from "../store/todos-context";

/* Handles the rendering of each unique todoArray item. */
function TodoItem(props) {

  const todosCtx = useContext(TodosContext)

  function removeTodo() {
    todosCtx.removeTodo(props.id);
  };

  function changeCompletionStatus() {
    todosCtx.changeCompletionStatus(props.completionStatus, props.id)
  };

  return (
    <div className={'item-container'}>
      <div>
        <button
          className={'icon-btn'}
          onClick={() => changeCompletionStatus()}
          data-testid='completion-btn'>
          {props.completionStatus ?
            <HiCheckCircle data-testid='complete-svg'/> :
            <HiOutlineCheckCircle data-testid='incomplete-svg'/>}
        </button>
        <h3
          className={`h3 ${props.completionStatus ? 'complete' : 'incomplete'}`}>
          {props.name}</h3>
      </div>
      <button
        className={'icon-btn'}
        onClick={() => removeTodo()}
        data-testid='remove-btn'>
        <HiTrash />
      </button>
    </div>
  );
}

export default TodoItem;