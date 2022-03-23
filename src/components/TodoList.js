import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../store/todo-context';
import Todo from './Todo';
import { Droppable, DragDropContext, Draggable } from 'react-beautiful-dnd';

const List = styled.ul`
  list-style: none;
  padding: 0;
  background-color: ${props => props.theme.colors.listBackground};
  border-radius: 8px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  overflow: hidden;
`;

const Container = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: hsl(236, 9%, 61%);
  border-top: 1px solid ${(props) => props.theme.colors.border};
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

  @media screen and (min-width: 899px) {
    display: none;
  }
`;

function TodoList({ listId }) {
  const todoCtx = useContext(TodoContext);

  const handleReorder = (result) => {
    if (!result.destination) return;
    todoCtx.reorderList(result);
  };

  let totalVisibleItems = todoCtx.todosList.filter(
    (todo) => todo.isVisible === true
  );

  return (
    <DragDropContext onDragEnd={handleReorder}>
      <Droppable droppableId={listId}>
        {(provided) => (
          <List ref={provided.innerRef} {...provided.droppableProps}>
            {todoCtx.todosList.length > 0 &&
              todoCtx.todosList.map((todo, index) => (
                <Todo
                  key={index}
                  text={todo.text}
                  id={todo.id}
                  completed={todo.completed}
                  index={index}
                  isVisible={todo.isVisible}
                />
              ))}
            {todoCtx.todosList.length > 0 && <Container>
              <span>
                {totalVisibleItems.length} Item{`(s)`}{' '}
              </span>
              <button
                onClick={() => {
                  todoCtx.clearList();
                }}
              >
                Clear completed
              </button>
            </Container>}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TodoList;
