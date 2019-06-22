import React from 'react';
import Router from 'next/router';
import App, { Container } from 'next/app';
import Head from 'next/head';
import Progress from '@/src/framework/Progress';

import PrimaryLayout from '@/src/framework/PrimaryLayout';

import '@/src/global';
import '@/src/global.less';

class AdminApp extends App {
  componentDidMount() {
    Router.events.on('routeChangeStart', (url) => {
      this.progress.start();
    });

    Router.events.on('routeChangeComplete', () => {
      this.progress.done();
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>后台应用</title>
        </Head>
        <Progress ref={r => this.progress = r} />
        <PrimaryLayout router={this.props.router}>
          <Component {...pageProps} />
        </PrimaryLayout>
      </Container>
    );
  }
}

export default AdminApp;