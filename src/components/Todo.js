import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../store/todo-context';

const TodoItem = styled.li`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

export default function Todo(props) {
  const todoCtx = useContext(TodoContext);

  const deleteTodoHandler = () => {
    todoCtx.deleteTodo(props.id);
  };

  return (
    <TodoItem>
      {props.text} <span onClick={deleteTodoHandler}>Delete</span>
    </TodoItem>
  );
}
