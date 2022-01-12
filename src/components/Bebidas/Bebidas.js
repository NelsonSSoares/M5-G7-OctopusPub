import React, { useEffect, useState } from 'react';
import axios from "axios";
import Modal from '../Modal/Modal'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from './styles.module.css';
import logo from "../../assets/logo.png"


function Bebidas() {

  const [bebidas, setBebidas] = useState([]);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [bebida, setBebida] = useState({ tipo: '', nome: '', marca: '', preco: 0 })

  const setInput = (newValue) => {
    setBebida(obj => ({...obj, ...newValue}))
  }

  async function salvarBebida() {
    await axios.post('http://localhost:3001/bebidas', bebida);
    carregarBebidas();
    setModal(false);
  }

  async function editarBebida() {
    await axios.put(`http://localhost:3001/bebidas/${bebida.id}`, bebida);
    await carregarBebidas();
    setModal(false);
  }

  async function deletarBebida(id) {
    await axios.delete(`http://localhost:3001/bebidas/${id}`);
    carregarBebidas();
    setModal(false);
  }

  async function novaBebida() {
    setBebida({...bebida, bebida:{ tipo: '', nome: '', marca: '', preco: 0 }})
    setModal(true)
  }

  async function alterarBebida(params) {
    setInput({id: params.id, tipo: params.tipo, nome: params.nome, marca: params.marca, preco: params.preco })
    setModal(true)
  }

  async function carregarBebidas() {
    setLoading(true);
    const response = await axios.get('http://localhost:3001/bebidas');
    setBebidas(response.data);
    setLoading(false);
  }
  
  useEffect(() => {
    carregarBebidas();
    novaBebida();
  }, []);

  return(
    <>
      <Header />
      <div className={styles.tabela}>
      <h1>Bebidas</h1>
      <input className={styles.button} type="button" value="Cadastrar Bebida" onClick={novaBebida}/>
      <table>
        <caption>Lista de Bebidas</caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tipo</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Marca</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
        
          {bebidas.map(b =>
            (
              <tr key={b.id}>
                <td>{b.id}</td>
                <td>{b.tipo}</td>
                <td>{b.nome}</td>
                <td>{b.marca}</td>
                <td>{b.preco}</td>
                <td>
                  <a href="#" key={b.id} className={styles.button} onClick={() => alterarBebida({
                    id: b.id,
                    tipo: b.tipo,
                    nome: b.nome,
                    marca: b.marca,
                    preco: b.preco
                  })}>Editar</a>
                   <a href="#" className={styles.button} onClick={() => deletarBebida(b.id)}>Deletar</a>
                  </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      </div>

      <Modal
        modal={modal}
        closeModal={() => setModal(false)}
        save={bebida.id?editarBebida:salvarBebida}
      >
        <div key={'header'}><span>Bebida</span></div>
        <div key={'body'}>
          <form>
            <label>Tipo da bebida:</label>
            <input type="text" name="tipo" value={bebida.tipo} onChange={(event) => {
                setInput({tipo: event.target.value})
              }}/>
            <label>Nome da bebida:</label>
            <input type="text" name="nome" value={bebida.nome} onChange={(event) => {
                setInput({nome: event.target.value})
              }}/>
            <label>Marca da bebida:</label>
            <input type="text" name="marca" value={bebida.marca} onChange={(event) => {
                setInput({marca: event.target.value})
              }}/>
            <label>Preço da Bebida:</label>
            <input type="text" name="preco" value={bebida.preco} onChange={(event) => {
                setInput({preco: event.target.value})
              }}/>
          </form>
        </div>
      </Modal>

      <Footer />
    </>
    );
}

export default Bebidas;