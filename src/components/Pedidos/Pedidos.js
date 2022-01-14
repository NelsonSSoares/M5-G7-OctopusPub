import axios from "axios";
import React, { useEffect, useState } from 'react';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Modal from '../Modal/Modal'

import styles from "./styles.module.css";

import logo from "../../assets/logo.png"

function Pedidos() {
  const [loading, setLoading] = useState(true);
  const [pedidos, setPedidos] = useState([]);
  const [modal, setModal] = useState(false);
  const [comidas, setComidas] = useState([])
  const [bebidas, setBebidas] = useState([])
  const [pedido, setPedido] = useState({ numero: '', comidas: [], bebidas: [] })

  async function salvarPedido() {
    console.log(pedido)
    const response = await axios.post('http://localhost:3001/comandas', pedido);

    console.log(response)
    carregarComandas();
    setModal(false)
  }

  async function carregarComandas() {
    setLoading(true);
    const response = await axios.get('http://localhost:3001/comandas/');

    setPedidos(response.data);
    setLoading(false);
  }

  async function carregarComidas() {
    const response = await axios.get('http://localhost:3001/comidas/');
    setComidas(response.data)
  }

  async function carregarBebidas() {
    const response = await axios.get('http://localhost:3001/bebidas/');
    setBebidas(response.data)
  }

  async function novoPedido() {
    setPedido({...pedido, pedido:{ numero: '', comidas: [], bebidas: [] }})
    await carregarComidas()
    await carregarBebidas()

    setModal(true)
  }

  async function abrirPedido() {
    console.log('abriu')
  }

  function adicionarBebida(qtd, bebida) {
    const bebidaPedido = pedido.bebidas.find(c => c.id = bebida.id)

    if (bebidaPedido) {
      bebidaPedido.quantidade = parseInt(qtd)
    } else {
      bebida.quantidade = parseInt(qtd)
      pedido.bebidas.push(bebida)
    }
  }

  function adicionarComida(qtd, comida) {
    const comidaPedido = pedido.comidas.find(c => c.id = comida.id)

    if (comidaPedido) {
      comidaPedido.quantidade = parseInt(qtd)
    } else {
      comida.quantidade = parseInt(qtd)
      pedido.comidas.push(comida)
    }
  }

  useEffect(() => {
    carregarComandas();
  }, []);

  return (
    <>
      <Header />
      <div className={styles.container}>
          <div className={styles.imgLogo}>
            <img src={logo}/>
          </div>
          <div className={styles.card}>
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
                      <td>R$ {p.total_pedido}</td>
                    </tr>
                  </>
                )
                )
                }
              </tbody>
            </table>
            <input className={styles.button} type="button" value="Novo Pedido" onClick={novoPedido}/>
        </div>
      </div>


      <Modal
        modal={modal}
        closeModal={() => setModal(false)}
        save={salvarPedido}
      >
        <div key={'header'}><span>Pedido</span></div>
        <div key={'body'}>
          <label>Número da comanda:</label>
          <input
            type="text"
            onChange={(event) => {
              setPedido({...pedido, numero: event.target.value})
            }}
          />
          <label>Comidas:</label>
          { comidas.map(comida =>
             (
              <div key={comida.id} className={styles.modalNovoPedido}>
                <img src={comida.imagem} alt=""/>
                <p>{comida.nome}</p>
                <p>{comida.descricao}</p>
                <p>{comida.preco}</p>
                <input
                  type="number"
                  defaultValue={0}
                  className={styles.inputQuantidade}
                  onChange={(event) => {
                    adicionarComida(event.target.value, comida)
                  }}
                />
              </div>
            )
          )}

          <label>Bebidas:</label>
          { bebidas.map(bebida =>
            (
              <div key={bebida.id} className={styles.modalNovoPedido}>
                <img src={bebida.imagem} alt=""/>
                <p>{bebida.tipo}</p>
                <p>{bebida.nome}</p>
                <p>{bebida.preco}</p>
                <input
                  type="number"
                  defaultValue={0}
                  className={styles.inputQuantidade}
                  onChange={(event) => {
                    adicionarBebida(event.target.value, bebida)
                  }}
                />
              </div>
            )
          )}
        </div>
      </Modal>
      <Footer />

    </>
  );
}

export default Pedidos;