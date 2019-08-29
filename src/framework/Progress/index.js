import React, { Component } from 'react';

import './index.less';

class Progress extends Component {
  state = {
    show: false,
  }
  start() { // 开始显示
    this.setState({
      show: true
    });
  }
  done() { // 结束隐藏
    this.setState({
      show: false
    });
  }

  render() {
    return (
      <div className="progress" style={this.state.show ? { display: 'block' } : { display: 'none' }}>
        <div className="bar">
          <div className="peg"></div>
        </div>
        <div className="spinner">
          <div className="spinner-icon"></div>
        </div>
      </div>
    )
  }
}
export default Progress;