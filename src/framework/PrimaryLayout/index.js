import React from 'react';
import { Layout, Menu } from 'antd';
import LeftNav from './LeftNav';
import Breadcrumb from './Breadcrumb';
import Login from './Login';

import './index.less';

const { Header, Content, Sider } = Layout;

export default function PrimaryLayout({ router, children }) {

  if (router.asPath === '/login') {
    return children;
  }

  return <Layout>
    <Header className="topNav">
      <div className="logo" />
      <Menu
        className="menu"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1">nav 1</Menu.Item>
      </Menu>
      <div className="login">
        <Login />
      </div>
    </Header>
    <Layout className="ant-layout-has-sider">
      <Sider width={200} style={{ background: '#fff' }}>
        <LeftNav path={router.asPath} />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Breadcrumb path={router.asPath} />
        <Content
          style={{
            background: '#fff',
            // padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  </Layout>
}