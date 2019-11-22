import React, { useEffect } from "react";
import { RouteComponentProps } from "react-router";
import { IUser } from "../../../interfaces/interfaces";
import { IGlobalState } from "../../../reducers/reducers";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './Unsubscribe.css';

interface IPropsGlobal {
    users: IUser[];
}

const Unsubscribe: React.FC<IPropsGlobal & RouteComponentProps<{userId:string}>
> = props => {
    
    useEffect(()=> {
        fetch("http://localhost:8080/api/users/"+
        props.match.params.userId +
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
      <h1>Your cancellation of the subscription was successful.</h1>
      <div className="unsubscribe">
      <h2><strong>It hurts to see you going!</strong></h2>
      <h4>With your cancellation you won't get anymore:</h4>
      <br/>
      <h4>- Job Offers</h4>
      <h4>- Event Invitations</h4>
      <h4>- Support to be recommended</h4>
      <h4 className="marginLeft">  to German Contractors</h4>
    <Link to="/register">
      <button className="recreateAcc">Recreate the Account</button>
    </Link>
    
      </div>
      
    </div>
  );
};


const mapStateToProps = (state: IGlobalState) => ({
    users: state.users
  });

export default connect(mapStateToProps)(Unsubscribe);
