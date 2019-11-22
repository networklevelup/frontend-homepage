import React, { useEffect } from "react";
import { IUser } from "../../../interfaces/interfaces";
import { IGlobalState } from "../../../reducers/reducers";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import "../Home/Video.css";
import "./Verification.css";
import { Link } from "react-router-dom";


interface IPropsGlobal {
  users: IUser[];
}

const Verification: React.FC<
  IPropsGlobal & RouteComponentProps<{ userId: string }>
> = props => {
  
  useEffect(() => {
    fetch(
      "https://backendlevelup.herokuapp.com/api/users/" +
        props.match.params.userId +
        "/validate",
      {
        method: "GET"
      }
    ).then(response => {
      if (response.ok) {
        // setTimeout(() => props.history.push("/"), 20000);
        console.log(response)
        
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container  verificationUser">
      <h1>Welcome to LevelUP!</h1>
      <Video
        autoPlay
        controls={[
          "PlayPause",
          "Seek",
          "Time",
          "Volume",
          "Fullscreen",
          "Captions"
        ]}        
        onCanPlayThrough={() => {
          // Do stuff
        }}
      >
        <source src="/video/Welcome-Talents-Video.mp4" type="video/mp4" />
        </Video>

        <Link to="/">
            <button className="btnHome">Back to Home</button>
        </Link>
      
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  users: state.users
});

export default connect(mapStateToProps)(Verification);
