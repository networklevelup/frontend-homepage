import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { IInsta } from "../../../interfaces/interfaces";
import { IGlobalState } from "../../../reducers/reducers";
import * as actions from "../../../actions/actions";
import { connect } from "react-redux";
import { Link, RouteComponentProps } from "react-router-dom";
import styles from "./home.module.css";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import img1 from "../../../img/HomePage/NewGirl.png";
import "./home.css";

const proPicture = "/img/profesions-"; //Use to can change picture to translate

interface IPropsGlobal {
  instagram: IInsta[];
  setInstagram: (instagram: IInsta) => void;
  booleanState: boolean;
  changingState: (boolenaState: boolean) => void;
}

const Home: React.FC<IPropsGlobal & RouteComponentProps> = props => {
  const { t, i18n } = useTranslation();

  /*funcions to save a boolean state in redux */
  const goToTalents = () => props.changingState(false);
  const goToCompanies = () => props.changingState(true);

  useEffect(() => {
    fetch("https://backendlevelup.herokuapp.com/api/instagram", {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"                      
      }
    }).then(response => {
      response.json().then(result => {
        props.setInstagram(result);
      });
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container">
      <div className="row home1">
        <div className="col-6 generation">
          <h1>{t("home_generationH1")}</h1>
          <h5>{t("home_generationH5")}</h5>
          <Link to="/talents">
            <button className={styles.btnPurple}>{t("home_btnPurple")}</button>
          </Link>
        </div>
        <div className="col-5 pictures">
          <img className="Picture1" alt="" src={img1} />
        </div>
      </div>
      <br />
      <br />

      <div className="row center">
        <div className="prismBackground">
          <h1>{t("home_homeH1")}</h1>
          <div className="row allMatching">
            <div className="col-6 matching">
              <Link to="/register">
                <button
                  onClick={goToTalents}
                  className="btnInPicture1"
                ></button>
              </Link>
            </div>
            {/*buttons hidden to redirect a form */}
            <div className="col-6 matching2">
              <Link to="/register">
                <button
                  onClick={goToCompanies}
                  className={styles.btnInPicture3}
                ></button>
              </Link>
            </div>
          </div>

          <div className="profesionPicture">
            <h1>{t("home_focusProfessionsH1")}</h1>
            <img
              className="proPic"
              alt=""
              src={proPicture + i18n.language + ".png"}
            />
            {/*how to change picture for diferents languages*/}
            <h5 className="mb-5">{t("home_focusEndH5")}</h5>
          </div>
        </div>

        <div className="levelUp">
          <h1 className="levelUpTitle">{t("home_levelUPH1")}</h1>
        </div>
        <div className="levelUpPicture">
          <Link to="/video">
            <button className="btnInPicture2"></button>
          </Link>
        </div>
        <div className="whatIs">
          <h1>{t("home_joinH1")}</h1>
          <h2 className="network">{t("home_networkH2")}</h2>
        </div>
      </div>

      <div className="container instagram">
        <div className="row">
          {props.instagram.slice(0, 6).map(insta => (
            <div key={insta.id} className="col-4">
              <img
                className="insta"
                alt=""
                src={insta.images.standard_resolution.url}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.finalButton}>
        <button className={styles.btnPurple}>
          <a
            href="https://www.instagram.com/network.levelup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* rel="noopener noreferrer" should be added to links containing target="_blank" as a precaution against reverse tabnabbing*/}
            {t("home_btnPurple2")}
          </a>
        </button>
      </div>
      <div>
        <ScrollUpButton
          EasingType="easeInOutQuad"
          ShowAtPosition={200}
          AnimationDuration={700}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  instagram: state.instagram,
  booleanState: state.booleanState
});

const mapDispatchToProps = {
  setInstagram: actions.setInstagram,
  changingState: actions.changingState
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
