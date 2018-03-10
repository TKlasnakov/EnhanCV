/**
 * Created by TKlas on 22.2.2018 г..
 */

import React, { Component } from 'react';
import ShowCorrectStateStore from '../../stores/ShowCorrectStateStore';

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 20
    };
    ShowCorrectStateStore.on('change', () => {
      let progress = this.state.progress;
      progress += 20;
      this.setState({
        progress: progress
      })
    })
  }

  render() {
    let style = {
      width: `${this.state.progress}%`
    };
    return (
      <div id="progress-bar" className="progress-bar">
        <span id="progress-bar__text" className="progress-bar__text">Progress</span>
        <div id="progress-bar__bar" className="progress-bar__bar">
          <div id="progress-bar__bar--progress" className="progress-bar__bar--progress" style={style}></div>
        </div>
      </div>
    )
  }
}



export default ProgressBar;
