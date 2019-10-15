import React, { useEffect } from "react";
import { IUser } from "../../../interfaces/interfaces";
import { IGlobalState } from "../../../reducers/reducers";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router";
import thankYou from "../../../img/Verification/thankYou.png";
import "./Verification.css";

interface IPropsGlobal {
  users: IUser[];
}

const RegisterUserVerification: React.FC<
  IPropsGlobal & RouteComponentProps<{ userId: string }>
> = props => {

  useEffect(() => { 
    setTimeout(() => props.history.push("/"), 5000); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container verification">
      <div>
        <h1>Gracias por unirte a la comunidad LevelUP</h1>
        <h4>Hemos mandado un correo para confirmar el registro</h4>
        <h4>En un momento te redireccionaremos a la pagina principal</h4>
      </div>
      <img className="thankYou" alt="" src={thankYou} />
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  users: state.users
});

export default connect(mapStateToProps)(RegisterUserVerification);
