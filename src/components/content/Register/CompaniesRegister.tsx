import React from "react";
import { ICompany } from "../../../interfaces/interfaces";
import { RouteComponentProps } from "react-router";
import { connect } from "react-redux";
import * as actions from "../../../actions/actions";
import { useTranslation } from "react-i18next";
import "./Register.css";

interface IPropsGlobal {
  createCompany: (company: ICompany) => void;
}

const CompaniesRegister: React.FC<
  IPropsGlobal & RouteComponentProps
> = props => {
  const { t } = useTranslation();
  const [first_CompanynameValue, first_CompanynameSetValue] = React.useState(
    ""
  );
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
  const [errorCompanyName, setErrorCompanyName] = React.useState("");

  const setFirstCompanyName = (event: React.ChangeEvent<HTMLInputElement>) => {
    first_CompanynameSetValue(event.target.value);
    setError("");
    setErrorCompanyName("");
  };
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
  const updatePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    passSetValue(event.target.value);
    setError("");
    setErrorPass("");
  };

  const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i //eslint-disable-line
  );

  const finalValidateEmail = validEmailRegex.test(emailValue); //check if mail is valid

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
  const validateCompanyName = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/.test(
    //eslint-disable-line
    first_CompanynameValue
  );
  const newCompany = () => {
    if (
      first_CompanynameValue !== "" &&
      first_nameValue !== "" &&
      last_nameValue !== "" &&
      emailValue !== "" &&
      passValue !== ""
    ) {
      if (
        finalValidateEmail &&
        validatePassword &&
        validateName &&
        valdiateSurname &&
        validateCompanyName
      ) {
        fetch("https://backendlevelup.herokuapp.com/apiCompanies/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            first_CompanyName: first_CompanynameValue,
            first_name: first_nameValue,
            last_name: last_nameValue,
            email: emailValue,
            isAdmin: false,
            pass: passValue,
            validate: false
          })
        }).then(response => {
          if (response.ok) {
            response.json().then(c => {
              props.createCompany(c); // to save in redux
              props.history.push("/register/company/verification"); // Esto para redireccionar
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
        if (!validateCompanyName) {
          setErrorCompanyName("invalid company name");
        }
      }
    } else {
      setError("required field");
    }
  };

  return (
    <div className="container formulary company">
      <input
        type="text"
        className="companyReg"
        onChange={setFirstCompanyName}
        placeholder={t("companyRegister_label0")}
        maxLength={40}
      />
      <span className="spanError">{error}</span>
      <span className="spanError">{errorCompanyName}</span>

      <input
        type="text"
        className="companyReg"
        onChange={setFirstName}
        placeholder={t("companyRegister_label1")}
        maxLength={40}
      />
      <span className="spanError">{errorName}</span>
      <span className="spanError">{error}</span>

      <input
        type="text"
        className="companyReg"
        onChange={setLastName}
        placeholder={t("companyRegister_label2")}
        maxLength={40}
      />
      <span className="spanError">{errorSurname}</span>
      <span className="spanError">{error}</span>

      <input
        type="email"
        className="companyReg"
        onChange={setEmail}
        placeholder={t("companyRegister_label3")}
        maxLength={40}
      />
      <span className="spanError">{error}</span>
      <span className="spanError">{errorEmail}</span>
      <span className="spanError">{errorMailRegistered}</span>

      <input
        type="password"
        className="companyReg"
        onChange={updatePass}
        placeholder={t("companyRegister_label4")}
      />
      <span className="spanError">{error}</span>
      <span className="spanError">{errorPass}</span>
      <span>
        <button className="btn join" onClick={newCompany}>
          {t("companyRegister_btn")}
        </button>
      </span>
    </div>
  );
};

const mapDispatchToProps = {
  createCompany: actions.createCompany
};

export default connect(
  null,
  mapDispatchToProps
)(CompaniesRegister);
