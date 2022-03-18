import React from 'react';
import styled from 'styled-components';
import moonIcon from '../assets/icon-moon.svg';

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
      display: flex;
      place-items: center;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;

function Header({}) {
  return (
    <Container>
      <h1>TODO</h1>
      <div>
        <img src={moonIcon} />
      </div>
    </Container>
  );
}

export default Header;
