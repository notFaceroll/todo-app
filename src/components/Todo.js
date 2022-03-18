import React from 'react';
import styled from 'styled-components';

const TodoItem = styled.li`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
`;

export default function Todo(props) {
  return <TodoItem>{props.text}</TodoItem>;
}
