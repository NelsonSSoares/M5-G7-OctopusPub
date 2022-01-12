import React from 'react';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './styles.module.css'
import logo from "../../assets/logo.png"
import iconeFuncionario from "../../assets/iconeFuncionario.png" 

function FuncionariosCadastro() {

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
            <input type="text" name="nome" placeholder='Nome' className={styles.input} />
            <input type="text" name="cargo" placeholder='Cargo' className={styles.input} />
            <input type="number" name="cpf" placeholder='CPF' className={styles.input} />
            <input type="email" name="e-mail" placeholder='e-mail' className={styles.input} />
            <input type="password" name="senha" placeholder='senha' className={styles.input} />
            <div className={styles.botoes}>
            <input className={styles.button1} type="button" value="Salvar"/>
            <input className={styles.button2} type="button" value="Excluir"/>
            </div>
            </form>

              </div>
          </div>
        <Footer />
    </div>
  );
}

export default FuncionariosCadastro;