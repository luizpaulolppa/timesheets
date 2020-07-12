import React from 'react';
import { Link } from 'react-router-dom';

import { Main, ContainerMenus } from './styles';

import logo from '../../assets/logo.png';

const Header: React.FC = () => (
  <Main>
    <section>
      <Link to="/">
        <img src={logo} alt="Logo"/>
        <p>gotimes</p>
      </Link>

      <ContainerMenus>
        <a href="/" className="selected">Timesheet</a>
        <a href="/">Reports</a>
        <a href="/">Customers</a>
        <a href="/">Projects</a>
        <a href="/">Activities</a>
        <a href="/">Me</a>
        <a href="/">Logout</a>
      </ContainerMenus>
    </section>
  </Main>
);

export default Header;