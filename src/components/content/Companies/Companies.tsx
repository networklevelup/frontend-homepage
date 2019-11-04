import React from "react";
import { useTranslation } from "react-i18next";
import { Link, RouteComponentProps } from "react-router-dom";
import { IGlobalState } from "../../../reducers/reducers";
import * as actions from "../../../actions/actions";
import { connect } from "react-redux";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import pic1Comp from "../../../img/CompaniesPage/Design1.png";
import pic2Comp from "../../../img/CompaniesPage/pic2Comp.png";
import pic3Comp from "../../../img/CompaniesPage/pic3Comp.png";
import pic4Comp from "../../../img/CompaniesPage/weAre.png";
import telegram from "../../../img/CompaniesPage/telegram.png";
import "./Companies.css";

const companyPicture = "/img/pic5Comp-"; //use to change language picture

interface IPropsGlobal {
  booleanState: boolean;
  changingState: (boolenaState: boolean) => void;
}

const ForCompanies: React.FC<IPropsGlobal & RouteComponentProps> = props => {
  const { t, i18n } = useTranslation();

  const change = () => props.changingState(true);

  return (
    <div className="container all">
      <div className="row companies1">
        <div className="col-6 firstText">
          <h1>{t("companies_companies1H1")}</h1>
          <h6>{t("companies_companies1H5")}</h6>
          <Link to="/register">
            <button onClick={change} className="btn btn-success btnGreen">
              {t("companies_companiesButton")}
            </button>
          </Link>
        </div>

        <div className="col-6 picture1">
          <img className="pic1Comp" alt="" src={pic1Comp} />
        </div>
      </div>
      <div className="container companiesGroup">
        <div className="container-fluid companies2">
          <h1>{t("companies_companies2H1")}</h1>
          <h6>{t("companies_companies2H5")}</h6>
          <div className="row picture2">
            <div className="col-6 ">
              <img className="pic2Comp" alt="" src={pic2Comp} />
            </div>

            <div className="col-6 comparability">
              <div>
                <h2>{t("companies_comparabilityH2")}</h2>
                <h6 className="moreMargin">{t("companies_comparabilityH5")}</h6>

                <h6 className="moreMargin">
                  {t("companies_comparabilityH5-2")}
                </h6>
              </div>
              <div>
                <h4>
                  <strong>{t("companies_comparabilityH4Strong")}</strong>
                </h4>
                <h6>{t("companies_comparabilityH52")}</h6>
              </div>
              <img src={telegram} className="signUp" alt="" />
              <Link to="/register">
                <button onClick={change} className="btnSignUp">
                  {t("companies_companiesButtonSingUp")}
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="container-fluid companies3">
          <div className="row">
            <div className="col-6 comparability secondText">
              <h2>{t("companies_companies3H2")}</h2>
              <h6 className="moreMargin">{t("companies_companies3H5")}</h6>
              <h6>{t("companies_companies3H52")}</h6>
              <img src={telegram} className="signUp" alt="" />
              <Link to="/register">
                <button onClick={change} className="btnSignUp">
                  {t("companies_companiesButtonSingUp")}
                </button>
              </Link>
            </div>

            <div className="col-6 picture3">
              <div>
                <img className="pic3Comp" alt="" src={pic3Comp} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid companies4">
        <div className="row">
          <div className="col-6 picture4">
            <img className="pic4Comp" alt="" src={pic4Comp} />
          </div>
          <div className="col-6 comparability hereForYou">
            <h2>{t("companies_companies4H2")}</h2>
            <h6 className="moreMargin">{t("companies_companies4H5")}</h6>
            <h6>{t("companies_companies4H52")}</h6>
            <img src={telegram} className="signUp" alt="" />
            <Link to="/register">
              <button onClick={change} className="btnSignUp">
                {t("companies_companiesButtonSingUp")}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="container-fluid companies5">
        <h2>{t("companies_companies5H2")}</h2>
        <div className="picture5">
          <img
            className="pic5Comp"
            alt=""
            src={companyPicture + i18n.language + ".png"}
          />
          <Link to="/register">
            <button onClick={change} className="btnInPicture3"></button>
          </Link>
        </div>
      </div>
      <ScrollUpButton
        EasingType="easeInOutQuad"
        ShowAtPosition={200}
        AnimationDuration={700}
      />
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  booleanState: state.booleanState
});

const mapDispatchToProps = {
  changingState: actions.changingState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ForCompanies);
