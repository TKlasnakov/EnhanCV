/**
 * Created by TKlas on 25.2.2018 г..
 */

import React from 'react';

const OtherField = () => (
  <div id="other-fields-wrapper" className="other-fields-wrapper">
    <div id="left-side" className="left-side other-fields">
      <div id="experience" className="experience">
        <h1 className="title">EXPERIENCE</h1>
        <div>
          <textarea placeholder="Title/Position" name="Position" id="position" className="position textarea"></textarea>
          <textarea placeholder="Company Name" name="Compnay Name" id="company" className="company textarea"></textarea>
          <div id="location-and-time" className="location-and-time">
            <textarea placeholder="from-to" name="Time" id="from-to" className="from-to textarea"></textarea>
            <textarea placeholder="Location" name="Location" id="location" className="location textarea"></textarea>
          </div>
          <textarea placeholder="Company Description" name="Company Description" id="description" className="description textarea"></textarea>
          <ul>
            <li>
              <textarea placeholder="What was an example of a successful outcome of this activity?(e.g. Made 30+ partnerships)"
                        name="example" id="example" className="example textarea" rows="5"></textarea>
            </li>
          </ul>
        </div>
        <div>
          <textarea placeholder="Title/Position" name="Position" id="position2" className="position textarea"></textarea>
          <textarea placeholder="Company Name" name="Compnay Name" id="company2" className="company textarea"></textarea>
          <div id="location-and-time" className="location-and-time">
            <textarea placeholder="from-to" name="Time" id="from-to2" className="from-to textarea"></textarea>
            <textarea placeholder="Location" name="Location" id="location2" className="location textarea"></textarea>
          </div>
          <textarea placeholder="Company Description" name="Company Description" id="description2" className="description textarea"></textarea>
          <ul>
            <li>
              <textarea placeholder="What was an example of a successful outcome of this activity?(e.g. Made 30+ partnerships)"
                        name="example" id="example2" className="example textarea" rows="5"></textarea>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div id="right-side" className="right-side other-fields">
      <div id="achievements" className="achievements">
        <h1 className="title">ACHIEVEMENTS</h1>
        <div id="row1" className="row1">
          <textarea placeholder="What are you most proud of?" name="Most Proud Of" id="most-proud" className="most-proud textarea"></textarea>
          <textarea placeholder="A bit about your achievement" name="Bit more" id="bit-more" className="bit-more textarea"></textarea>
        </div>
        <div id="row2" className="row2">
          <textarea placeholder="What are you most proud of?" name="Most Proud Of" id="most-proud" className="most-proud textarea"></textarea>
          <textarea placeholder="A bit about your achievement" name="Bit more" id="bit-more" className="bit-more textarea"></textarea>
        </div>
      </div>
      <div>
        <h1 className="title">LANGUAGES</h1>
      </div>
    </div>
  </div>
);

export default OtherField;
