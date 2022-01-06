import axios from "axios";
import React, { useEffect, useState } from 'react';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Modal from '../Modal/Modal'

import styles from "./styles.module.css";

function Pedidos() {
  const [loading, setLoading] = useState(true);
  const [pedidos, setPedidos] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    async function carregarComandas() {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:3001/comandas/`
      );

      setPedidos(response.data);
      setLoading(false);
    }

    carregarComandas();
  }, []);

  return (
    <>
      <Header />
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Número</th>
            <th className={styles.th}>Total</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map(p =>
          (
            <>
              <tr key={p.id} className={styles.tr}>
                <td> <a href="#" key={p.id} onClick={() => setModal(true)}>{p.numero}</a></td>
                <td>{p.total_pedido}</td>
              </tr>
            </>
          )
          )
          }
        </tbody>
      </table>

      <Modal modal={modal} closeModal={() => setModal(false)} />
      <Footer />

    </>
  );
}

export default Pedidos;