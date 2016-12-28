import React, { Component } from 'react';

export default class TodoList extends Component {
  constructor() {
    super()

    this.state = {
      value: ""
    }
  }



  render() {
    return (
      <div>
        <input type="text"
          value={this.state.value}
          onChange={(e) => {this.setState({value: e.target.value}); this.props.filterData(e)}}
        />
      </div>
    );
  }
}
