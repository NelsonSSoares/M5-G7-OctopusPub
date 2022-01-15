import axios from "axios";
import React, { useEffect, useState } from 'react';

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Modal from '../Modal/Modal'

import styles from "./styles.module.css";

import logo from "../../assets/logo.png"

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [modal, setModal] = useState(false);
  const [comidas, setComidas] = useState([])
  const [bebidas, setBebidas] = useState([])
  const [pedido, setPedido] = useState({ numero: '', comidas: [], bebidas: [] })

  async function salvarPedido() {
    await axios.post('https://octopus-pub.herokuapp.com/comandas', pedido);

    carregarComandas();
    setModal(false)
  }

  async function carregarComandas() {
    const response = await axios.get('https://octopus-pub.herokuapp.com/comandas/');

    setPedidos(response.data);
  }

  async function carregarComidas() {
    const response = await axios.get('https://octopus-pub.herokuapp.com/comidas/');
    setComidas(response.data)
  }

  async function carregarBebidas() {
    const response = await axios.get('https://octopus-pub.herokuapp.com/bebidas/');
    setBebidas(response.data)
  }

  async function excluirPedido(id) {
    const response = await axios.delete(`https://octopus-pub.herokuapp.com/comandas/${id}`);
    carregarComandas()
  }

  async function novoPedido() {
    const inputs = document.querySelectorAll('input')
    inputs.forEach(input => input.value = '')

    setPedido({ numero: '', comidas: [], bebidas: [] })

    await carregarComidas()
    await carregarBebidas()

    setModal(true)
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
        <div>
          <img src={logo} />
        </div>
        <div className={styles.card}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <th className={styles.th}>Número</th>
                <th className={styles.th}>Total</th>
                <th className={styles.th}>Opção</th>
              </tr>
            </thead>
            <tbody>

              {pedidos.map(p =>
              (
                <>
                  <tr key={p.id} className={styles.tr}>
                    <td>{p.numero}</td>
                    <td>R$ {p.total_pedido}</td>
                    <td> <a href="#" onClick={() => excluirPedido(p.id)}>Excluir</a></td>
                  </tr>
                </>
              )
              )
              }
            </tbody>
          </table>
          <input className={styles.button} type="button" value="Novo Pedido" onClick={novoPedido} />
        </div>
      </div>


      <Modal
        modal={modal}
        closeModal={() => setModal(false)}
        save={salvarPedido}
      >
        <div key={'header'}><span className={styles.title}>Novo Pedido</span></div>
        <div key={'body'}>
          <div className={styles.numero}>
            <label className={styles.labelItems}>Número:</label>
            <input
              type="text"
              onChange={(event) => {
                setPedido({ ...pedido, numero: event.target.value })
              }}
            />
          </div>
          <div className={styles.comidasCardapio}>
            <label className={styles.labelItems}>Comidas:</label>
            {comidas.map(comida =>
            (
              <div key={comida.id} className={styles.modalNovoPedido}>
                <div className={styles.fields}>
                  <p>{comida.nome}</p>
                  <p>{comida.descricao}</p>
                  <p className={styles.preco}>R$ {comida.preco}</p>
                </div>
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
          </div>

          <div className={styles.bebidasCardapio}>
            <label className={styles.labelItems}>Bebidas:</label>
            {bebidas.map(bebida =>
            (
              <div key={bebida.id} className={styles.modalNovoPedido}>
                <div className={styles.fields}>
                  <p>{bebida.nome}</p>
                  <p>{bebida.tipo}</p>
                  <p className={styles.preco}> R${bebida.preco}</p>
                </div>
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
        </div>
      </Modal>
      <Footer />

    </>
  );
}

export default Pedidos;

