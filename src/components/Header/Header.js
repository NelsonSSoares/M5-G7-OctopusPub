import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.navMenu}>
        <nav className={styles.myNav}>
          <Link className={styles.logo} to="/">
            Home
          </Link>
          <Link to="/pedidos">
            Pedidos
          </Link>
          <Link to="/comidas">
            Comidas
          </Link>
          <Link to="/bebidas">
            Bebidas
          </Link>
          <Link to="/cadastro">
            Cadastro de Funcionários (provisório)
          </Link>
          <Link to="/login">
            Login
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
