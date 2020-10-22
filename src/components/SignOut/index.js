import React from "react";

import {ButtonRed} from "../misc/Button";

import { withFirebase } from "../Firebase";

const SignOutButton = ({ firebase }) => (
  <ButtonRed text="Sign Out" onClick={firebase.doSignOut} />
);

export default withFirebase(SignOutButton);
