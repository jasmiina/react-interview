import React from 'react';

/* Should contain information about the current todos and provides functions for
changing the todos */
const TodosContext = React.createContext({
 todosArray: [],
 addTodo: () => {},
 removeTodo: () => {},
 changeCompletionStatus: () => {}
});

export default TodosContext;