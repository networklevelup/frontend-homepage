import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { ICompany } from "../../../interfaces/interfaces";
import { IGlobalState } from "../../../reducers/reducers";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './Unsubscribe.css';

interface IPropsGlobal {
    companies: ICompany[];
}

const Unsubscribecompany: React.FC<IPropsGlobal & RouteComponentProps<{companyId:string}>
> = props => {
    
    useEffect(()=> {
        fetch("https://backendlevelup.herokuapp.com/apiCompanies/companies/"+
        props.match.params.companyId +
        "/unsubscribe",
        {
            method: "GET"
        }
    ).then(response => {
        if(response.ok){
            // setTimeout(() => props.history.push("/"), 20000);
        }
    });// eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div className="container unsubscribePage">
      <h1 className="unsubscribeH1">Ihre Abmeldung bei LevelUP war erfolgreich.</h1>
      <div className="unsubscribe">
      <h2><strong  className="unsubscribeH2">It hurts to see you going!</strong></h2>
      <h4>Mit Ihrer Abmeldung werden Sie folgende</h4>
      <h4>Services nicht mehr nutzen können:</h4>
      
      <h4>- Vorselektion von Talenten</h4>
      <h4>- Gezielte Talentsuche und Beratung</h4>
      <h4>- Zugang zu unserem Talentnetzwerk</h4>
     
    <Link to="/register">
      <button className="recreateAcc">Account wiederherstellen</button>
    </Link>
    
      </div>
      
    </div>
  );
};


const mapStateToProps = (state: IGlobalState) => ({
    companies: state.companies
  });

export default connect(mapStateToProps)(Unsubscribecompany);
