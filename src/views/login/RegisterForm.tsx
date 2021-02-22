import * as React from 'react';
import { Component } from 'react';
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.scss';

export interface Props {}

export interface State {}

class registerForm extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }
  onFinish = (values: any) => {
    console.log('Success:', values);
  };
  onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  render() {
    return (
      <Form
        name="normal_register"
        className="register-form"
        initialValues={{ remember: true }}
        onFinish={this.onFinish}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: 'Please input your Username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="passwords"
          rules={[{ required: true, message: 'Please input your Passwords!' }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Passwords"
          />
        </Form.Item>
        <Form.Item name="code">
          <Row gutter={13}>
            <Col className="gutter-row" span={15}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Col>
            <Col className="gutter-row" span={9}>
              <Button type="primary" danger block>
                获取验证码
              </Button>
            </Col>
          </Row>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="register-form-button"
            block
          >
            注 册
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default registerForm;
