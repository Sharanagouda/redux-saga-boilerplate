import React from 'react';
import PropType from 'prop-types';
import ListGroup from 'react-bootstrap/ListGroup';

const ToDo = ({ title }) => <ListGroup.Item>{title}</ListGroup.Item>;

ToDo.prototype = {
  title: PropType.string.isRequired
};

export default ToDo;
