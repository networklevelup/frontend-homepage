import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import imgRegistration from "../../../img/Verification/postcard.png";

import "./Verification.css";

const RegisterCompanyVerification: React.FC<RouteComponentProps> = props => {
  // useEffect(() => {
  //   setTimeout(() => props.history.push("/"), 5000);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="container verification">
      <br />
      <br />
      <h1>Vielen Dank für Ihre Anmeldung bei LevelUP!</h1>
      <br />
      <div className="row justify-content-center">
        <div className="col-6.5 registration">
          <img className="Image1" src={imgRegistration} />
        </div>
      </div>
      <br />
      <h4>Wir haben Ihnen eine E-Mail zugesendet.</h4>
      <h4>
        Bitte klicken Sie dort auf den Link, um Ihre Registrierung
        abzuschließen!
      </h4>
      <h4> In wenigen Sekunden leiten wir Sie auf die Startseite zurück.</h4>
      <br />
      <br />
    </div>
  );
};

export default RegisterCompanyVerification;
