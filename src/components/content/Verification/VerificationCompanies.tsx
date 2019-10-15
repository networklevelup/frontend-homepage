import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { ICompany } from "../../../interfaces/interfaces";
import { connect } from "react-redux";
import { IGlobalState } from "../../../reducers/reducers";
import thankYou from "../../../img/Verification/thankYou.png";
import "./Verification.css";

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
        setTimeout(() => props.history.push("/"), 5000);
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container verification">
      <div>
        <h1>Vielen Dank für Ihre Anmeldung bei LevelUP!</h1>
        <h4>
          Wir haben Ihnen eine E-Mail zugesendet. Bitte klicken Sie dort auf den
          Link, um Ihre Registrierung abzuschließen!
        </h4>
        <h4>In wenigen Sekunden leiten wir Sie auf die Startseite zurück!</h4>
      </div>
      <img className="thankYou" alt="" src={thankYou} />
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  companies: state.companies
});

export default connect(mapStateToProps)(VerificationCompany);
