import * as React from 'react';
import { Component } from 'react';
export interface Props {}

export interface IState {
  counter: number;
}

class State extends React.Component<Props, IState> {
  constructor(props: any, context: any) {
    super(props);
    this.state = {
      counter: 0,
    };
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((state, props) => ({
        counter: state.counter + 1,
      }));
    }, 100);
  }
  render() {
    return <>{this.state.counter}</>;
  }
}

export default State;
