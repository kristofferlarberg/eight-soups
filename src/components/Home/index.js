import React from "react";
import MenuItem from "./MenuItem";
import { withAuthorization } from "../Session";

const HomePage = () => (
<MenuItem/>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
