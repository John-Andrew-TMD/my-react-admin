import * as React from 'react';
import { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';
import {validate_password} from '../../utils/validate'
import { Login } from "../../api/account";
export interface Props {}

export interface State {
  sendCodeText:string
  timer:number
}

class LoginForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      timer: 0,
      sendCodeText:"获取验证码"
    };
  }
  onFinish = (values: any) => {
    console.log('Success:', values);
    Login(values).then(response=>{

    }).catch(error=>{

    })
  };
  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  sendCode=()=>{
    if (this.state.sendCodeText != "｜ 获取验证码") {
      return false;
    }
  };
  render() {
    let state = this.state
    return (
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={this.onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            { required: true, message: '邮箱不为空' },
            {type:"email",message:"邮箱格式不为空"}
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={
            [
              { required: true, message: '密码不为空' },
              // ({ getFieldValue }) => ({
              //   validator(rule, value) {
              //     if (value.length<6) {
              //       return Promise.reject('不能小于6位');
              //     }else{
              //       return Promise.resolve();
              //     }
              //   },
              // }),
              // { min: 6, message: '不能小于6位' },
              // { max: 20, message: '不能大于20位' },
              { pattern: validate_password, message: '不能大于20位' },
            ]
          }
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="字母+数字，大于6位"
          />
        </Form.Item>
        <Form.Item name="code" 
          rules={[
            { required: true, message: '验证码不为空' },
            {len:6,message:'验证码长度为6'}
          ]}
        >
          <Row gutter={13}>
            <Col className="gutter-row" span={15}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="code"
              />
            </Col>
            <Col className="gutter-row" span={9}>
              <Button type="primary" disabled={state.sendCodeText!= '获取验证码'} onClick = {this.sendCode} danger block>
                {state.sendCodeText}
              </Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            block
          >
            登 录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default LoginForm;
