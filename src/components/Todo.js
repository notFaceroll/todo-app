import React, { useContext } from 'react';
import styled from 'styled-components';
import TodoContext from '../store/todo-context';
import iconCross from '../assets/icon-cross.svg';
import iconCheck from '../assets/icon-check.svg';
import { Draggable } from 'react-beautiful-dnd';
import { motion, AnimatePresence } from 'framer-motion';

const ItemBox = styled(motion.li)`
  background-color: ${(props) => props.theme.colors.listBackground};
  width: 100%;
  :not(:last-of-type) {
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
  }
`;

const TodoItem = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    display: block;
  }
`;

const Text = styled.p`
  margin: 0 auto 0 0;
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
  color: ${(props) =>
    props.isCompleted
      ? props.theme.colors.completedText
      : props.theme.colors.overallText};
`;

const Button = styled.button`
  background-image: ${(props) =>
    props.isCompleted ? 'linear-gradient(to right, #57ddff, #c058f3)' : 'none'};
  background-color: transparent;
  border: ${(props) => (props.isCompleted ? 'none' : '1px solid grey')};
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1em;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const CloseButton = styled(Button)`
  background-image: none;
  background-color: transparent;
  border: 0;
  margin: 0;
`;

export default function Todo(props) {
  const todoCtx = useContext(TodoContext);

  const deleteTodoHandler = () => {
    todoCtx.deleteTodo(props.id);
  };

  const toggleTodo = () => {
    todoCtx.toggleTodo(props.id, props.completed);
  };

  return (
    <Draggable draggableId={props.id} index={props.index} key={props.id}>
      {(provided) => (
        <AnimatePresence>
          <ItemBox
            animate={{ scale: 1, opacity: 1 }}
            initial={{ scale: 0.5, opacity: 0 }}
            exit={{ scale: 0.5, opacity: 0 }}
          >
            <TodoItem
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              isVisible={props.isVisible}
            >
              <Button onClick={toggleTodo} isCompleted={props.completed}>
                {props.completed && <img src={iconCheck} alt="" />}
              </Button>

              <Text isCompleted={props.completed}>{props.text}</Text>
              <CloseButton type="button" onClick={deleteTodoHandler}>
                <img src={iconCross} />
              </CloseButton>
            </TodoItem>
          </ItemBox>
        </AnimatePresence>
      )}
    </Draggable>
  );
}
