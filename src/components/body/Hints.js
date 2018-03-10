/**
 * Created by TKlas on 22.2.2018 г..
 */

import React, { Component } from 'react';
import ShowCorrectStateAction from '../../actions/ShowCorrectStateAction';
import ShowCorrectStateStore from '../../stores/ShowCorrectStateStore';

class Hints extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '5 quick steps to Enhancv. First type your name.',
      example: '',
      haveButton: false
    };
    ShowCorrectStateStore.on('change', () => {
      this.setState(ShowCorrectStateStore.getContent());
      console.log(this.state);
    });
  }

  targetElement() {
    const roleField = document.getElementById('desired-role__input');
    roleField.focus();
  }

  changeHint () {
    console.log(this.state.hintId);
    switch (this.state.hintId) {
      case 2:
        this.setState ({
          haveButton: false,
          text: 'Now type the role you are applying for',
          example: 'E.g. Senior Web Developer, Product Marketing Manager, CEO, Director of Finance, Retail Manager'
        }, () => {
          ShowCorrectStateAction.changeState(this.state.text, this.state.haveButton, 3, this.state.example);
        });
        break;
      case 4:
        this.setState({
          haveButton: true,
          text: `Great! Your resume is now tailored for a {SENIORITY} position in {INDUSTRY}`,
          example: 'This is not the role you are applying for?',
          anchor: true,
        }, () => {
          ShowCorrectStateAction.changeState(this.state.text, this.state.haveButton, 5, this.state.example);
        });
    }
  }

  hideHints() {
    document.getElementById('hint').style.display = 'none';
  }

  render () {
    let button = this.state.haveButton ? (<button id="next-button" className="next-button" onClick={this.changeHint.bind(this)}> Next </button>) : '';
    let example = this.state.example ? (<span id="example" className="example">{this.state.example}</span>) : '';
    let anchor = this.state.anchor ? <span id="change-position" className="example change-position" onClick={this.targetElement.bind(this)}>Change Next Desired Role</span> : '';
    let closeButton = this.state.hintId === 5 ? (<div id="close-button" className="close-button" onClick={this.hideHints.bind(this)}>✖</div>) : '';
    return (
      <div id="hint" className="hint">
        <span>{this.state.text}</span>
        <div>{example} {anchor}</div>
        <div>{button}</div>
        {closeButton}
      </div>
    )
  }
}

export default Hints;
