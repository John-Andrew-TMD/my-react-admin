import React, { Component } from 'react';
import "./assets/scss/main.scss";
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import { Provider } from 'react-redux';
import store from './store';
import {
  Route,
  Switch,
  NavLink,
  Link,
  Router,
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
  componentWillMount(){
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
            <Route component={Home} exact path="/" />
            <Route component={About} path="/about" />
            <Route component={News} path="/news" />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
export default App;
