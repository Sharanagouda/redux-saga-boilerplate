import React from 'react';
import PropTypes from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';
import Jumbotran from 'react-bootstrap/Jumbotron';
import ToDo from './Todo';

const ToDoList = ({ toDoList }) => (
  <Jumbotran>
    <ListGroup>
      {toDoList.map((toDo, index) => (
        <ToDo key={index} {...toDo} />
      ))}
    </ListGroup>
  </Jumbotran>
);

ToDoList.protoType = {
  toDoList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};
export default ToDoList;
