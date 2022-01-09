import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.navMenu}>
        <nav className={styles.myNav}>
          <Link className={styles.logo} to="/">
            home
          </Link>
          <Link to="/pedidos">
            pedidos
          </Link>
          <Link to="/comidas">
            comidas
          </Link>
          <Link to="/bebidas">
            bebidas
          </Link>
          {/* <Link to="/cadastro">
            cadastro de Funcionários (provisório)
          </Link> */}
          <Link to="/login">
            login
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
