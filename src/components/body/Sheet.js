/**
 * Created by TKlas on 22.2.2018 г..
 */

import React, { Component } from 'react';
import NameInput from './sheet-components/NameInput';
import DesiredRole from './sheet-components/DesiredRole';
import OtherProfileFields from './sheet-components/OtherProfileFields';
import OtherFields from './sheet-components/OtherFields';
import ShowCorrectStateStore from '../../stores/ShowCorrectStateStore';

class Sheet extends Component {
  constructor (props) {
    super(props);
    this.state = {
      showRole: false,
      showOtherFields: false
    };
    ShowCorrectStateStore.on('change', () => {
      this.setState(ShowCorrectStateStore.getRoleField());
      this.setState(ShowCorrectStateStore.showOtherFields());
    })
  }

  componentDidMount () {
    const nameField = document.getElementById('name-input');
    nameField.focus();
  }

  render () {
    let desiredRole = this.state.showRole ? <DesiredRole/> : '';
    let profileOtherFields = this.state.showOtherFields ? <OtherProfileFields/> : '';
    let profilePicture = this.state.showOtherFields ? <div id="profile-picture" className="profile-picture"></div> : '';
    let otherFields = this.state.showOtherFields ? <OtherFields/> : '';
    return (
      <div className="main-content-wrapper" id="main-content-wrapper">
        <div className="main-content-wrapper__content"  id="main-content-wrapper__content">
          <div id="name-and-role" className="name-and-role">
            <NameInput/>
            {desiredRole}
          </div>
          {profilePicture}
          {profileOtherFields}
          <div>
            {otherFields}
          </div>
        </div>
      </div>
    )
  }
}

export default Sheet;