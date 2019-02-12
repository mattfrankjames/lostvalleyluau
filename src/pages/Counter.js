import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <p>Current count: {this.state.count}</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>Plus</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>Minus</button>
      </div>
    );
  }
}
