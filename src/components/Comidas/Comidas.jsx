import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './styles.module.css';
import classNames from 'classnames';
import logo from "../../assets/logo.png"
import axios from 'axios';


function Comidas() {

/*   const [id, setId] = useState('');
  const [nome, setNome] = useState('');

  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState(0); */


  const [arrComidas, setArrComidas] = useState({id:'', nome:'', descricao:'', preco:''})

  const setComida = (value) =>{
    setArrComidas({...arrComidas, ...value})
  }

  async function salvarComida(){
    await axios.post(`https://octopus-pub.herokuapp.com/comidas`, arrComidas)
    .then((response) => {
      alert(response.data)
      setComida({id:'', nome:'', descricao:'', preco:''})
    });
  }

  async function carregarComida(id){
    const response = await axios.get(`https://octopus-pub.herokuapp.com/comidas/${id}`)
    if (response.data === '') {
      alert('Comida não encontrada')
      setComida({id:'', nome:'', descricao:'', preco:''})
      return
    }

    setComida(response.data)
  }

  async function alterarComida(params){
    setComida({id: params.id, nome: params.nome, descricao: params.descricao, preco: params.preco});
    atualizarComidas(arrComidas)
  }

  async function atualizarComidas(arrComidas){
    await axios.put(`https://octopus-pub.herokuapp.com/comidas/${arrComidas.id}`, arrComidas)
    .then((response => {
      alert('Comida atualizada com sucesso.')
    }));
  }

  async function dropComida(params){
    await axios.delete(`https://octopus-pub.herokuapp.com/comidas/${params.id}`)
    .then((response => {
      alert('Comida excluída com sucesso')
      setComida({id:'', nome:'', descricao:'', preco:''})
    }))
  }

  return (
    <section className={styles.formulario}>
      <Header />
      {/*CAROUSEL/MODAL BANNER*/}

      <div className={classNames(styles.container)}>
        <div>
          <img src={logo} />
        </div>


        <div className={classNames(styles.card)}>

          <div>
            <img className={classNames(styles.imgComida)} src={'https://cdn-icons-png.flaticon.com/512/1408/1408284.png'} />
          </div>
            <form onSubmit={(event) => {
              event.preventDefault();
            }}
            >

              <div className={classNames(styles.inputGroup, styles.divCod)}>
                <input value={arrComidas.id} name="id" className={styles.inputText} type="text" placeholder='código'
                  onChange={(event) => {
                    setComida({id: event.target.value})
                  }}
                />
                <div className={classNames(styles.inputGroup, styles.divBtnConsultar)}>
                  <button type='submit' className={styles.btnConsulta} onClick={() => {carregarComida(arrComidas.id)}}><strong>Consultar</strong></button>
                </div>
              </div>

          <div className={classNames(styles.inputGroup, styles.divNome)}>
            <input value={arrComidas.nome} name="nome" className={styles.inputText} type="text" placeholder='nome'
              onChange={(event) => {
                setComida({nome: event.target.value})
              }}
            />
          </div>

          <div className={classNames(styles.inputGroup, styles.divDescricao)}>

            <input value={arrComidas.descricao} name="descricao" className={styles.inputText} type="text" placeholder='descrição'
              onChange={(event) => {
                setComida({descricao: event.target.value})
              }}
            />
          </div>

          <div className={classNames(styles.inputGroup, styles.divPreco)}>
            <input value={arrComidas.preco} name="preco" className={styles.inputText} type="text" placeholder='0,00'
              onChange={(event) => {
                setComida({preco: event.target.value})
              }}
            />
          </div>

          <div className={styles.buttons}>

            <div className={classNames(styles.inputGroup, styles.divBtnCadastrar)}>
              <button type='submit' className={styles.btnCadastrar} onClick={() => salvarComida()}><strong>Cadastrar</strong></button>
            </div>

            <div className={classNames(styles.inputGroup, styles.divBtnAtualizar)}>
              <button type='submit' className={styles.btnAtualizar} onClick={() => alterarComida({id: arrComidas.id, nome: arrComidas.nome, descricao: arrComidas.descricao, preco: arrComidas.preco})}><strong>Atualizar</strong></button>
            </div>

            <div className={classNames(styles.inputGroup, styles.divBtnDeletar)}>
              <button type='submit' className={styles.btnDeletar} onClick={()=> dropComida({id: arrComidas.id})} ><strong>Deletar</strong></button>
            </div>
          </div>

        </form>
      </div>
    </div>
      {/* POSSIVEL TABELA COM TODAS AS COMIDAS*/ }
  <Footer />
    </section >
  );
}
/*
function validaComNome(nome) {

  if (nome.length < 25 && nome.length > 0) {
    return true;
  }
}
 */
export default Comidas;