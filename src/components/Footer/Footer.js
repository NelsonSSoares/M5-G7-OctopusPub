import React from "react";

import styles from "./styles.module.css";
import instagram from "../../assets/instagram.png";
import facebook from "../../assets/facebook.png";
import whatsapp from "../../assets/whatsapp.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className={styles.footer}>
        <div className={styles.contato}>
          <img className={styles.img} src={instagram} alt=""></img>
          <img className={styles.img} src={facebook} alt=""></img>
          <img className={styles.img} src={whatsapp} alt=""></img>
        </div>
      </footer>
    );
  }
}

export default Footer;