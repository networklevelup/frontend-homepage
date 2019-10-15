import React, { useEffect } from "react";
import { ICompany } from "../../../../interfaces/interfaces";
import { RouteComponentProps, Redirect } from "react-router";
import { IGlobalState } from "../../../../reducers/reducers";
import { connect } from "react-redux";
import * as actions from "../../../../actions/actions";
import warning from "../../../../img/CompaniesDetails/warning.png";
import "./CompaniesDetails.css";

interface IPropsGlobal {
  token: string;
  companies: ICompany[];
  deleteCompany: (id: string) => void;
}

const UserDetails: React.FC<
  IPropsGlobal & RouteComponentProps<{ companyId: string }>
> = props => {
  
  const [companyNameValue, setCompanyName] = React.useState("");
  const [first_nameValue, first_nameSetValue] = React.useState("");
  const [emailValue, emailSetValue] = React.useState("");

  const company = React.useMemo(
    () => props.companies.find(c => c._id === props.match.params.companyId),// eslint-disable-next-line react-hooks/exhaustive-deps
    [props.match.params.companyId]
  );

  useEffect(() => {
    if (company) {
      setCompanyName(company.first_CompanyName);
      first_nameSetValue(company.first_name);
      emailSetValue(company.email);
    }
  }, [company]);

  if (!company) {
    return <Redirect to="/companies/list" />;
  }

  const deleteCompany = () => {
    fetch("https://backendlevelup.herokuapp.com/apiCompanies/company/" + company._id, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json"
      }
    }).then(response => {
      if (response.ok) {
        props.deleteCompany(company._id);
        props.history.push("/companies/list"); //redirect
      }
    });
  };
  

  return (
    <>
    {props.token && <div className="container d-flex text-center">
      <div className="col-3">
        <img className="warning" alt="" src={warning} />
      </div>
      <div className="col-6 companiesDetails">
        <h2>Are you sure to DELETE this company?</h2>
        <span>
          <h3>Company Name: </h3>
          <h5>{companyNameValue}</h5>
        </span>
        <span>
          <h3>Name:</h3>
          <h5>{first_nameValue}</h5>
        </span>
        <span>
          <h3>Email:</h3>
          <h5>{emailValue}</h5>
        </span>

        <button className="btn btn-outline-danger" onClick={deleteCompany}>
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
  companies: state.companies,
  token: state.token
});

const mapDispatchToProps = {
  deleteCompany: actions.deleteCompany
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetails);
