import React from 'react';
import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AddToDo from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';
import Navigation from './components/Navigation';
import { Route } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Row className="row">
        <Col xs={12}>
          <h1> To Do List</h1>
          <Navigation />
          <Route exact path="/" component={ToDoListContainer} />
          <Route exact path="/new-item" component={AddToDo} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
