import React from "react";
import hands from "../../../img/Team/hands.png";
import marcel from "../../../img/Team/Marcel-Team.png";
import sandra from "../../../img/Team/Sandra-Team.png";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import "./Team.css";

const Team: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container team">
      <div className="row">
        <div className="col-6 target">
          <h1>{t("team_targetH1")}</h1>
          <h6>{t("team_targetH5")}</h6>
          <h6>
            <strong className="bold">{t("team_targetH52Strong")}</strong>
            {t("team_targetH52")}{" "}
            <span className="span1">{t("team_targetH52Span1")}</span>
          </h6>
        </div>
        <div className="col-6">
          <img className="hands" alt="" src={hands} />
        </div>
      </div>

      <div className="container meetTeam">
        <h1>{t("team_meetTeamH1")}</h1>
        <h6>{t("team_meetTeamH5")}</h6>
        <br></br>
        <h6>{t("team_meetTeamH52")}</h6>
      </div>
      <br></br>
      <div className="container_Teampictures">
        <div className="row justify-content-center">
          <div className="col-3 Teampictures_Left">
            <img className="Picture-Marcel" alt="" src={marcel} />
          </div>
          <div className="col-3 Teampictures_Right">
            <img className="Picture-Sandra" alt="" src={sandra} />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-3 Teampictures_TextLeft">
            <div className="NameMarcel">
              <strong>
                <h5>Marcel Rödiger</h5>
                <h5>CTO</h5>
              </strong>
            </div>
            <div className="TextMarcel">
              <strong>
                <h6>Backend-Development</h6>
                <h6>Finance & Productmanagement</h6>
              </strong>
            </div>
          </div>
          <div className="col-3 Teampictures_TextRight">
            <div className="NameSandra">
              <h5>Sandra Thomas</h5>
              <h5>CEO</h5>
            </div>
            <div className="TextSandra">
              <strong>
                <h6>Frontend-Development</h6>
                <h6>Marketing & Sales</h6>
              </strong>
            </div>
          </div>
        </div>

        <ScrollUpButton
          EasingType="easeInOutQuad"
          ShowAtPosition={200}
          AnimationDuration={700}
        />
      </div>
    </div>
  );
};

export default Team;
