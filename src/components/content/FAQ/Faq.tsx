import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";
import "./FAQ.css";

const Faq: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="container">
      <div>
        <br />
        <h1>{t("faq_title")}</h1>
        <h5>{t("faq_explanation")}</h5>
        <br />
        <h6>
          <strong>{t("faq_first")}</strong>
        </h6>
        <p>{t("faq_first1")}</p>
        <p>{t("faq_first2")}</p>
        <br />
        <p>{t("faq_first3")}</p>
      </div>
      <br />
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="0"
            className="FAQheadline"
          >
            <h6>
              <strong>{t("faq_headline1")}</strong>
            </h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              <br />
              <p>{t("faq_text1")}</p>
              <p>{t("faq_text1Headline")}</p>
              <p>{t("faq_text11")}</p>
              <br />
              <p>{t("faq_text1Headline2")}</p>
              <p>
                {t("faq_text12")}
                <p>
                  <a href="http://www.seg-social.es/">
                    http://www.seg-social.es/
                  </a>
                </p>
              </p>
              <p>
                {t("faq_text13")}
                <p>
                  <a href="https://www.agenciatributaria.es/">
                    https://www.agenciatributaria.es/
                  </a>
                </p>
              </p>
              <p>{t("faq_text14")}</p>
              <p>{t("faq_text15")}</p>
              <p>{t("faq_text16")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="1"
            className="FAQheadline"
          >
            <h6>
              <strong>{t("faq_headline2")}</strong>
            </h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <p>{t("faq_text2")}</p>
              <p>{t("faq_text22")}</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="2"
            className="FAQheadline"
          >
            <h6>
              <strong>{t("faq_headline3")}</strong>
            </h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              <p>{t("faq_text3")}</p>
              <p>{t("faq_text31")}</p>
              <p>{t("faq_text32")}</p>
              <p>
                <br />
                <strong>{t("faq_text33")}</strong>
                {t("faq_text34")}
              </p>
              <p>{t("faq_text35")}</p>
              <p>{t("faq_text36")}</p>
              <p>
                {t("faq_text37")}
                <p>{t("faq_text38")}</p>
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle
            as={Card.Header}
            eventKey="3"
            className="FAQheadline"
          >
            <h6>
              <strong>{t("faq_headline4")}</strong>
            </h6>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="3">
            <Card.Body>
              <p>{t("faq_text4")}</p>
              <p>
                <strong>{t("faq_text5")}</strong> {t("faq_text6")}
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <br />
      <strong>{t("faq_text7")}</strong>
      <br />
      <br />
      <p>
        <strong>{t("faq_text71")}</strong>
        <p>
        {t("faq_text72")}</p>
        <p>{t("faq_text73")}</p>
      </p>
      <br />
      <p>
        <strong>{t("faq_text74")} </strong> 
        <p>{t("faq_text75")}</p>
      </p>
      <br />
      <p>
        <strong>{t("faq_text76")} </strong>
      </p>
      <p>{t("faq_text77")}</p>
      <p>
        <br />
        <strong>{t("faq_text78")} </strong>
      </p>
      <p>{t("faq_text79")}</p>
    </div>
  );
};

export default Faq;
