import React from "react";
import styled from "styled-components";

import { MainTemplate } from "../../styles/templates";
import { PasswordForgetForm } from "../PasswordForget";
import PasswordChangeForm from "../PasswordChange";
import { AuthUserContext, withAuthorization } from "../Session";

const Main = styled.main`
  ${MainTemplate}
`;

const AccountPage = () => (
  <Main>
    <AuthUserContext.Consumer>
      {(authUser) => (
        <div>
          <h1>Account: {authUser.email}</h1> <PasswordForgetForm />
          <PasswordChangeForm />
        </div>
      )}
    </AuthUserContext.Consumer>
  </Main>
);

const condition = (authUser) => !!authUser;

export default withAuthorization(condition)(AccountPage);
