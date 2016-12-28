import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const { id, title, completed } = this.props;
    return (
      <li>
        <input type="checkbox"
          checked={ completed }
          onChange={(e) => {this.props.toggleCompleted(id)}}
        />
        <span>{ title }</span>
      </li>
    );
  }
}

TodoItem.propTypes = {
  title: React.PropTypes.string.isRequired,
  completed: React.PropTypes.bool.isRequired
}
