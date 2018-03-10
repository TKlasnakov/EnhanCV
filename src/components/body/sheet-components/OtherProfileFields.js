/**
 * Created by TKlas on 25.2.2018 г..
 */
import React from 'react';

const OtherProfileFields = () => (
  <div id="information-fields" className="information-fields">
    <div id="phone-and-email" className="phone-and-email">
      <textarea placeholder="Phone" name="Phone" id="phone" className="phone textarea"></textarea>
      <textarea placeholder="Email" name="Email" id="email" className="email textarea"></textarea>
    </div>
    <div id="website-and-location" className="website-and-location">
      <textarea placeholder="Website/Link" name="Website textarea" id="website" className="website textarea"></textarea>
      <textarea placeholder="Location" name="Location textarea" id="location" className="location textarea"></textarea>
    </div>
    <div className="clear"></div>
  </div>
);

export default OtherProfileFields
