import React, { Component } from 'react';
import TodoList from './TodoList';
import TodoInput from './TodoInput';

const initState = [
  {id: 1, title: 'title one', completed: false},
  {id: 2, title: 'title two', completed: true},
  {id: 3, title: 'title three', completed: false},
]

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      todoList: initState,
      filterData: initState
    }

    this.toggleCompleted = this.toggleCompleted.bind(this);
    this.filterData = this.filterData.bind(this);
  }

  filterData(event) {
    event.preventDefault();
    const regex = new RegExp(event.target.value, 'i');
    const filtered = this.state.todoList.filter(function (datum) {
      if(datum.title) {
        return (
          datum.title.search(regex) > -1
        );
      }

    });

    this.setState({
      filterData: filtered
    });
  }

  toggleCompleted (id) {
    const { todoList } = this.state;
    console.log(id);
    let todo = todoList.find((todo) => {
      return todo.id === id
    });
    console.log(todo);
    todo.completed = !todo.completed
    this.setState({todoList: todoList})
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoInput filterData={this.filterData}/>
        <TodoList todoList={this.state.filterData}
          toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}
