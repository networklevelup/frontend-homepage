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

const Verification: React.FC<
  IPropsGlobal & RouteComponentProps<{ userId: string }>
> = props => {
  
  useEffect(() => {
    fetch(
      "https://backendlevelup.herokuapp.com/api/users/" +
        props.match.params.userId +
        "/validate",
      {
        method: "GET"
      }
    ).then(response => {
      if (response.ok) {
        setTimeout(() => props.history.push("/"), 5000);
      }
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container verification">
      <h1>Dirección verificada. Gracias</h1>
      <h4>En un momento te redireccionaremos a la pagina principal</h4>

      <img className="thankYou" alt="" src={thankYou} />
    </div>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  users: state.users
});

export default connect(mapStateToProps)(Verification);
