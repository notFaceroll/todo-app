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
import TodoProvider from './store/TodoProvider';

const Main = styled.main`
  width: clamp(300px, 50vw, 600px);
  margin-top: 50px;
`;

const HintText = styled.p`
  color: hsl(236, 9%, 61%);
  text-align: center;
  margin-top: 2rem;
`;

function App() {
  return (
    <TodoProvider>
      <Main>
        <GlobalStyles />
        <Header />
        <CreateTodo />
        <TodoList
          listId={Math.random().toString(36).substring(2, 9)}
        />
        <TodoFilter />
        <HintText>Drag and drop to reorder list</HintText>
      </Main>
    </TodoProvider>
  );
}

export default App;
