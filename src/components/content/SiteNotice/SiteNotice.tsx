import React from "react";
import { useTranslation } from "react-i18next";
import { RouteComponentProps } from "react-router";
import SiteNoticeES from "./SiteNoticeES";
import SiteNoticeEN from "./SiteNoticeEN";
import SiteNoticeGE from "./SiteNoticeGE";

const SiteNotice: React.FC<RouteComponentProps> = () => {
  const { i18n } = useTranslation();
  return (
    <div className="container text-sm-left text-center mt-5">
      {i18n.language === "es" && <SiteNoticeES />}
      {i18n.language === "en" && <SiteNoticeEN />}
      {i18n.language === "ge" && <SiteNoticeGE />}
    </div>
  );
};

export default SiteNotice;
