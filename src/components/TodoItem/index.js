import React, { Component } from 'react';
import { itemStyle, checkboxStyle, titleStyle, deleteStyle } from "./TodoItemStyle";

export default class TodoItem extends Component {
  render() {
    const { id, title, completed } = this.props;
    console.log(this.props);
    return (
      <li style={itemStyle}>
        <div style={checkboxStyle} onClick={(e) => {this.props.toggleCompleted(id)}}>
          {completed?
            <i style={deleteStyle}
            className="material-icons md-light">done</i>
          :
            <i style={deleteStyle}
            className="material-icons md-light">highlight_off</i>
          }
        </div>
        <div style={titleStyle}>{ title }</div>
        <i style={deleteStyle}
          className="material-icons md-light"
          onClick={() => this.props.deleteItem(id)}>delete</i>
      </li>
    );
  }
}

TodoItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired
}
