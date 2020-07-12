import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.png';
import { Container, Content, Background } from './styles';

interface SignInProps {
  action: string;
}

const SignIn: React.FC<SignInProps> = ({ action }: SignInProps) => {
  const history = useHistory();

  function handleSignIn() {
    history.push('/dashboard')
  }

  const formSignIn = () => (
    <>
      <h1>Faça seu logon</h1>

      <input type="text" placeholder="E-mail" />
      <input type="password" placeholder="Senha" />

      <button onClick={() => handleSignIn()}>Entrar</button>
    </>
  );

  const formNew = () => (
    <>
      <h1>Novo cadastro</h1>

      <input type="text" placeholder="Nome completo" />
      <input type="text" placeholder="E-mail" />
      <input type="password" placeholder="Senha" />
      <input type="password" placeholder="Repita a senha" />

      <button>Criar</button>
    </>
  );

  const formResetPassword = () => (
    <>
      <h1>Redefinir senha</h1>

      <input type="text" placeholder="Insira seu e-mail" />

      <button>Redefinir</button>
    </>
  );

  const checkForm = () => {
    if (action === 'new-account') {
      return formNew();
    } else if (action === 'forgot-password') {
      return formResetPassword();
    } else {
      return formSignIn();
    }
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        <form>
          {checkForm()}

          {action === 'signin' ? <Link to="/forgot-password">Esqueci minha senha</Link> : ''}
        </form>

        {action === 'signin' ?
          <Link to="/new-account">
            <FiLogIn />
            Criar conta
          </Link>
          :
          <Link to="/signin">
            <FiArrowLeft />
            Voltar para o login
          </Link>
        }
      </Content>
      <Background />
    </Container>
  );
}

export default SignIn;