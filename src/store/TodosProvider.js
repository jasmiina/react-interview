import React, { useReducer } from "react";

import TodosContext from "./todos-context";

const defaultTodos = {
  todosArray: [
    { id: 1, name: 'Go to the supermarket', complete: false },
    { id: 2, name: 'Call Alice', complete: false },
    { id: 3, name: 'Ask Alice to call Bob', complete: false },
    { id: 4, name: 'Do the dishes', complete: false },
    { id: 5, name: 'Change car tyres', complete: false }
  ]
};

function todosReducer(state, action) {
  if (action.type === 'ADD') {
    const id = `${action.name}_${new Date().getTime()}`; //generate id from todo name and current date & time
    const updatedTodos = ([
      ...state.todosArray,
      {
        id: id,
        name: action.name,
        complete: false,
      }
    ])
    return { todosArray: updatedTodos };
  }

  else if (action.type === 'REMOVE') {
    const updatedTodos = state.todosArray.filter((todo) =>
      todo.id !== action.id);
    return { todosArray: updatedTodos };
  }

  else if (action.type === 'SET COMPLETE') {
    const updatedTodos = state.todosArray.map((todo) => {
      if (todo.id === action.id) {
        todo.complete = true;
        return todo;
      }
      else {
        return todo;
      }
    })
    return { todosArray: updatedTodos }
  }

  else if (action.type === 'SET INCOMPLETE') {
    const updatedTodos = state.todosArray.map((todo) => {
      if (todo.id === action.id) {
        todo.complete = false;
        return todo;
      }
      else {
        return todo;
      }
    })
    return { todosArray: updatedTodos }
  };
};

/* Defines TodosContext base values and functions.
Uses useReducer() to dispatch actions requested by components.
Also works as the context provider for the whole app. */
function TodosProvider(props) {

  const [todosState, dispatchAction] = useReducer(todosReducer, defaultTodos)

  function addTodoHandler(todoName) {
    dispatchAction({ type: 'ADD', name: todoName });
  };

  function removeTodoHandler(id) {
    dispatchAction({ type: 'REMOVE', id: id });
  };

  function completionChangeHandler(currentCompletionStatus, id) {
    if (currentCompletionStatus === false) {
      dispatchAction({ type: 'SET COMPLETE', id: id });
    }
    else if (currentCompletionStatus === true) {
      dispatchAction({ type: 'SET INCOMPLETE', id: id });
    };
  };

  const todoContext = {
    todosArray: todosState.todosArray,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
    changeCompletionStatus: completionChangeHandler,
  };

  return (
    <TodosContext.Provider value={todoContext}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;