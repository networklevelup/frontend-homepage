import React from "react";
import contactPicture from "../../../img/Contact/pic4Comp.png";
import { useTranslation } from "react-i18next";
import FB from "../../../img/social media/facebook.png";
import XG from "../../../img/social media/xing-social-logotype.png";
import LK from "../../../img/social media/linkedin.png";
import IG from "../../../img/social media/instagram.png";
import YT from "../../../img/social media/youtube.png";
import "./Contact.css";

const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container contact">
      <div className="container row">
        <div className="col-6 data">
          <h1>{t("contact_dataH1")}</h1>
          <div className="first">
            <h5>{t("contact_firstH5")}</h5>
            <h5 className="grey">+49 1739644018</h5>
          </div>
          <div className="first">
            <h5>{t("contact_firstH52")}</h5>
            <h5 className="grey">info@network-levelup.com</h5>
          </div>
          <div className="second">
            <h5>{t("contact_secondH5")}</h5>
            <h5 className="grey">Graf-Zeppelin-Straße 32 31157 Sarstedt</h5>
          </div>
          <div className="third">
            <h5>{t("contact_thirdH5")}</h5>
          </div>
          <div className="socialMedia">
            <ul className="d-inline-block">
              <a
                className="FB"
                target="_blank"
                href="https://www.facebook.com/network.levelup/"
                rel="noopener noreferrer"
              > {/*rel="noopener noreferrer" should be added to links containing target="_blank" as a precaution against reverse tabnabbing.*/}
                <li className="SocialList">
                  <img src={FB} alt=""/>
                </li>
              </a>
              <a
                className="IG"
                target="_blank"
                href="https://www.instagram.com/network.levelup/"
                rel="noopener noreferrer"
              >
                <li className="SocialList">
                  <img src={IG} alt=""/>
                </li>
              </a>
              <a
                className="LK"
                target="_blank"
                href="https://www.linkedin.com/company/network-levelup"
                rel="noopener noreferrer"
              >
                <li className="SocialList">
                  <img src={LK} alt=""/>
                </li>
              </a>
              <a
                className="XG"
                target="_blank"
                href="https://www.xing.com/profile/Sandra_Thomas32"
                rel="noopener noreferrer"
              >
                <li className="SocialList">
                  <img src={XG} alt=""/>
                </li>
              </a>
              <a
                className="YT"
                target="_blank"
                href="https://www.youtube.com/channel/UCdz_BfUo5LlKvh13s0wenhg"
                rel="noopener noreferrer"
              >
                <li className="SocialList">
                  <img src={YT} alt=""/>
                </li>
              </a>
            </ul>
          </div>
        </div>
        <div className="col-6 contactPicture">
          <img className="picture" alt="" src={contactPicture} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
