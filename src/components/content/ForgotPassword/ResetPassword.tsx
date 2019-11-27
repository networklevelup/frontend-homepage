import React from "react";
import { IUser } from "../../../interfaces/interfaces";
import { RouteComponentProps } from "react-router";

interface IpropsGlobal {
    users: IUser []
}

const ResetPassword: React.FC<IpropsGlobal & RouteComponentProps<{userId: string}>> = props => {
  const [passwordValue, passwordSetValue] = React.useState("")



  const setPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    passwordSetValue(event.target.value);
   
  };

  const ResetEmail = () => {     
          fetch("http://localhost:8080/api/resetPassword", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                mode: "cors"
              },
              body: JSON.stringify ({
                  password: passwordValue
              })
        }).then(response => {   
            if (response.ok) {
                props.history.push("/register/user/verification"); // to redirect
              
            } else {
              props.history.push("/");
                
            }
        })        
  };

  return (
    <div className="container">
      <input
        type="password"
        name="password"
        className="recoverPassword"
        onChange={setPassword}
        placeholder="Enter your new pass"
        required
        maxLength={40}
      />
     
      <button onClick={ResetEmail}></button>
    </div>
  );
};

export default ResetPassword;
