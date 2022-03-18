import React from 'react';
import styled from 'styled-components';

const UserInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 0;
  padding: 1rem;
  margin: 1rem auto;
  box-sizing: border-box;
  outline: 0;
`;
function CreateTodo({}) {
  return <UserInput type="text" placeholder="Create a new todo..." />;
}

export default CreateTodo;
