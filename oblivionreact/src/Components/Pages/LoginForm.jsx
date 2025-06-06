import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './login.module.css';

//apenas um teste

function LoginForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login clicado');
  };

  return (
    <div className={Styles.CentralContainer}>
      <div className={Styles.FormContainer}>
        <h1>Login</h1>
        <hr />
        <h4>Bem-vindo de volta!</h4>
        <form onSubmit={handleSubmit}>
          <label htmlFor="login" className={Styles.LabelLog}>Email</label>
          <input type="email" id="login" name="login" placeholder="nome1@email.com*" className={Styles.inputLog} />
          <p></p>
          <label htmlFor="senha" className={Styles.LabelLog}>Senha</label>
          <input type="password" id="senha" name="senha" maxLength="5" placeholder="$enh4*" className={Styles.inputLog}/>
          <div id="botao"></div>
          <Link to ="/site">Entrar</Link>
        </form>
        <h4>Não possui uma conta?</h4>
        <Link to="/register">Cadastrar-se</Link>
      </div>
    </div>
  );
}

export default LoginForm;