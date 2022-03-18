import { style } from '@mui/system';
import React from 'react';
import styled from 'styled-components';
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
  return (
    <List>
      <Todo text='mopa' />
      <Todo text='mopa' />
      <Todo text='mopa' />
      <Todo text='mopa' />
      <Todo text='mopa' />
    </List>
  );
}

export default TodoList;
