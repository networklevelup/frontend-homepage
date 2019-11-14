import React from "react";
import { Link } from "react-router-dom";
import FB from "../../../img/social media/facebook.png";
import XG from "../../../img/social media/xing-social-logotype.png";
import LK from "../../../img/social media/linkedin.png";
import IG from "../../../img/social media/instagram.png";
import YT from "../../../img/social media/youtube.png";
import { useTranslation } from "react-i18next";

import "./Footer.css";

const Footer: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="footer">
      <ul className="d-inline-block socialList">
        <a
          className="FB"
          target="_blank"
          href="https://www.facebook.com/network.levelup/"
          rel="noopener noreferrer"
        >
          {/*rel="noopener noreferrer" should be added to links containing 
            target="_blank" as a precaution against reverse tabnabbing*/}
          <li className="footList">
            <img src={FB} alt="" />
          </li>
        </a>
        <a
          className="IG"
          target="_blank"
          href="https://www.instagram.com/network.levelup/"
          rel="noopener noreferrer"
        >
          <li className="footList">
            <img src={IG} alt="" />
          </li>
        </a>
        <a
          className="LK"
          target="_blank"
          href="https://www.linkedin.com/company/network-levelup"
          rel="noopener noreferrer"
        >
          <li className="footList">
            <img src={LK} alt="" />
          </li>
        </a>
        <a
          className="XG"
          target="_blank"
          href="https://www.xing.com/companies/network-levelup"
          rel="noopener noreferrer"
        >
          <li className="footList">
            <img src={XG} alt="" />
          </li>
        </a>
        <a
          className="YT"
          target="_blank"
          href="https://www.youtube.com/channel/UC02i1gSEb4gAyBQ-ki6GcHQ/featured"
          rel="noopener noreferrer"
        >
          <li className="footList">
            <img src={YT} alt="" />
          </li>
        </a>
      </ul>
      <ul className="d-inline-block footList">
        <Link to="/conditions/terms">
          <li className="footList">{t("footer_Terms")}</li>
        </Link>

        {i18n.language === "es" && (
          <a href="/PrivacyPolicyES.pdf" download>
            <li className="footList">{t("footer_Privacy")}</li>
          </a>
        )}

        {i18n.language === "en" && (
          <a href="/PrivacyPolicyEN.pdf" download>
            <li className="footList">{t("footer_Privacy")}</li>
          </a>
        )}

        {i18n.language === "de" && (
          <a href="/PrivacyPolicyDE.pdf" download>
            <li className="footList">{t("footer_Privacy")}</li>
          </a>
        )}

        <Link to="/site/notice">
          <li className="footList">{t("footer_Imprint")}</li>
        </Link>
        <Link to="/team">
          <li className="footList">{t("footer_Team")}</li>
        </Link>
        <Link to="/contact">
          <li className="footList">{t("footer_Contact")}</li>
        </Link>
      </ul>
    </div>
  );
};

export default Footer;
