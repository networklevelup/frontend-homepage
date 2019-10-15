import React, { useEffect } from "react";
import { IUser } from "../../../../interfaces/interfaces";
import { RouteComponentProps, Redirect } from "react-router";
import { IGlobalState } from "../../../../reducers/reducers";
import { connect } from "react-redux";
import * as actions from "../../../../actions/actions";
import warning from "../../../../img/CompaniesDetails/warning.png";
import "./UserDetails.css";

interface IPropsGlobal {
  token: string;
  users: IUser[];
  deleteUser: (id: string) => void;
}

const UserDetails: React.FC<
  IPropsGlobal & RouteComponentProps<{ userId: string }>
> = props => {

  const [first_nameValue, first_nameSetValue] = React.useState("");
  const [last_nameValue, last_nameSetValue] = React.useState("");
  const [emailValue, emailSetValue] = React.useState("");

  const user = React.useMemo(
    () => props.users.find(u => u._id === props.match.params.userId),// eslint-disable-next-line react-hooks/exhaustive-deps
    [props.match.params.userId]
  );

  useEffect(() => {
    if (user) {
      first_nameSetValue(user.first_name);
      last_nameSetValue(user.last_name);
      emailSetValue(user.email);
    }
  }, [user]);

  if (!user) {
    return <Redirect to="/dashboard" />;
  }

  const deleteUser = () => {
    fetch("https://backendlevelup.herokuapp.com/api/users/" + user._id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        props.deleteUser(user._id);
        props.history.push("/users/list"); //redirect
      }
    });
  };

  return (
    <>
    {props.token && <div className="container d-flex text-center">
      <div className="col-3">
        <img className="warning" alt="" src={warning} />
      </div>
      <div className="col-6 usersDetails">
        <h2>Are you sure to DELETE this user?</h2>
        <span>
          <h3>Name:</h3>
          <h5>{first_nameValue}</h5>
        </span>
        <span>
          <h3>Surname:</h3>
          <h5>{last_nameValue}</h5>
        </span>
        <span>
          <h3>Email:</h3>
          <h5>{emailValue}</h5>
        </span>

        <button className="btn btn-outline-danger" onClick={deleteUser}>
          DELETE
        </button>
      </div>
      <div className="col-3">
        <img className="warning" alt="" src={warning} />
      </div>
    </div>}
    </>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  users: state.users,
  token: state.token
});

const mapDispatchToProps = {
  deleteUser: actions.deleteUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
