import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { IGlobalState } from "./reducers/reducers";
import * as actions from "./actions/actions";
import { connect } from "react-redux";
import LayoutPage from "./components/content/LayoutPage/LayoutPage";
import "./App.css";
import { useTranslation } from "react-i18next";

/* IpropsGlobal collects the token saved with the login in the store and we pass it as props to give the permissions */
interface IPropsGlobal {
  token: string;
}

const App: React.FC<IPropsGlobal> = () => {
  const { t, i18n } = useTranslation();
  const [isCookiesAccepted, setIsCookiesAccepted] = React.useState(false);

  useEffect(()=> {
    i18n.changeLanguage(lng)  
  },[]);  
  let language = i18n.language;
  let lng = language.substr(0,2);
  

  const acceptCookies = () => {
    localStorage.setItem("cookies", "accepted");
    setIsCookiesAccepted(true);
  }; 

  useEffect(() => {
    const accepted = localStorage.getItem("cookies");
    if (accepted) {
      setIsCookiesAccepted(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <LayoutPage />
      {!isCookiesAccepted && (
        <div className="container-fluid cookies">
          <p className="cookieTxt">
            {t("cookies_P1")}
           
            <br />
            {t("cookies_P2")}
           

            {i18n.language === "es" && (
              <a href="/PrivacyPolicyES.pdf" download>
                {t("cookies_link")}
              </a>
            )}

            {i18n.language === "en" && (
              <a href="/PrivacyPolicyEN.pdf" download>
                {t("cookies_link")}
              </a>
            )}

            {i18n.language === "de" && (
              <a href="/PrivacyPolicyGE.pdf" download>
                {t("cookies_link")}
              </a>
              
            )}
             <button className="btn btn-dark btnCookie" onClick={acceptCookies}>
              OK
            </button>
          </p>
        </div>
      )}
    </BrowserRouter>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token
});

const mapDispatchToProps = {
  setUserName: actions.setUserName
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
