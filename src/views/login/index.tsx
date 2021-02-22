import * as React from 'react';
import { Component, Fragment } from 'react';

import './index.scss';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
export interface Props {}

export interface State {
  isLogin: boolean;
  component?: any;
}

class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLogin: true,
    };
  }
  get computed():any{
      return this.state.isLogin?LoginForm:RegisterForm
  }
  onFinish = (values: any) => {
    console.log('Success:', values);
  };
  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  handleClickSwitch = ()=>{
    this.setState({
        isLogin:!this.state.isLogin
    })
  };
  render() {
    let Component: any = this.computed;
    return (
      <div className="form-wrap d-flex a-center">
        <div>
          <div className="form-header">
            <h4 className="column">{this.state.isLogin?'登录':'注册'}</h4>
            <span onClick = {this.handleClickSwitch}>{this.state.isLogin?'账号登录':'账号注册'}</span>
          </div>
          <div className="form-content">
            <Component />
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
