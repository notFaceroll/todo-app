import React, { useReducer } from 'react';
import TodoContext from './todo-context';

const defaultTodoState = [];

const todoReducer = (state, action) => {
  switch (action.type) {
    case 'ADD': {
      const newTodo = {
        id: Math.random().toString(36).substring(2, 9),
        text: action.payload.text,
        completed: false,
      };
      return [...state, newTodo];
    }
    case 'DELETE': {
      const updatedTodoList = state.filter(
        (todo) => todo.id !== action.payload.id
      );
      return updatedTodoList;
    }

    case 'TOGGLE': {
      console.log('toggle');
      const updatedTodos = state.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !action.payload.completed;
          return todo;
        }
        return todo;
      });
      return updatedTodos;
    }
  }
};

const TodoProvider = (props) => {
  const [state, dispatch] = useReducer(todoReducer, defaultTodoState);

  const addTodo = (text) => {
    dispatch({ type: 'ADD', payload: { text } });
  };

  const deleteTodo = (id) => {
    dispatch({ type: 'DELETE', payload: { id } });
  };

  const toggleTodo = (id, completed) => {
    dispatch({ type: 'TOGGLE', payload: { id, completed } });
  };

  const todoContext = {
    todosList: state,
    addTodo,
    deleteTodo,
    toggleTodo,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
