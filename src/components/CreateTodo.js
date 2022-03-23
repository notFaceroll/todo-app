import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import TodoContext from '../store/todo-context';

const UserInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 0;
  padding: 1rem;
  margin: 1rem auto;
  box-sizing: border-box;
  outline: 0;
  font-family: inherit;
  background-color: ${(props) => props.theme.colors.listBackground};
  color: ${(props) => props.theme.colors.overallText};
  font-size: inherit;
`;

const Form = styled.form`
  position: relative;
`;

const HiddenInput = styled.input`
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
`;

function CreateTodo() {
  const [text, setText] = useState('');

  const todoCtx = useContext(TodoContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.length < 1) return;
    todoCtx.addTodo(text);
    setText('');
  };

  const textInputHandler = (event) => {
    setText(event.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <UserInput
        type="text"
        placeholder="Create a new todo..."
        onChange={textInputHandler}
        value={text}
        maxLength="30"
        minLength="1"
      />
      <HiddenInput type="submit" tabIndex="-1" />
    </Form>
  );
}

export default CreateTodo;
