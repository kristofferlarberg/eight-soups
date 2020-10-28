import React from "react";

import { ButtonRoundWide } from "../misc/Button";

import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <ButtonRoundWide text="Logga ut" onClick={firebase.doSignOut} />
);

export default withFirebase(SignOutButton);
