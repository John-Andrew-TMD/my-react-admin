import React, { Component } from 'react';
import "./styles/main.scss";
import "./styles/common.css";
import Login from './views/login/index';
import { Provider } from 'react-redux';
import store from './store';
import {
  Route,
  Switch,
  BrowserRouter,
} from 'react-router-dom';

class App extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      firstName: '111',
      lastName: '2222',
    };
  }
  UNSAFE_componentWillMount(){
    console.log("UNSAFE_componentWillMount")
  }
  componentDidMount(){
    console.log("UNSAFE_componentDidMount")
  }
  say = () => {
    console.log(1);
  };
  get fullname() {
    const { firstName, lastName } = this.state;
    return `${firstName} ${lastName}`;
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route component={Login} exact path="/" />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
