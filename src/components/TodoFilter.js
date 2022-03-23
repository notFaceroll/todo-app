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
  background-color: ${(props) => props.theme.colors.listBackground};
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

function TodoFilter() {
  const todoCtx = useContext(TodoContext);
  const [active, setActive] = useState('all');

  const handleChange = (event, activeState) => {
    if (activeState !== null) {
      setActive(activeState);
    }
    todoCtx.setVisibility(event.target.value);
  };

  let totalVisibleItems = todoCtx.todosList.filter(
    (todo) => todo.completed === false
  );

  return (
    <Nav>
      <Container>
        <span>
          {totalVisibleItems.length} Item{`(s)`} left
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
          '& button:hover': {
            backgroundColor: 'transparent',
            color: 'hsl(235, 19%, 35%)',
          },
          '& button.Mui-selected': {
            color: 'hsl(220, 98%, 61%)',
            backgroundColor: 'transparent',
          },
          '& button.Mui-selected:hover': {
            backgroundColor: 'transparent',
          },
        }}
      >
        <ToggleButton value="all" aria-label="All">
          All
        </ToggleButton>
        <ToggleButton value="active" aria-label="Active">
          Active
        </ToggleButton>
        <ToggleButton value="completed" aria-label="Completed">
          Completed
        </ToggleButton>
      </ToggleButtonGroup>
      <Container>
        <button
          onClick={() => {
            todoCtx.clearList();
          }}
          aria-label="Clear completed"
        >
          Clear completed
        </button>
      </Container>
    </Nav>
  );
}

export default TodoFilter;
