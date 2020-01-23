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
      <div className="row contactGroup">
        <div className="col-6 data">
          <h1>{t("contact_dataH1")}</h1>
          <br />
                    <div className="first">
            <h5>{t("contact_firstH5")}</h5>
            <h5 className="grey">+49 173 9644018</h5>
          </div>
          <div className="first">
            <h5>{t("contact_firstH52")}</h5>
            <h5 className="grey">info@network-levelup.com</h5>
          </div>
          <br />
          
          <div className="second">
            <h5>{t("contact_secondH5")}</h5>
            <h5 className="grey">Apenrader Straße 37</h5>
            <h5 className="grey">30165 Hannover</h5>
          </div>
        </div>
        <div className="col-6 contactPicture">
          <img className="pictureContact" alt="" src={contactPicture} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
