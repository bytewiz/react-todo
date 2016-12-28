import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
import {headlineStyle, appContainer} from "./AppStyle";
import { List } from "immutable";
import { connect } from "react-redux";
import { addTodo, editTodo, deleteTodo } from "./appActions";


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoList: props.todoList,
    }

    this.toggleCompleted = this.toggleCompleted.bind(this);
    // this.filterData = this.filterData.bind(this);
    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  addItem(e, value) {
    e.preventDefault();
    this.props.addTodo(this.props.todoList.size + 1, value)
    console.log(value);
  }

  deleteItem(id) {
    this.props.deleteTodo(id)
    // const todoList = this.state.todoList.filter((todo) => todo.id !== id)
    // this.setState({todoList:todoList})
  }

  // filterData(event) {
  //   event.preventDefault();
  //   const regex = new RegExp(event.target.value, 'i');
  //   const filtered = this.state.todoList.filter((datum) => {
  //     if(datum.title) {
  //       return (
  //         datum.title.search(regex) > -1
  //       );
  //     }
  //   });
  //
  //   this.setState({
  //     filterData: filtered
  //   });
  // }

  toggleCompleted (id) {
    console.log(id);
    this.props.editTodo(id)
    // const { todoList } = this.state;
    // let todo = todoList.find((todo) => {
    //   return todo.id === id
    // });
    // todo.completed = !todo.completed
    // this.setState({todoList: todoList})
  }

  render() {
    console.log(this.props.todoList);
    return (
      <div style={appContainer}>
        <h1 style={headlineStyle}>Todo List</h1>
        <TodoInput addItem={this.addItem} />
        <TodoList todoList={this.props.todoList}
          toggleCompleted={this.toggleCompleted}
          deleteItem={this.deleteItem}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoList: state
  }
}

const mapDispatchToProps = {
  addTodo,
  editTodo,
  deleteTodo
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
