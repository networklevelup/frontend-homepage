import React, { useEffect } from "react";
import { IGlobalState } from "../../../../reducers/reducers";
import { connect } from "react-redux";
import { Link, RouteComponentProps, Redirect } from "react-router-dom";
import { ICompany } from "../../../../interfaces/interfaces";
import * as actions from "../../../../actions/actions";
import jwt from "jsonwebtoken";
import check from "../../../../img/checked.png";
import "./CompaniesList.css";

interface IPropsGlobal {
  token: string;
  companies: ICompany[];
  setCompanies: (companies: ICompany[]) => void;
}

const CompaniesList: React.FC<IPropsGlobal & RouteComponentProps> = props => {
  useEffect(() => {
    if (props.token) {
      let decode = jwt.decode(props.token);

      if (decode !== null && typeof decode !== "string" && decode.isAdmin) {
        //Typescript description necesary to verify token
        fetch("https://backendlevelup.herokuapp.com/apiCompanies/companies/", {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: "Bearer " + props.token
          }
        }).then(response => {
          response.json().then(result => {
            props.setCompanies(result);
          });
        });
      }
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.token]);

  
  if (!props.token) {
    return <Redirect to="/" />;
  }

  return (
    <>
      {props.token && (
        <div className="container">
          <table className="table table-hover text-black companyTable">
            <tbody>
              <tr>
                <th>Company Name</th>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Validate</th>
              </tr>
              {props.companies.map(comp => (
                <tr key={comp._id}>
                  <td>
                    <Link to={"/companies/" + comp._id}>
                      {comp.first_CompanyName}
                    </Link>
                  </td>
                  <td>{comp.first_name}</td>
                  <td>{comp.last_name}</td>
                  <td>{comp.email}</td>
                  <td>
                    {comp.validate && (
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
  companies: state.companies,
  token: state.token
});

const mapDispatchToProps = {
  setCompanies: actions.setCompanies
};

export default connect(
  matStateToProps,
  mapDispatchToProps
)(CompaniesList);
