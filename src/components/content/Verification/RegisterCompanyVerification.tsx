import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";

import "./Verification.css";

const RegisterCompanyVerification: React.FC<RouteComponentProps> = props => {
  // useEffect(() => {
  //   setTimeout(() => props.history.push("/"), 5000);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div className="container verification">      
        <h1>
        Vielen Dank für Ihre Anmeldung bei LevelUP!
        </h1>
        <h4>
          Wir haben Ihnen eine E-Mail zugesendet. Bitte klicken Sie dort auf den
          Link,
         um Ihre Registrierung abzuschließen!
      In wenigen Sekunden leiten wir Sie auf die Startseite zurück.</h4>         
      
    </div>
  );
};

export default RegisterCompanyVerification;
