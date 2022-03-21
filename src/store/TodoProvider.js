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
        isVisible: true,
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

    case 'REORDER': {
      if (!action.payload.result.destination) return;

      const list = state;
      const [reorderedList] = list.splice(
        action.payload.result.source.index,
        1
      );
      list.splice(action.payload.result.destination.index, 0, reorderedList);
      console.log(list);
      return list;
    }

    case 'CLEAR': {
      const updatedList = state.filter((todo) => todo.completed === false);
      return updatedList;
    }

    case 'VISIBILITY': {
      if (action.payload.status === 'completed') {
        const visibleTodos = state.map((todo) => {
          if (!todo.completed) {
            todo.isVisible = false;
            return todo;
          }
          todo.isVisible = true;
          return todo;
        });
        return visibleTodos;
      } else if (action.payload.status === 'active') {
        const visibleTodos = state.map((todo) => {
          if (todo.completed) {
            todo.isVisible = false;
            return todo;
          }
          todo.isVisible = true;
          return todo;
        });
        return visibleTodos;
      } else if (action.payload.status === 'all') {
        const visibleTodos = state.map((todo) => {
          todo.isVisible = true;
          return todo;
        });
        return visibleTodos;
      }
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

  const reorderList = (result) => {
    dispatch({ type: 'REORDER', payload: { result } });
  };

  const setVisibility = (status) => {
    dispatch({ type: 'VISIBILITY', payload: { status } });
  };

  const clearList = () => {
    dispatch({ type: 'CLEAR' });
  };

  const todoContext = {
    todosList: state,
    addTodo,
    deleteTodo,
    toggleTodo,
    reorderList,
    setVisibility,
    clearList,
  };

  return (
    <TodoContext.Provider value={todoContext}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
