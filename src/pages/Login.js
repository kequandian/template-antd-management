import React from 'react';
import router from 'next/router';
import { Layout, Form, Icon, Input, Button, Checkbox } from 'antd';

import './index.less';

const { Content } = Layout;

class LoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        router.push('/');
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="ZeleA-Login-Form">
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(<Checkbox>自动登录</Checkbox>)}
          <a className="ZeleA-Login-Form-forgot" href="">
            忘记密码
          </a>
          <Button type="primary" htmlType="submit" className="ZeleA-Login-Form-Button">
            登陆
          </Button>
          <a href="">注册</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create({})(LoginForm);

export default (props) => {
  return <Layout>
    <Content>
      <br />
      <br />
      <WrappedLoginForm />
    </Content>
  </Layout>
}