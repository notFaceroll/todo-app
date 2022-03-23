import './App.css';
import * as React from 'react';
import { useState } from 'react';
import CreateTodo from './components/CreateTodo';
import TodoFilter from './components/TodoFilter';
import TodoList from './components/TodoList';
import Header from './components/Header';
import GlobalStyles from './style/GlobalStyles';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './style/Theme';
import TodoProvider from './store/TodoProvider';

const Main = styled.main`
  width: clamp(300px, 50vw, 600px);
  margin-top: 50px;
`;

const HintText = styled.p`
  color: hsl(236, 9%, 61%);
  text-align: center;
  margin-top: 3rem;
`;

function App() {
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  const themeToggler = () => {
    currentTheme === lightTheme
      ? setCurrentTheme(darkTheme)
      : setCurrentTheme(lightTheme);
  };

  const theme = { colors: currentTheme };

  return (
    <TodoProvider>
      <ThemeProvider theme={theme}>
        <Main>
          <GlobalStyles />
          <Header themeToggler={themeToggler} />
          <CreateTodo />
          <TodoList listId={Math.random().toString(36).substring(2, 9)} />
          <TodoFilter />
          <HintText>Drag and drop to reorder list</HintText>
        </Main>
      </ThemeProvider>
    </TodoProvider>
  );
}

export default App;
