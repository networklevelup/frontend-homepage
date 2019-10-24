import React from "react";
import Form from "react-bootstrap/Form";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import ProfileWithinCV from "./ProfileWithinCV";
import ProfileWithoutCV from "./ProfileWithoutCV";


import "./TalentProfile.css";

const TalentProfile: React.FC = () => {
  const [stateValue, setState] = React.useState(true);

  const showWithinCV = () => setState(true);
  const showWithoutCV = () => setState(false);

  return (
    <div className="container">
      <div className="profileCV">
          <div className="header">
          <p className="header">Apply as talent</p>
          </div>
       
        <ButtonGroup toggle>
          <ToggleButton
            className="CVButton"
            type="radio"
            name="radio"
            defaultChecked
            value="1"
            onClick={showWithinCV}
          >
            I have full CV
          </ToggleButton>
          <ToggleButton
          className="CVButton"
            type="radio"
            name="radio"
            value="2"
            onClick={showWithoutCV}
          >
            I have no CV yet
          </ToggleButton>
        </ButtonGroup>
      </div>
      <div className="container">
        {stateValue && <ProfileWithinCV />}
        {!stateValue && <ProfileWithoutCV />}
      </div>
    </div>
  );
};

export default TalentProfile;
