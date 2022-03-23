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
  display: flex;
  justify-content: center;
  align-items: center;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};

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
  border: ${(props) => (props.isCompleted ? 'none' : '1px solid #D2D3DB')};
  border-radius: 50%;
  width: 1.4rem;
  height: 1.4rem;
  margin-right: 1em;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-sizing: border-box;

  &:hover {
    border: ${(props) => (props.isCompleted ? 'none' : '2px solid #c058f3')};
  }
`;

const CloseButton = styled.button`
  background-image: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
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
            initial={{ scale: 1, opacity: 0 }}
            exit={{ scale: 1, opacity: 0 }}
          >
            <TodoItem
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              isVisible={props.isVisible}
            >
              <Button
                onClick={toggleTodo}
                isCompleted={props.completed}
                aria-label="Completed"
              >
                {props.completed && <img src={iconCheck} alt="" />}
              </Button>

              <Text isCompleted={props.completed}>{props.text}</Text>
              <CloseButton type="button" onClick={deleteTodoHandler}>
                <img src={iconCross} alt="" />
              </CloseButton>
            </TodoItem>
          </ItemBox>
        </AnimatePresence>
      )}
    </Draggable>
  );
}
