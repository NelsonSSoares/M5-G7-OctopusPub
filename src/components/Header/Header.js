import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

class Header extends React.Component {
  render() {
    return (
      <header className={styles.navMenu}>
        <nav className={styles.myNav}>
          <Link className={styles.logo} to="/">
            Teste Header
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;