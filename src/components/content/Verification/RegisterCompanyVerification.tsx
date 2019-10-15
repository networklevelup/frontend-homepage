import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import thankYou from "../../../img/Verification/thankYou.png";
import "./Verification.css";

const RegisterCompanyVerification: React.FC<RouteComponentProps> = props => {
  useEffect(() => {
    setTimeout(() => props.history.push("/"), 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container verification">
      <div>
        <h1>
          Vielen Dank, dass Sie sich der LevelUP-Community angeschlossen haben.
        </h1>
        <h4>
          Wir haben eine E-Mail geschickt, um die Registrierung zu bestätigen.
        </h4>
        <h4>In Kürze werden wir Sie auf die Hauptseite weiterleiten.</h4>
      </div>
      <img className="thankYou" alt="" src={thankYou} />
    </div>
  );
};

export default RegisterCompanyVerification;
