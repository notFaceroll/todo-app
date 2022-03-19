import React from 'react';

const TodoContext = React.createContext({
  text: '',
  completed: false,
  addTodo: (text) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
});

export default TodoContext;