import React, { useState, useEffect } from "react";

import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";

const withAuthentication = (Component) => {
  const WithAuthentication = (props) => {
    const [authUser, setAuthUser] = useState(null);
    const firebase = props.firebase;

    

    useEffect(() => {
      const listener = firebase.auth.onAuthStateChanged((authUser) => {
        authUser ? setAuthUser(authUser) : setAuthUser(null);
      });
    }, [firebase]);

console.log(props);

    return (
      <AuthUserContext.Provider value={authUser}>
        <Component props={props} />
      </AuthUserContext.Provider>
    );
  };
  return withFirebase(WithAuthentication);
};

export default withAuthentication;
