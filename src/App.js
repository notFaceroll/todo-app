import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

import CreateTodo from './components/CreateTodo';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import Header from './components/Header';
import GlobalStyles from './style/GlobalStyles';
import styled from 'styled-components';

const Main = styled.main`
  width: clamp(300px, 50vw, 1000px);
  margin-top: 50px;
`;

function App() {
  return (
    <Main>
      <GlobalStyles />
      <Header />
      <CreateTodo />
      <TodoList />
      <TodoFilter />
      <p>Drag and drop to reorder list</p>
    </Main>
  );
}

export default App;
