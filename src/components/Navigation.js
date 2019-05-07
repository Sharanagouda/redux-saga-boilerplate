import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavigationBar = styled.div`
  padding: 5px;
  margin-bottom: 15px;
  background-color: lightgray;
`;

export default () => (
  <NavigationBar>
    <div style={{ paddingBottom: '10px' }}>
      <Link className="btn btn-primary" to="/">
        To-Do List
      </Link>
      <Link className="btn btn-secondary" to="/new-item">
        +Add New
      </Link>
    </div>
  </NavigationBar>
);
