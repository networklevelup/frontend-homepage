import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { IGlobalState } from "../../../reducers/reducers";
import { connect } from "react-redux";
import * as actions from "../../../actions/actions";
import { useTranslation } from "react-i18next";
import logo from "../../../img/Logo_black.png";
import Locked from "../../../img/Locked.png";
import "./Navbar.css";

interface IPropsGlobal {
  token: string;
  reset: () => void;
}

const NavBar: React.FC<IPropsGlobal & RouteComponentProps> = props => {
  const { t, i18n } = useTranslation();

  const logOut = () => {
    sessionStorage.removeItem("token");
    props.reset();
    props.history.push("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/">
          <img
            className="logo"
            src={logo}
            alt="Logo"
            style={{ width: "150px" }}
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="dropdown"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link js-scroll-trigger">
                {t("navBar_home")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/talents" className="nav-link js-scroll-trigger">
                {t("navBar_talents")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/companies" className="nav-link js-scroll-trigger">
                {t("navBar_companies")}
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/blog" className="nav-link js-scroll-trigger">
                {t("navBar_blog")}
              </Link>
            </li>

            {!props.token && (
              <li className="nav-item">
                <Link to="/login" className="nav-link color">
                  {t("navBar_login")}
                </Link>
              </li>
            )}

            {props.token /*if token is valid */ && (
              <li className="dropdown">
                <button
                  className="dropdown-toggle"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <img className="locked" alt="" src={Locked}></img>
                </button>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton"
                >
                  <Link to="/users/list" className="nav-link">
                    Users List
                  </Link>
                  <Link to="/companies/list" className="nav-link">
                    Companies List
                  </Link>
                  <Link to="/blog/admin" className="nav-link">
                    Blog Admin
                  </Link>
                  <Link to="/blog/picture" className="nav-link">
                    Blog Picture
                  </Link>
                  <button onClick={logOut}>LogOut</button>
                </div>
              </li>
            )}

            <button
              className="buttonLanguage es"
              onClick={() => i18n.changeLanguage("es")}
            />
            <button
              className="buttonLanguage en"
              onClick={() => i18n.changeLanguage("en")}
            />
            <button
              className="buttonLanguage de"
              onClick={() => i18n.changeLanguage("ge")}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token  
});
const mapDispatchToProps = {
  reset: actions.reset
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
