import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../store/todo-context';
import iconCross from '../assets/icon-cross.svg';
import { Checkbox } from '@mui/material';
import CircleOutlined from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import iconOutline from '../assets/icon-cross.svg';
import iconChecked from '../assets/icon-check.svg';

const TodoItem = styled.li`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    display: block;
  }

  p {
    margin: 0 auto 0 0;
  }

  button {
    border: 0;
    /* background-color: transparent; */
  }
`;

const Button = styled.button`
  background-color: red;
`;

export default function Todo(props) {
  const todoCtx = useContext(TodoContext);

  const deleteTodoHandler = () => {
    todoCtx.deleteTodo(props.id);
  };

  const toggleTodo = () => {
    todoCtx.toggleTodo(props.id, props.completed);
  };

  return (
    <TodoItem>
      <Button onClick={toggleTodo}>
        {props.completed ? (
          <img src={iconChecked} alt=''/>
        ) : (
          <img src={iconOutline} alt=''/>
        )}
      </Button>
      <Checkbox
        icon={<CircleOutlined />}
        checkedIcon={<CheckCircleIcon />}
        onChange={toggleTodo}
      />
      <p>{props.text}</p>
      <button type="button" onClick={deleteTodoHandler}>
        <img src={iconCross} />
      </button>
    </TodoItem>
  );
}
