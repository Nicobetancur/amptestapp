import React from "react";
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
import './App.css';
import {AmplifyAuthenticator} from "@aws-amplify/ui-react";
import {AuthState, onAuthUIStateChange} from "@aws-amplify/ui-components";
import AddItem from "./Components/Add";

Amplify.configure(awsExports);


function App() {

  const[authState, setAuthState] = React.useState();
  const[user, setUser] = React.useState();

  React.useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) =>{
      setAuthState(nextAuthState);
      setUser(authData);
    });
  }, []);


  return authState === AuthState.SignedIn && user ? (
      <div className = "App">
        <AddItem />
      </div>

  ) : (
      <div className = "container">
        <div className = "signIn">
          <AmplifyAuthenticator/>
        </div>
      </div>
  )

}

export default App;
