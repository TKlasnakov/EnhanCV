/**
 * Created by todork on 2/23/2018.
 */

import React, { Component } from 'react';
import ShowCorrectStateAction from '../../../actions/ShowCorrectStateAction';
import ShowCorrectStateStore from '../../../stores/ShowCorrectStateStore';

class NameInput extends Component {
  constructor(props) {
    super(props);
    this.timeOut = null;
    this.state = {
      editable: true,
      fireChange: true
    };
    this.hintMessage = 'Well done! Select "Next" to continue';
    this.haveButton = true;
    ShowCorrectStateStore.on('change', () => {
      let hintId = ShowCorrectStateStore.getContent();
      if (hintId.hintId >= 2) {
        this.setState(
          {fireChange: false}
        )
      }
    })
  }

  stopedTyping(event) {
    event.persist();
    const hintMessage = this.hintMessage;
    const haveButton = this.haveButton;
    const state = 2;
    let fireChange = this.state.fireChange;
    clearTimeout(this.timeOut);
    if (fireChange && event.which <= 90 && event.which >= 48) {
      this.timeOut = setTimeout(function () {
        ShowCorrectStateAction.changeState(hintMessage, haveButton, state);
      }, 1000);
    }
  }

  render(){
    let disabled = this.state.editable ? '' : 'disabled';
    return(
      <textarea id="name-input" className="name-input textarea" placeholder="Your name" onKeyDown={this.stopedTyping.bind(this)}></textarea>
    )};
}

export default NameInput;
