import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    color: #fff;
    letter-spacing: 10px;
    font-weight: 500;
    font-size: 2rem;
    margin: 0;
  }

  button {
    width: 45px;
    height: 45px;
    cursor: pointer;
    background-image: url(${(props) => props.theme.colors.headerIcon});
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.5s ease;
    border-radius: 5px;
    border: 0;
    background-color: transparent;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2);
    }
  }
`;

function Header({ themeToggler }) {
  return (
    <Container>
      <h1>TODO</h1>
      <button onClick={themeToggler} aria-label="Change theme"></button>
    </Container>
  );
}

export default Header;
