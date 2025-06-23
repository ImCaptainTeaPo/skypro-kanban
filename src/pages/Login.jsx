import { LoginWrapper, LoginTitle, LoginButton } from './Login.styled';

function Login({ onLogin }) {
  return (
    <LoginWrapper>
      <LoginTitle>Login Page</LoginTitle>
      <LoginButton onClick={onLogin}>Login</LoginButton>
    </LoginWrapper>
  );
}

export default Login;
