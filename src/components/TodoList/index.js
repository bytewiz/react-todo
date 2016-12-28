import React, { Component } from 'react';
import TodoItem from '../TodoItem';
import { listStyle } from "./TodoListStyle";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class TodoList extends Component {
  render() {
    const todos = this.props.todoList.map((todoItem, index) => {
      return (
        <TodoItem key={index}
          {...todoItem.toJS()}
          toggleCompleted={this.props.toggleCompleted}
          deleteItem={this.props.deleteItem}
        />
      )
    })
    return (
      <ul style={listStyle}>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {todos}
        </ReactCSSTransitionGroup>
      </ul>
    );
  }
}


TodoList.propTypes = {
  todoList: React.PropTypes.array.isRequired
}
