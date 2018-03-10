/**
 * Created by todork on 2/23/2018.
 */

import dispatcher from '../dipsatcher';

let showCorrectState = {
  changeState: (text, haveButton, hintId, example) => {
    dispatcher.dispatch({
      type: 'CHANGE_TEXT',
      text,
      haveButton,
      hintId,
      example,
    })
  }
};

export default showCorrectState;
