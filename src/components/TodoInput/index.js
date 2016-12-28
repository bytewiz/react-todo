import React, { Component } from 'react';
import { inputContainerStyle, inputStyle } from "./TodoInputStyle";

export default class TodoList extends Component {
  constructor() {
    super()

    this.state = {
      value: ""
    }
  }



  render() {
    return (
      <div style={inputContainerStyle}>
        <form onSubmit={(e) => {this.setState({value: ""});this.props.addItem(e,this.state.value)}}>
          <input type="text"
            style={inputStyle}
            value={this.state.value}
            onChange={(e) => {this.setState({value: e.target.value})}}
          />
        </form>
      </div>
    );
  }
}
