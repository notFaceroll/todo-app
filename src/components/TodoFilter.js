import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  padding: .25rem;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 5px;
`;

const List = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Action = styled.li`
  margin: 0 10px;
`;

function TodoFilter({}) {
  return (
    <Nav>
      <List>
        <Action>All</Action>
        <Action>Active</Action>
        <Action>Completed</Action>
      </List>
    </Nav>
  );
}

export default TodoFilter;
