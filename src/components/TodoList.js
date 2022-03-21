import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../store/todo-context';
import Todo from './Todo';
import { Droppable, DragDropContext, Draggable } from 'react-beautiful-dnd';

const List = styled.ul`
  list-style: none;
  padding: 0;
  background-color: #fff;
  border-radius: 5px;
  li + li {
    border-top: 1px solid grey;
  }
`;

const Container = styled.div`
  padding: 0;
`;

function TodoList({ listId }) {
  const todoCtx = useContext(TodoContext);
  console.log(todoCtx);
  console.log(listId);
  const onDragEnd = (result) => {
    // TODO: reorder our column
  };

  const handleReorder = (result) => {
    todoCtx.reorderList(result);
  }

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
              />
            ))}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default TodoList;
