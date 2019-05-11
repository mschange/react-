import React, { Component } from 'react';

require ('./index.css')


function A(WrappedComponent) {
  return class A extends Component {
    render() {
      return (
        <div className="box">
          <div className="header">
            A组件首页
          </div>
          <div>
            <WrappedComponent />
          </div>
          <div className="footer">
            A组件底部
          </div>
        </div>
      );
    }
  }
}


export default A;