import React from "react";
import { useTranslation } from "react-i18next";
import "./NoFound.css";

const NoMatch: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="contanier noFound">
      <h1>{t("noFound_H1")}</h1>
      <h6>{t("noFound_H6")}</h6>
    </div>
  );
};

export default NoMatch;
