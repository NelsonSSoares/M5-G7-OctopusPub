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
    await axios.post('https://octopus-pub.herokuapp.com/bebidas', bebida);
    carregarBebidas();
    setModal(false);
  }

  async function editarBebida() {
    await axios.put(`https://octopus-pub.herokuapp.com/bebidas/${bebida.id}`, bebida);
    await carregarBebidas();
    setModal(false);
  }

  async function deletarBebida(id) {
    await axios.delete(`https://octopus-pub.herokuapp.com/bebidas/${id}`);
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
    const response = await axios.get('https://octopus-pub.herokuapp.com/bebidas');
    setBebidas(response.data);
    setLoading(false);
  }

  useEffect(() => {
    carregarBebidas();
  }, []);

  return(
    <>
      <Header />
      <div className={styles.container}>
      <div className="imgLogo">
          <img src={logo} alt="logo" />
      </div>
      <div className={styles.card}>
        <div>
          <img className={(styles.imgBebida)} src={'https://i.pinimg.com/originals/ba/7d/b8/ba7db81145941ffb9e53443964d3c347.png'} />
        </div>
      <input className={styles.button} type="button" value="Cadastrar Bebida" onClick={novaBebida}/>
      <table className={styles.table}>
        <caption>Lista de Bebidas</caption>
        <thead>
          <tr>
            <th>Código</th>
            <th>Tipo</th>
            <th>Nome</th>
            <th>Marca</th>
            <th>Preço</th>
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
                  <a href="#" key={b.id}  className={styles.btnAtualizar} onClick={() => alterarBebida({
                    id: b.id,
                    tipo: b.tipo,
                    nome: b.nome,
                    marca: b.marca,
                    preco: b.preco
                  })}>Atualizar</a>
                   <a href="#" className={styles.btnDeletar} onClick={() => deletarBebida(b.id)}>Deletar</a>
                  </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      </div>
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
            <input type="text" name="tipo" defaultValue={bebida.tipo} onChange={(event) => {
                setInput({tipo: event.target.value})
              }}/>
            <label>Nome da bebida:</label>
            <input type="text" name="nome" defaultValue={bebida.nome} onChange={(event) => {
                setInput({nome: event.target.value})
              }}/>
            <label>Marca da bebida:</label>
            <input type="text" name="marca" defaultValue={bebida.marca} onChange={(event) => {
                setInput({marca: event.target.value})
              }}/>
            <label>Preço da Bebida:</label>
            <input type="text" name="preco" defaultValue={bebida.preco} onChange={(event) => {
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