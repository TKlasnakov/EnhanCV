/**
 * Created by todork on 2/23/2018.
 */
import { EventEmitter } from 'events';
import dispatcher from '../dipsatcher';

class ShowCorrectStateStore extends EventEmitter {
  constructor(props) {
    super(props);
    this.showHintContent = {
      text: '',
      example: '',
      haveButton: false,
    };
  }
  changeText(text, haveButton, hintId, example) {
    this.showHintContent = {
      text,
      haveButton,
      hintId,
      example,
    };

    this.emit('change')
  }

  getContent () {
    return this.showHintContent;
  }

  getRoleField () {
    if (this.showHintContent.hintId > 2) {
      return {showRole: true};
    }
  }
  showOtherFields () {
    if (this.showHintContent.hintId === 5) {
      return {showOtherFields: true}
    }
  }

  handleAction (action) {
    switch (action.type) {
      case 'CHANGE_TEXT' : this.changeText(action.text, action.haveButton, action.hintId, action.example)
    }
  }
}

let showCurrentState = new ShowCorrectStateStore();

dispatcher.register(showCurrentState.handleAction.bind(showCurrentState));

export default showCurrentState;

