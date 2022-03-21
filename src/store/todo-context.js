import React from 'react';

const TodoContext = React.createContext({
  text: '',
  completed: false,
  isVisible: true,
  addTodo: (text) => {},
  deleteTodo: (id) => {},
  toggleTodo: (id) => {},
  reorderList: (result) => {},
  setVisibility: (status) => {},
  clearList: () => {},
});

export default TodoContext;