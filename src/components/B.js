import React, { Component } from 'react';
import A from './A';

import ImgUrl from '../images/timg.jpg'

class B extends Component {
  render() {
    return (
      <div className="B_components">
        <img src={ImgUrl} className="images" alt=""/>
      </div>
    );
  }
}

export default A(B);