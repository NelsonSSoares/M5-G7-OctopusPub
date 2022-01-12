import React from 'react';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import styles from './styles.module.css'
import logo from "../../assets/logo.png"
import iconeFuncionario from "../../assets/iconeFuncionario.png"  


function FuncionariosLogin() {

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
            <input type="email" name="e-mail" placeholder='e-mail' className={styles.input} />
            <input type="password" name="senha" placeholder='senha' className={styles.input} />
            <input className={styles.button} type="button" value="login"/>
            </form>

              </div>
          </div>

                 <Footer />
    </div>
  );
}

export default FuncionariosLogin;