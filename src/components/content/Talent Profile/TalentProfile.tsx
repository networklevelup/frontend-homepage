import React, { useEffect } from "react";

import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import ProfileWithinCV from "./ProfileWithinCV";
import ProfileWithoutCV from "./ProfileWithoutCV";

import "./TalentProfile.css";
import { connect } from "react-redux";
import { IGlobalState } from "../../../reducers/reducers";
import { IUser } from "../../../interfaces/interfaces";
import { RouteComponentProps, Route } from "react-router";


interface IPropsGlobal {
  token: string;
  users: IUser[];
}

const TalentProfile: React.FC<IPropsGlobal & RouteComponentProps<{ userId: string }>> = props => {
  const [stateValue, setState] = React.useState(true);

  const showWithinCV = () => setState(true);
  const showWithoutCV = () => setState(false);

  return (
    <div className="container">
      <div className="profileCV">
          <div className="apply">
          <p className="apply">Apply as talent</p>
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
        {stateValue && <Route component={ProfileWithinCV} />}
        {!stateValue && <ProfileWithoutCV />}
      </div>
    </div>
  );
};
const mapStateToProps = (state: IGlobalState) => ({
  users: state.users,
  token: state.token
});

export default connect(mapStateToProps)(TalentProfile);
