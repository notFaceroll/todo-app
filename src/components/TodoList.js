import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../store/todo-context';
import Todo from './Todo';

const List = styled.ul`
  list-style: none;
  padding: 0;
  background-color: #fff;
  border-radius: 5px;
  li + li {
    border-top: 1px solid grey;
  }
`;

function TodoList({}) {
  const todoCtx = useContext(TodoContext);
  console.log(todoCtx);

  return (
    <List>
      {todoCtx.todosList.length > 0 &&
        todoCtx.todosList.map((todo, index) => (
          <Todo key={index} text={todo.text} id={todo.id} />
        ))}
    </List>
  );
}

export default TodoList;
