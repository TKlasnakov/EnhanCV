/**
 * Created by TKlas on 22.2.2018 г..
 */

import React from 'react';
import ProgressBar from './ProgressBar';

const Header = (proprs) => (
  <div className="header" id="header">
    <a href="https://enhancv.com/" id="logo" className="logo">
      <img src="https://app.enhancv.com/2577a4aaebb51878c8d496093056f3c5.svg" alt="EnhanCV Logo"/>
    </a>
    <ProgressBar/>
    <a id="sign-in" className="sign-in" href="https://app.enhancv.com/resume/new">Sign in</a>
  </div>
);

export default Header;
