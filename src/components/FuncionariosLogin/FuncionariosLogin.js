import React, { useState } from 'react';
import axios from "axios";

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './styles.module.css'
import logo from "../../assets/logo.png"
import iconeFuncionario from "../../assets/iconeFuncionario.png"

import { useNavigate } from "react-router-dom";

function FuncionariosLogin(props) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  async function login() {
    const data = {
      email: email,
      senha: senha
    }

    try {
      const response = await axios.post('https://octopus-pub.herokuapp.com/funcionarios/login', data)
      alert(response.data.msg)
      navigate('/pedidos')
    } catch (error) {
      console.log(error)
      alert('Usuário ou senha incorretos')
    }

  }

  return (
    <div>
        <Header />
       <div className={styles.container}>
          <div>
            <img src={logo}/>
          </div>
          <div className={styles.card}>
            <img src={iconeFuncionario} className={styles.icone} />
            <form className={styles.form} >
            <input type="email" name="e-mail" placeholder='e-mail' className={styles.input}
              onChange={(event) => {
                setEmail(event.target.value)
              }}
            />
            <input type="password" name="senha" placeholder='senha' className={styles.input}
              onChange={(event) => {
                setSenha(event.target.value)
              }}
            />
            <input className={styles.button} type="button" value="login" onClick={() => login()}/>
            </form>

              </div>
          </div>

                 <Footer />
    </div>
  );
}

export default FuncionariosLogin;