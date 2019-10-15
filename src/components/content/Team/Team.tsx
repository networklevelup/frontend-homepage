import React from "react";
import hands from "../../../img/Team/hands.png";
import team from "../../../img/Team/Pic-Team.jpg";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import "./Team.css";

const Team: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 target">
          <h1>{t("team_targetH1")}</h1>
          <h5>{t("team_targetH5")}</h5>
          <h5>
            <strong className="bold">{t("team_targetH52Strong")}</strong>
            {t("team_targetH52")}
            <span className="span1">{t("team_targetH52Span1")}</span>
            {t("team_targetH52End")}
          </h5>
        </div>
        <div className="col-6">
          <img className="hands" alt="" src={hands} />
        </div>
      </div>
      <div className="container meetTeam">
        <h1>{t("team_meetTeamH1")}</h1>
        <h5>{t("team_meetTeamH5")}</h5>

        <h5>{t("team_meetTeamH52")}</h5>
      </div>
      <div className="container">
        <img className="groupPictures" alt="" src={team} />
      </div>

      <div className="container hiring">
        <h1>{t("team_hiringH1")}</h1>
        <h5>{t("team_hiringH5")}</h5>
        <h1>
          <Link to="/job/offer">Oferta de trabajo</Link>
        </h1>
        <h5>
          {t("team_hiringH52")}
          <span>{t("team_hiringH52Span")}</span>
          {t("team_hiringH52end")}
        </h5>
      </div>
      <ScrollUpButton
        EasingType="easeInOutQuad"
        ShowAtPosition={200}
        AnimationDuration={700}
      />
    </div>
  );
};

export default Team;
