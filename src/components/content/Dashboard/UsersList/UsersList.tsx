import React, { useEffect } from "react";
import { IGlobalState } from "../../../../reducers/reducers";
import { connect } from "react-redux";
import { Link, RouteComponentProps, Redirect } from "react-router-dom";
import { IUser } from "../../../../interfaces/interfaces";
import * as actions from "../../../../actions/actions";
import jwt from "jsonwebtoken";
import check from "../../../../img/checked.png";
import "./UserList.css";

interface IPropsGlobal {
  token: string;
  users: IUser[];
  setUsers: (users: IUser[]) => void;
}

const UsersList: React.FC<IPropsGlobal & RouteComponentProps> = props => {
  useEffect(() => {
    if (props.token) {
      let decode = jwt.decode(props.token);

      if (decode !== null && typeof decode !== "string") {
        //Typescript description necesary
        if (decode.isAdmin) {
          fetch("https://backendlevelup.herokuapp.com/api/users", {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: "Bearer " + props.token
            }
          }).then(response => {
            response.json().then(result => {
              props.setUsers(result);
            });
          });
        }
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.token]);

  if (!props.token) {
    return <Redirect to="/" />;
  }
  return (
    <>
      {props.token && (
        <div className="container userTable">
          <table className="table table-hover text-black">
            <tbody>
              <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Validate</th>
              </tr>
              {props.users.map(user => (
                <tr key={user._id}>
                  <td>
                    <Link to={"/users/" + user._id}>{user.first_name}</Link>
                  </td>
                  <td>{user.last_name}</td>
                  <td>{user.email}</td>
                  <td>
                    {user.validate && (
                      <img className="checkGreen" alt="" src={check}></img>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

const matStateToProps = (state: IGlobalState) => ({
  users: state.users,
  token: state.token
});

const mapDispatchToProps = {
  setUsers: actions.setUsers
};

export default connect(
  matStateToProps,
  mapDispatchToProps
)(UsersList);
