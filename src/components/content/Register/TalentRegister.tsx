import React from "react";
import { IUser } from "../../../interfaces/interfaces";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import * as actions from "../../../actions/actions";
import { useTranslation } from "react-i18next";
import "./Register.css";

interface IPropsGlobal {
  createUser: (user: IUser) => void;
}

const TalentRegister: React.FC<IPropsGlobal & RouteComponentProps> = props => {
  const { t } = useTranslation();
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
  const setEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    emailSetValue(event.target.value);
    setErrorEmail("");
  };

  const setPass = (event: React.ChangeEvent<HTMLInputElement>) => {
    passSetValue(event.target.value);
    setErrorPass("");
    setError("");
  };

  const validEmailRegex = new RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i //eslint-disable-line
  );

  const finalValidateEmail = validEmailRegex.test(emailValue);

  const mediumRegex = new RegExp(
    "^(((?=.*[a-z])(?=.*[A-Z]))((?=.*[a-z])(?=.*[0-9]))((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})" //eslint-disable-line
  );
  const validatePassword = mediumRegex.test(passValue);

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
            "Content-Type": "application/json",
            mode: "cors"
          },
          body: JSON.stringify({
            first_name: first_nameValue,
            last_name: last_nameValue,
            email: emailValue,
            isAdmin: false,
            pass: passValue,
            validate: false
          })
        }).then(response => {
          if (response.ok) {
            response.json().then(u => {
              props.createUser(u);
              props.history.push("/register/user/verification"); // to redirect
            });
          } else {
            response.text().then(text => {
              setErrorMailRegistered(text);
              console.log(text);
            });
          }
        });
      } else {
        if (!finalValidateEmail) {
          setErrorEmail("invalid email");
        }
        if (!validatePassword) {
          setErrorPass(
            "Password must contain 8 characters, 1 uppercase, 1 lowercase and 1 number at least."
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
    <div className="container formulary talent">
            
      <input
        type="text"
        className="talentReg"
        onChange={setFirstName}
        placeholder={t("talentRegister_label1")}
        required
        maxLength={40}
      />
      <span className="spanError">{error}</span>
      <span className="spanError">{errorName}</span>

      <input
        type="text"
        className="talentReg"
        onChange={setLastName}
        placeholder={t("talentRegister_label2")}
        required
        maxLength={40}
      />
      <span className="spanError">{errorSurname}</span>
      <span className="spanError">{error}</span>

      <input
        type="email"
        name="email"
        className="talentReg"
        onChange={setEmail}
        placeholder={t("talentRegister_label3")}
        required
        maxLength={40}
      />
      <span className="spanError">{errorEmail}</span>
      <span className="spanError">{error}</span>
      <span className="spanError">{errorMailRegistered}</span>

      <input
        type="password"
        name="password"
        className="talentReg"
        onChange={setPass}
        placeholder={t("talentRegister_label4")}
        required
      />
      <span className="spanError">{error}</span>
      <span className="spanError">{errorPass}</span>

      <span>
        <button className="btn join" onClick={newUser}>
          {t("talentRegister_btn")}
        </button>
      </span>
      
    </div>
  );
};

const mapDispatchToProps = {
  createUser: actions.createUser
};

export default connect(
  null,
  mapDispatchToProps
)(TalentRegister);
