import React from 'react';

import { Main, ContainerLogo, ContainerMenus } from './styles';

import logo from '../../assets/logo.png';

const Header: React.FC = () => (
  <Main>
    <section>
      <ContainerLogo>
        <img src={logo} alt="Logo"/>
        <p>gotimes</p>
      </ContainerLogo>

      <ContainerMenus>
        <a href="" className="selected">Timesheet</a>
        <a href="">Projects</a>
        <a href="">Reports</a>
        <a href="">Me</a>
        <a href="">Logout</a>
      </ContainerMenus>
    </section>
  </Main>
);

export default Header;