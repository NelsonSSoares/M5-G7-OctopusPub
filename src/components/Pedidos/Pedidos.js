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
  const [numero, setNumero] = useState('');
  const [comidas, setComidas] = useState([])
  const [bebidas, setBebidas] = useState([])


  function salvarPedido() {
    console.log('salvou')
    setModal(false)
  }

  async function carregarComandas() {
    setLoading(true);
    const response = await axios.get(
      `http://localhost:3001/comandas/`
    );

    setPedidos(response.data);
    setLoading(false);
  }

  async function carregarComidas() {
    const response = await axios.get(
      `http://localhost:3001/comidas/`
    );

    setComidas(response.data)
  }

  async function carregarBebidas() {
    const response = await axios.get(
      `http://localhost:3001/bebidas/`
    );

    setBebidas(response.data)
  }

  async function novoPedido() {
    await carregarComidas()
    await carregarBebidas()
    setModal(true)
  }

  async function abrirPedido() {
    console.log('abriu')
  }

  useEffect(() => {
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
                <td> <a href="#" key={p.id} onClick={abrirPedido}>{p.numero}</a></td>
                <td>{p.total_pedido}</td>
              </tr>
            </>
          )
          )
          }
        </tbody>
      </table>
      <input type="button" value="Novo Pedido" onClick={novoPedido}/>

      <Modal
        modal={modal}
        closeModal={() => setModal(false)}
        save={salvarPedido}
      >
        <div key={'header'}><span>Pedido</span></div>
        <div key={'body'}>
          <label>Número da comanda:</label>
          <input
            value={numero}
            type="text"
            placeholder='001'
            onChange={(event) => {
              setNumero(event.target.value)
            }}
          />
          <label>Comidas:</label>
          { comidas.map(comida => {
            return (
              <div key={comida.id} className={styles.modalNovoPedido}>
                <img src={comida.imagem} alt=""/>
                <p>{comida.nome}</p>
                <p>{comida.descricao}</p>
                <p>{comida.preco}</p>
                <input type="number" className={styles.inputQuantidade}/>
              </div>
            )}
          )}

          <label>Bebidas:</label>
          { bebidas.map(bebida => {
            return (
              <div key={bebida.id} className={styles.modalNovoPedido}>
                <img src={bebida.imagem} alt=""/>
                <p>{bebida.tipo}</p>
                <p>{bebida.nome}</p>
                <p>{bebida.preco}</p>
                <input type="number" className={styles.inputQuantidade}/>
              </div>
            )}
          )}
        </div>
      </Modal>
      <Footer />

    </>
  );
}

export default Pedidos;