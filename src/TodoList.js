import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todoList.map((todoItem, index) => {
          return (
            <TodoItem key={index}
              {...todoItem}
              toggleCompleted={this.props.toggleCompleted}
            />
          )
        })}
      </ul>
    );
  }
}


TodoList.propTypes = {
  todoList: React.PropTypes.array.isRequired
}
