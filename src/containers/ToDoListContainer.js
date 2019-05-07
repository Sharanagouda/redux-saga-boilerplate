import { connect } from 'react-redux';
import TodoList from '../components/ToDoList';

const mapStateToProps = state => {
  return {
    toDoList: state.toDoList
  };
};

const ToDoListContainer = connect(mapStateToProps)(TodoList);

export default ToDoListContainer;
