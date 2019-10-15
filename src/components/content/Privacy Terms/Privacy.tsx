import React from "react";
import PrivacyEs from "./PrivacyPolicyES";
import PrivacyEn from "./PrivacyPolicyEN";
import PrivacyGe from "./PrivacyPolicyGE";
import { useTranslation } from "react-i18next";
import { RouteComponentProps } from "react-router";

const PrivacyTerms: React.FC<RouteComponentProps> = () => {
  const { i18n } = useTranslation();
  return (
    <div className="container text-sm-left text-center">
      {i18n.language === "es" && <PrivacyEs />}
      {i18n.language === "en" && <PrivacyEn />}
      {i18n.language === "ge" && <PrivacyGe />}
    </div>
  );
};

export default PrivacyTerms;
