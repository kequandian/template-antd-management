import React from 'react';

const errorMsg = {
  404: '未找到页面',
  403: '无权限',
  undefined: '程序运行错误',
  null: '程序运行错误',
};

class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode };
  }


  render() {
    const { classes, statusCode } = this.props;

    return (
      <div className="ZeleA-Error">
        <div>
          <h1 className="ZeleA-Error-code">{statusCode || 0}</h1>
          <div className="ZeleA-Error-message">
            <h2>{errorMsg[statusCode]}</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Error;