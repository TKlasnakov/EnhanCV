/**
 * Created by TKlas on 23.2.2018 г..
 */

import React, { Component } from  'react';
import ShowCorrectStateAction from '../../../actions/ShowCorrectStateAction';
import ShowCorrectStateStore from '../../../stores/ShowCorrectStateStore';

class DesiredRole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fireChange: true
    };
    this.timeOut = null;
    ShowCorrectStateStore.on('change', () => {
      let hintId = ShowCorrectStateStore.getContent();
      if (hintId.hintId >= 2) {
        this.setState(
          {fireChange: false}
        )
      }
    })
  }

  componentDidMount () {
    const roleField = document.getElementById('desired-role__input');
    roleField.focus();
  }

  stopedTyping(event) {
    event.persist();
    const hintMessage = 'Enter a specific role. It helps personalize your resume template to it.';
    const haveButton = true;
    const hintId = 4;
    const example = 'E.g. Senior Web Developer, Product Marketing Manager, CEO, Director of Finance, Retail Manager';
    let fireChange = this.state.fireChange;
    clearTimeout(this.timeOut);
    if(fireChange && event.which <= 90 && event.which >= 48) {
      this.timeOut = setTimeout(function () {
        ShowCorrectStateAction.changeState(hintMessage, haveButton, hintId, example);
      }, 1000);
    }
  }

  render() {
    return (
      <div id="desired-role" className="desired-role">
        <textarea placeholder="Your next desired role?" id="desired-role__input" className="desired-role__input textarea" onKeyUp={this.stopedTyping.bind(this)}></textarea>
      </div>
    )
  }
}

export default DesiredRole;
