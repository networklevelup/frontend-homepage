import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { ICompany } from "../../../interfaces/interfaces";
import { connect } from "react-redux";
import { IGlobalState } from "../../../reducers/reducers";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import "../Home/Video.css";
import "./Verification.css";
import { Link } from "react-router-dom";

interface IPropsGlobal {
  companies: ICompany[];
}

const VerificationCompany: React.FC<
  IPropsGlobal & RouteComponentProps<{ companyId: string }>
> = props => {
  
  useEffect(() => {
    fetch(
      "https://backendlevelup.herokuapp.com/apiCompanies/companies/" +
        props.match.params.companyId +
        "/validate",
      {
        method: "GET"
      }
    ).then(response => {
      if (response.ok) {
        setTimeout(() => props.history.push("/"), 20000);
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container verification">
     
        <h1>Vielen Dank für Ihre Anmeldung bei LevelUP!.</h1>
        
        <Video
        autoPlay
        fluid
        controls={[
          "PlayPause",
          "Seek",
          "Time",
          "Volume",
          "Fullscreen",
          "Captions"
        ]}
        // poster={videoPicture + i18n.language + ".jpg"}
        onCanPlayThrough={() => {
          // Do stuff
        }}
      >
        <source src="/video/Welcome-Company-Video.mp4" type="video/mp4" />
        </Video>

        <Link to="/">
            <button className="btnHome2">Back to Home</button>
        </Link>
      
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  companies: state.companies
});

export default connect(mapStateToProps)(VerificationCompany);
