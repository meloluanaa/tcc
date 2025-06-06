import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Styles from '/src/Components/Pages/login.module.css';
function RegisterPage() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [cpf, setCPF] = useState('');
  const [senha, setSenha] = useState('');
  const [email, setEmail] = useState('');
  const [numero, setNumero] = useState('');

  const handleGoToLogin = () => {
    navigate('/');
  };

  const limparMascara = (valor) => {
    return valor.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  };

  const handleRegister = (e) => {
    e.preventDefault();

    // Limpar as máscaras antes de usar os valores
    const cpfLimpo = limparMascara(cpf);
    const numeroLimpo = limparMascara(numero);

    console.log('Cadastro realizado com sucesso!');
    console.log('Nome:', nome);
    console.log('CPF:', cpfLimpo);
    console.log('Email:', email);
    console.log('Número:', numeroLimpo);
    alert('Cadastro realizado com sucesso!');
  };

  return (
    <div className={Styles.FormContainer}>
      <h1>Cadastre-se</h1>
      <hr />
      <h4>Bem-vindo!</h4>
      <form onSubmit={handleRegister}>
        <NomeInput value={nome} onChange={(e) => setNome(e.target.value)} />
        <CPFInput value={cpf} onChange={(e) => setCPF(e.target.value)} />
        <EmailInput value={email} onChange={(e) => setEmail(e.target.value)} />
        <SenhaInput value={senha} onChange={(e) => setSenha(e.target.value)} />
        <NumeroInput value={numero} onChange={(e) => setNumero(e.target.value)} />
        <button type="submit" className={Styles.buttonLog}>Registrar-se</button>
      </form>
      <h4>Já possui uma conta?</h4>
      <Link to="/">Login</Link>
    </div>
  );
}

export default RegisterPage;
