/**
 * Created by todork on 2/23/2018.
 */

import React, { Component } from 'react';
import Header from './header/Header';
import Sheet from './body/Sheet';
import Hints from './body/Hints'

const MainPage = (props) => (
  <div id="content-wrapper" className="content-wrapper">
    <Header/>
    <Sheet/>
    <Hints/>
  </div>
);

export default MainPage;