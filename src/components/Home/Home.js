import React from 'react';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Drink from '../../assets/home/drink.jpg'
import FoodHamb from '../../assets/home/food1.jpg'
import FoodChips from '../../assets/home/food2.jpg'

import styles from "./styles.module.css";

function Home() {

  return (
    <body>
        <Header />
        <h1>Home</h1>
        <div className={styles.photos}>
          <img className={styles.img} src={Drink} alt=""></img>
          <img className={styles.img} src={FoodHamb} alt=""></img>
          <img className={styles.img} src={FoodChips} alt=""></img>
        </div>
        <Footer />
    </body>
  );
}

export default Home;