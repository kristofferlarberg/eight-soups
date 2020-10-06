import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";
import * as ROUTES from '../../constants/routes';

const Nav = styled.nav`
  background-color: var(--secondary);
  line-height: var(--line-height);
  margin: var(--topbottom) var(--leftright);
`;


const Navigation = () => (
  <Nav>
    <ul>
      <li>
        <Link to={ROUTES.SIGN_IN}>Sign In</Link>
      </li>
      <li>
        <Link to={ROUTES.LANDING}>Landing</Link>
      </li>
      <li>
        <Link to={ROUTES.HOME}>Home</Link>
      </li>
      <li>
        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </li>
      <li>
        <Link to={ROUTES.ADMIN}>Admin</Link>
      </li>
    </ul>
  </Nav>
);

export default Navigation;