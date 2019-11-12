import React from "react";
import * as actions from "../../../actions/actions";
import { connect } from "react-redux";
import { IUser } from "../../../interfaces/interfaces";
import { RouteComponentProps } from "react-router";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { IGlobalState } from "../../../reducers/reducers";
import { VerticleButton as ScrollUpButton } from "react-scroll-up-button";
import pic1Talent from "../../../img/TalentsPage/Design1.png";
import No5 from "../../../img/TalentsPage/No5.png";
import No4 from "../../../img/TalentsPage/No4.png";
import No3 from "../../../img/TalentsPage/No3.png";
import No2 from "../../../img/TalentsPage/No2.png";
import No1 from "../../../img/TalentsPage/No1.png";
import graph1 from "../../../img/TalentsPage/Graphic4.png";
import graph2 from "../../../img/TalentsPage/Graphic3.png";
import graph3 from "../../../img/TalentsPage/Graphic5.png";
import "./Talents.css";

const pinkBox = "/img/pinkBox-";

interface IPropsGlobal {
  createUser: (user: IUser) => void;
  booleanState: boolean;
  changingState: (boolenaState: boolean) => void;
}

const Talents: React.FC<IPropsGlobal & RouteComponentProps> = props => {
  const { t, i18n } = useTranslation();

  const [first_nameValue, first_nameSetValue] = React.useState("");
  const [last_nameValue, last_nameSetValue] = React.useState("");
  const [emailValue, emailSetValue] = React.useState("");
  const [passValue, passSetValue] = React.useState("");
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorPass, setErrorPass] = React.useState("");
  const [error, setError] = React.useState("");
  const [errorMailRegistered, setErrorMailRegistered] = React.useState("");
  const [errorName, setErrorName] = React.useState("");
  const [errorSurname, setErrorSurname] = React.useState("");

  const setFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    first_nameSetValue(event.target.value);
    setError("");
    setErrorName("");
  };
  const setLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    last_nameSetValue(event.target.value);
    setError("");
    setErrorSurname("");
  };
  const setPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    passSetValue(event.target.value);
    setErrorPass("");
    setError("");
  };
  const setEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    emailSetValue(event.target.value);
    setErrorEmail("");
  };

  const change = () => props.changingState(false);

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i //eslint-disable-line
  );
  const finalValidateEmail = validEmailRegex.test(emailValue);

  const validPasswordRegex = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))((?=.*[a-z])(?=.*[0-9]))((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})" //eslint-disable-line
  );
  const validatePassword = validPasswordRegex.test(passValue);

  const validateName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(
    //eslint-disable-line
    first_nameValue
  );
  const valdiateSurname = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(
    //eslint-disable-line
    last_nameValue
  );

  const newUser = () => {
    if (
      first_nameValue !== "" &&
      last_nameValue !== "" &&
      emailValue !== "" &&
      passValue !== ""
    ) {
      if (
        finalValidateEmail &&
        validatePassword &&
        validateName &&
        valdiateSurname
      ) {
        fetch("https://backendlevelup.herokuapp.com/api/users/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            first_name: first_nameValue,
            last_name: last_nameValue,
            email: emailValue,
            pass: passValue,
            isAdmin: false,
            validate: false
          })
        }).then(response => {
          if (response.ok) {
            response.json().then(u => {
              props.createUser(u);
              props.history.push("/register/user/verification");
            });
          } else {
            response.text().then(text => {
              setErrorMailRegistered(text);
            });
          }
        });
      } else {
        if (!finalValidateEmail) {
          setErrorEmail("invalid email");
        }
        if (!validatePassword) {
          setErrorPass(
            "Password must contain 8 characters, 1 uppercase, 1 lowercase and 1 number"
          );
        }
        if (!validateName) {
          setErrorName("invalid name");
        }
        if (!valdiateSurname) {
          setErrorSurname("invalid surname");
        }
      }
    } else {
      setError("required field");
    }
  };

  return (
    <div className="container">
      <div className="row  talents1">
        <div className="col-6 talentText">
          <h1>{t("talents_talents1H1")}</h1>
          <h6>{t("talents_talents1H5")}</h6>
          <Link to="/register">
            <button onClick={change} className="btnPink">
              {t("talents_btnReserve")}
            </button>
          </Link>
        </div>

        <div className="col-6 Tpicture1">
          <img className="pic1Talents" alt="" src={pic1Talent} />
        </div>
      </div>

      <div className="container talents2">
        <div className="work">
          <h3>{t("talents_talents2H1")}</h3>
          <h5>{t("talents_talents2H5")}</h5>
        </div>
        <div className="steps">
        <div className="row one">
            <div className="div">
              <img className="NoImg" alt="" src={No1} />
            </div>
            <div className="col-6 hired">
              <h3 className="adjustM">{t("talents_talents2H36")}</h3>
              <h5>{t("talents_talents2H66")}</h5>
            </div>
          </div>
          <div className="row moved">
            <div className="div">
              <img className="NoImg" alt="" src={No2} />
            </div>
            <div className="col-6 hired">
              <h3 className="adjustM">{t("talents_talents2H35")}</h3>
              <h5>{t("talents_talenst2H65")}</h5>
            </div>
          </div>
          <div className="row three">
            <div className="div">
              <img className="NoImg" alt="" src={No3} />
            </div>
            <div className="col-6 hired">
              <h3 className="adjustM">{t("talents_talents2H34")}</h3>
              <h5>{t("talents_talenst2H64")}</h5>
            </div>
          </div>
          <div className="row moved">
            <div className="div">
              <img className="NoImg" alt="" src={No4} />
            </div>
            <div className="col-6 hired">
              <h3 className="adjustM">{t("talents_talents2H33")}</h3>
              <h5>{t("talents_talents2H63")}</h5>
            </div>
          </div>
          <div className="row five">
            {/* <img className="contract" alt="" src={contract} /> */}

            <div className="div">
              <img className="NoImg" alt="" src={No5} />
            </div>
            <div className="col-6 hired"> 
              <h3 className="adjustM">{t("talents_talents2H32")}</h3>
              <h5>{t("talents_talents2H62")}</h5>
            </div>
          </div>
          

          

          

          
        </div>
      </div>

      <div className="talents3">
        <h1>{t("talents_talents3H1")}</h1>
        <h5>{t("talents_talents3H5")}</h5>
      </div>

      <div className="talents4">
        <div className="divMarginLeft">
          <img className="down1" alt="" src={graph1} />
          <h3>{t("talenst_talents4H1")}</h3>
          <h6>{t("talents_talents4H5")}</h6>
        </div> 
        <div className="divImgUp">
          <img className="GraphImg up" alt="" src={graph2} />
          <h3>{t("talenst_talents4H12")}</h3>
          <h6>{t("talents_talents4H52")}</h6>
        </div>
        <div className="marginRight">
          <img className="GraphImg down2" alt="" src={graph3} />
          <h3>{t("talenst_talents4H13")}</h3>
          <h6>{t("talents_talents4H53")}</h6>
        </div>
      </div>

      <div className="talents5">
        <img
          className="pinkBox"
          alt=""
          src={pinkBox + i18n.language + ".jpg"}
        />
      </div>

      <div className="talents6">
        <input
          className="talentForm"
          type="text"
          placeholder={t("talents_talents6Input1")}
          onChange={setFirstName}
          maxLength={40}
        />
        <p className="span">{errorName}</p>
        <p className="span">{error}</p>

        <input
          className="talentForm"
          type="text"
          placeholder={t("talents_talents6Input2")}
          onChange={setLastName}
          maxLength={40}
        />
        <p className="span">{errorSurname}</p>
        <p className="span">{error}</p>

        <input
          className="talentForm"
          type="email"
          placeholder={t("talents_talents6Input4")}
          onChange={setEmail}
          maxLength={40}
        />

        <p className="span">{errorEmail}</p>
        <p className="span">{error}</p>
        <p className="span">{errorMailRegistered}</p>

        <input
          className="talentForm"
          type="password"
          placeholder={t("talents_talents6Input3")}
          onChange={setPassword}
        />
        <p className="span">{error}</p>
        <p className="spanRegistered">{errorPass}</p>

        <button className="btnDoIt" onClick={newUser}>
          {t("talents_btnDoIt")}
        </button>
        <p  className="agree">{t("talents_talents6P")}</p>
      </div>
      <div>
        <ScrollUpButton
          EasingType="easeInOutQuad"
          ShowAtPosition={200}
          AnimationDuration={700}
        />
      </div>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  booleanState: state.booleanState
});

const mapDispatchToProps = {
  createUser: actions.createUser,
  changingState: actions.changingState
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Talents);
