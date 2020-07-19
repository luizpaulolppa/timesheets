import React, { useState, FormEvent } from 'react';
import api from '../../services/api';
import { FiLogIn, FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logo from '../../assets/logo.png';
import loader from '../../assets/loader.svg';
import successImg from '../../assets/success.svg';
import { Container, Content, Background } from './styles';

interface SignInProps {
  action: string;
}

const SignIn: React.FC<SignInProps> = ({ action }: SignInProps) => {
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSaveUser(event: FormEvent) {
    event.preventDefault();

    if (loading) return;

    if (!name || !email || !password || !repeatPassword) {
      setError('Preencha todos os campos.');
      return;
    } else if (password !== repeatPassword) {
      setError('As senhas não coincidem.');
      return;
    } else {
      setError('');
    }

    try {
      setLoading(true);
      await api.post('/users', { name, email, password });
      history.push('/success-new-account')
      setLoading(false);
    } catch (ex) {
      setLoading(false);
      setError('Não foi possivel criar o usuário, tente novamente mais tarde.');
    }
  }

  async function handleSignIn(event: FormEvent) {
    event.preventDefault();

    if (!email || !password) {
      setError('Preencha todos os campos.');
      return;
    } else {
      setError('');
    }

    try {
      setLoading(true);
      const response = await api.post('/sessions', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data.user));
      setLoading(false);
      history.push('/dashboard')
    } catch (ex) {
      setLoading(false);
      setError('Usuário ou senha incorredos.');
    }
  }

  const formSignIn = () => (
    <form onSubmit={handleSignIn}>
      <h1>Faça seu logon</h1>

      {error && <p className="alert-error">{error}</p>}

      <input 
        type="text" 
        placeholder="E-mail"
        value={email}
        onChange={(event) => setEmail(event.target.value)} />
      <input 
        type="password" 
        placeholder="Senha"
        value={password}
        onChange={(event) => setPassword(event.target.value)} />

      <button type="submit">Entrar</button>

      <Link to="/forgot-password">Esqueci minha senha</Link>
    </form>
  );

  const formNew = () => (
    <form onSubmit={handleSaveUser}>
      <h1>Novo cadastro</h1>

      {error && <p className="alert-error">{error}</p>}

      <input
        type="text"
        placeholder="Nome completo"
        value={name}
        onChange={(event) => setName(event.target.value)} />
      <input
        type="text"
        placeholder="E-mail"
        autoComplete="none"
        value={email}
        onChange={(event) => setEmail(event.target.value)} />
      <input
        type="password"
        placeholder="Senha"
        autoComplete="none"
        value={password}
        onChange={(event) => setPassword(event.target.value)} />
      <input
        type="password"
        placeholder="Repita a senha"
        value={repeatPassword}
        onChange={(event) => setRepeatPassword(event.target.value)} />

      <button type="submit">
        {loading ? <img src={loader} alt="GoBarber" /> : 'Criar'}
      </button>
    </form>
  );

  const formResetPassword = () => (
    <form>
      <h1>Redefinir senha</h1>

      <input type="text" placeholder="Insira seu e-mail" />

      <button>Redefinir</button>
    </form>
  );

  const formSuccess = () => (
    <form>
      <h1>Obrigado!!!</h1>

      <img src={successImg} alt="Success" />

      <p>Agora só precisamos confirmar seu e-mail. <br />Em poucos minutos
        enviaremos um e-mail com link de confirmação e poderá acessar a plataforma.</p>
    </form>
  );

  const showForm = () => {
    if (action === 'new-account') {
      return formNew();
    } else if (action === 'forgot-password') {
      return formResetPassword();
    } else if (action === 'success-new-account') {
      return formSuccess();
    } else {
      return formSignIn();
    }
  }

  return (
    <Container>
      <Content>
        <img src={logo} alt="GoBarber" />

        {showForm()}

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