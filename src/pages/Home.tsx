import * as React from 'react';
import { Component, Fragment } from 'react';
import { Button } from 'antd';
export interface IUser {
  age: number;
}
interface IProps {
  name?: string;
  age?: number;
  auth?: boolean;
  user?: IUser;
}

class Lee extends Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <ul>
          <li>312312</li>
          <li>312312</li>
          <li>312312</li>
          <li>312312</li>
        </ul>
        <Button type="primary">Primary Button</Button>
        {/* <h1 name = {'Lee'}>Lee</h1> */}
        <div>home</div>
        <h1>{this.props.name}</h1>
        <h1>{this.props.age}</h1>
        <h1>{this.props.user?.age}</h1>
      </Fragment>
    );
  }
}

export default Lee;
