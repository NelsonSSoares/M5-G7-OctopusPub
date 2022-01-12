import React from 'react';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Drink from '../../assets/home/drink.jpg'
import FoodHamb from '../../assets/home/food1.jpg'
import FoodChips from '../../assets/home/food2.jpg'
import Logo from '../../assets/logo.png'

import styles from "./styles.module.css";

function Home() {

  return (
    <body>
        <Header />
        <div className={styles.text}>
            <h1 className={styles.titulo}>Drinks & Foods</h1>
            <p className={styles.paragrafo}>Culinária e bebidas selecionadas para<br /> garantir uma experiência única</p>
        </div>
        <div className={styles.logo}>
          <img className={styles.logo} src={Logo} alt=''></img>
        </div> 
        <div className={styles.photos}>
          <img className={styles.img} src={FoodHamb} alt=""></img>
          <img className={styles.img} src={Drink} alt=""></img>
          <img className={styles.img} src={FoodChips} alt=""></img>
        </div>
        <Footer />
    </body>
  );
}

export default Home;