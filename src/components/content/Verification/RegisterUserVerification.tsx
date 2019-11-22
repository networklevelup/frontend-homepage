import React, { useEffect } from "react";
import { IUser } from "../../../interfaces/interfaces";
import { IGlobalState } from "../../../reducers/reducers";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
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

  return (
    <div className="container verification">
      <div>
        <h1>Thank you for joining LevelUP!</h1>
        <h4>We sent you an email. Please check your mailbox!.</h4>
        <h4>Within 20 seconds you will be forwarded to our landing-page.</h4>
      </div>
     
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  users: state.users
});

export default connect(mapStateToProps)(RegisterUserVerification);
