import React from "react";
import Menu from "./Menu";
import { withAuthorization } from "../Session";

const HomePage = () => (
<Menu/>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(HomePage);
