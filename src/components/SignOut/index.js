import React from "react";

import { ButtonGreen } from "../misc/Button";

import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <ButtonGreen text="Logga ut" onClick={firebase.doSignOut} />
);

export default withFirebase(SignOutButton);
