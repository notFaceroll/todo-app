import React from 'react';
import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  h1 {
    color: #fff;
    letter-spacing: 10px;
    font-weight: 500;
    font-size: 2rem;
    margin: 0;
  }

  div {
    width: 45px;
    height: 45px;
    cursor: pointer;
    background-image: url(${(props) => props.theme.colors.headerIcon});
    background-repeat: no-repeat;
    background-position: center;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

function Header({ themeToggler }) {
  return (
    <Container>
      <h1>TODO</h1>
      <div onClick={themeToggler}></div>
    </Container>
  );
}

export default Header;
