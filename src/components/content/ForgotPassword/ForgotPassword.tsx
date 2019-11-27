import React from "react";
import { RouteChildrenProps, RouteComponentProps } from "react-router";

const ForgotPassword: React.FC<RouteComponentProps> = props => {
  const [emailValue, emailSetValue] = React.useState("")
  const [errorEmail, setErrorEmail] = React.useState("");
  const [errorMailRegistered, setErrorMailRegistered] = React.useState("");

    
const setEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    emailSetValue(event.target.value);
    setErrorEmail("");
};

const recoverEmail = () => {
     fetch("http://localhost:8080/api/forgotPassword", {   
         method: "POST",         
            headers: {
                "Content-Type": "application/json",
                mode: "cors"
              },
              body: JSON.stringify ({
                  email: emailValue
              })
        }).then(response => {   
            if (response.ok) {
                props.history.push("/resetPassword"); // to redirect
                console.log("exito")
              
            } else {
              response.text().then(text => {
                setErrorMailRegistered(text);
                });
            }
         })
  };

  return (
    <div className="container">
      <input
        type="email"
        name="email"
        className="recoverEmail"
        onChange={setEmail}
        placeholder="Enter your emails"
        required
        maxLength={40}
      />
      <span className="spanError">{errorEmail}</span>
      <span className="spanError">{errorMailRegistered}</span>

      <button onClick={recoverEmail}>Recover</button>
    </div>
  );
};

export default ForgotPassword;
