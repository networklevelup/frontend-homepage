import React, { useEffect } from "react";
import { RouteComponentProps, Route } from "react-router";
import { connect } from "react-redux";
import TalentRegister from "./TalentRegister";
import CompaniesRegister from "./CompaniesRegister";
import { useTranslation } from "react-i18next";
import { IGlobalState } from "../../../reducers/reducers";
import "./Register.css";

interface IPropsGlobal {
  booleanState: boolean;
}

const Form: React.FC<IPropsGlobal & RouteComponentProps> = props => {

  const { t } = useTranslation();
  const [stateValue, setState] = React.useState(true);

  const showTalentRegister = () => setState(true);
  const showCompanyRegister = () => setState(false);

  useEffect(() => { //detect from redux which state is to show a component or not
    if (props.booleanState) {
      showCompanyRegister();
    } else {
      showTalentRegister();
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    /*I create two different containers, when the state changes, the 
    background image changes according to whether it is talent or company. */
    <div className="container">
      {stateValue && (
        <div className="container talentRegistration">
          {stateValue && <h1>{t("talentRegister_formularyH1")}</h1>}
          {stateValue && (
            <h5 className="subtitle">{t("talentRegister_formularyH5")}</h5>
          )}
          {!stateValue && <h1>{t("companyRegister_formularyH1")}</h1>}
          {!stateValue && <h5>{t("companyRegister_formularyH5")}</h5>}

          <button className="btnTalent" onClick={showTalentRegister}>
            {!stateValue && <h3>I'm a talent</h3>}
            {stateValue && <h3 className="clicked">I'm a talent</h3>}
          </button>
          <button className="btnCompany" onClick={showCompanyRegister}>
            {stateValue && <h3>I'm a company</h3>}
            {!stateValue && <h3 className="clicked">I'm a company</h3>}
          </button>

          {stateValue && <Route component={TalentRegister} />}
        </div>
      )}

      {!stateValue && (
        <div className="container companyRegistration">
          {stateValue && <h1>{t("talentRegister_formularyH1")}</h1>}
          {stateValue && (
            <h5 className="subtitle">{t("talentRegister_formularyH5")}</h5>
          )}
          {!stateValue && <h1>{t("companyRegister_formularyH1")}</h1>}
          {!stateValue && <h5>{t("companyRegister_formularyH5")}</h5>}

          <button className="btnTalent" onClick={showTalentRegister}>
            {!stateValue && <h3>I'm a talent</h3>}
            {stateValue && <h3>I'm a talent</h3>}
          </button>
          <button className="btnCompany" onClick={showCompanyRegister}>
            {stateValue && <h3>I'm a company</h3>}
            {!stateValue && <h3 className="clicked">I'm a company</h3>}
          </button>

          {!stateValue && <Route component={CompaniesRegister} />}
        </div>
      )}
    </div>
  );
};

const mapsStateToProps = (state: IGlobalState) => ({
  booleanState: state.booleanState
});

export default connect(mapsStateToProps)(Form);
