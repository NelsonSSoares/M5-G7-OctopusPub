import React from 'react';
import axios from "axios";
import Modal from '../Modal/Modal'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styles from './styles.module.css';

export default class Bebidas extends React.Component {
  state = {
    bebidas: []
  }

  componentDidMount() {
    axios.get('http://localhost:3001/bebidas')
      .then(res => {
        const bebidas = res.data;
        this.setState({ bebidas });
        console.log(res);
      })
  }

  render() {
    return(
    <div>
      <Header />
      
      <h1>Bebidas</h1>
      <button>Cadastrar Bebida</button>
      <table>
        <caption>Lista de Bebidas</caption>
        <thead>
          <tr>
            <th>Id</th>
            <th>Tipo</th>
            <th>Nome</th>
            <th>Preço</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          
          { this.state.bebidas.map(bebida =>
            (
              <tr>
                <td>{bebida.id}</td>
                <td>{bebida.tipo}</td>
                <td>{bebida.nome}</td>
                <td>{bebida.preco}</td>
                <td><button>Editar</button> <button>Excluir</button></td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <Footer />
    </div>
    )
}


}
