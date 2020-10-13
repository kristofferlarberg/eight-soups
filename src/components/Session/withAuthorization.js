import React, {useState, useEffect} from "react";
import { useHistory, withRouter } from "react-router-dom";
import { compose } from "recompose";

import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const withAuthorization = (condition) => (Component) => {
  const WithAuthorization = (props) => {
    const firebase = props.firebase;
    const history = useHistory();

    useEffect(() => {
      const listener = firebase.auth.onAuthStateChanged((authUser) => {
        if (!condition(authUser)) {
          history.push(ROUTES.SIGN_IN);
        }
      });
    }, [firebase]);

    console.log(props);

    return (
      <AuthUserContext.Consumer>
        {(authUser) =>
          condition(authUser) ? <Component props={props} /> : null
        }
      </AuthUserContext.Consumer>
    );
  };
  return compose(withRouter, withFirebase)(WithAuthorization);
};

export default withAuthorization;
