import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.png';
import { Container, Content, Background } from './styles';

const SignIn: React.FC = () => {

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber"/>

        <form>
          <h1>Faça seu logon</h1>

          <input type="text" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />

          <button>Entrar</button>

          <a href="/forgot">Esqueci minha senha</a>
        </form>

        <a href="/new">
          <FiLogIn />
          Criar conta
        </a>
      </Content>
      <Background />
    </Container>
  );
}

export default SignIn;