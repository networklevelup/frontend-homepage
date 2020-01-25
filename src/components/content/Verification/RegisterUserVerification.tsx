import React, { useEffect } from "react";
import { IUser } from "../../../interfaces/interfaces";
import { IGlobalState } from "../../../reducers/reducers";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import { useTranslation } from "react-i18next";
import imgRegistration from "../../../img/Verification/postcard.png";
import "./Verification.css";


interface IPropsGlobal {
  users: IUser[];
}

const RegisterUserVerification: React.FC<
  IPropsGlobal & RouteComponentProps<{ userId: string }>
> = props => {

  
  

  useEffect(() => { 
    setTimeout(() => props.history.push("/"), 20000); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const { t } = useTranslation();
  return (
    <div className="container verification">
      <div>
      <br />
      <br />
        <h1>{t("VerificationTalent_Thankyou1")}</h1>
        <br />
        <div className="row justify-content-center">
        <div className="col-6.5 registration">
        <img className= "Image1" src={imgRegistration}/>
        </div>
        </div>
        <br />
        <h4>{t("VerificationTalent_Thankyou2")}</h4>
        <h4>{t("VerificationTalent_Thankyou3")}</h4>
        <br />
      <br />
      
     </div>
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  users: state.users
});

export default connect(mapStateToProps)(RegisterUserVerification);
