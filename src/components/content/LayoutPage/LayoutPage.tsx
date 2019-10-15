import React, { useEffect, Fragment } from "react";
import Content from "../../content/content";
import { IGlobalState } from "../../../reducers/reducers";
import jwt from "jsonwebtoken";
import * as actions from "../../../actions/actions";
import { connect } from "react-redux";
import { IUser } from "../../../interfaces/interfaces";
import Footer from "../../content/Footer/Footer";
import { Route } from "react-router-dom";
import "../../../App.css"; //have to be here to import fonts to all the website
import Navbar from "../Navbar/Navbar";


interface IPropsGlobal {
  token: string;
  users: IUser[];
  setUsers: (users: IUser[]) => void;
}

const LayoutPage: React.FC<IPropsGlobal> = props => {
  useEffect(() => {
    if (props.token) {
      let decode = jwt.decode(props.token);
      if (decode !== null && typeof decode !== "string") {       
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
    }  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.token]);

  return (
    <Fragment>
      <Route component={Navbar} />
      <Content />
      <Footer />
    </Fragment>
  );
};

const mapStateToProps = (state: IGlobalState) => ({
  token: state.token,
  users: state.users
});

const mapDispatchToProps = {
  setUsers: actions.setUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LayoutPage);
