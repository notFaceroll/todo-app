import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import TodoContext from '../store/todo-context';

const Nav = styled.nav`
  padding: 0.25rem;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: hsl(236, 9%, 61%);
  button {
    font-family: inherit;
    font-size: inherit;
    color: currentColor;
    border: 0;
    background-color: transparent;
    cursor: pointer;

    &:hover {
      color: hsl(220, 98%, 61%);
    }
  }

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

function TodoFilter({}) {
  const todoCtx = useContext(TodoContext);
  const [active, setActive] = useState('all');

  const handleChange = (event, activeState) => {
    if (activeState !== null) {
      setActive(activeState);
    }
    console.log(event.target.value);
    todoCtx.setVisibility(event.target.value);
  };

  let totalVisibleItems = todoCtx.todosList.filter(
    (todo) => todo.isVisible === true
  );

  return (
    <Nav>
      <Container>
        <span>
          {totalVisibleItems.length} Item{`(s)`}{' '}
        </span>
      </Container>
      <ToggleButtonGroup
        color="primary"
        exclusive
        value={active}
        onChange={handleChange}
        sx={{
          '& button': {
            border: 0,
            fontWeight: 700,
            color: 'hsl(236, 9%, 61%)',
            textTransform: 'capitalize',
            fontFamily: 'inherit',
          },
          '& button.Mui-selected': {
            color: 'hsl(220, 98%, 61%)',
            backgroundColor: 'transparent',
          },
        }}
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="active">Active</ToggleButton>
        <ToggleButton value="completed">Completed</ToggleButton>
      </ToggleButtonGroup>
      <Container>
        <button
          onClick={() => {
            todoCtx.clearList();
          }}
        >
          Clear completed
        </button>
      </Container>
    </Nav>
  );
}

export default TodoFilter;
