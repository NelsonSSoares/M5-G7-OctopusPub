import React, { useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './styles.module.css';
import classNames from 'classnames';
import logo from "../../assets/logo.png"


function Comidas(props) {

  const [cod, setCod] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState(0);

  async function salvarComida(){

  }

  async function carregarComidas(){

  }

  async function atualizarComidas(){

  }

  async function dropComida(){

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
              console.log({ cod, nome, descricao, preco })
            }}
            >

              <div className={classNames(styles.inputGroup, styles.divCod)}>
                <input value={cod} name="cod" className={styles.inputText} type="text" placeholder='código'
                  onChange={(event) => {
                    setCod(event.target.value)
                  }}
                />
                <div className={classNames(styles.inputGroup, styles.divBtnConsultar)}>
                  <button type='submit' className={styles.btnConsulta}><strong>Consultar</strong></button>
                </div>
              </div>

          <div className={classNames(styles.inputGroup, styles.divNome)}>
            <input value={nome} name="nome" className={styles.inputText} type="text" placeholder='nome'
              onChange={(event) => {
                setNome(event.target.value)
              }}
            />
          </div>

          <div className={classNames(styles.inputGroup, styles.divDescricao)}>

            <input value={descricao} name="descricao" className={styles.inputText} type="text" placeholder='descrição'
              onChange={(event) => {
                setDescricao(event.target.value)
              }}
            />
          </div>

          <div className={classNames(styles.inputGroup, styles.divPreco)}>
            <input value={preco} name="preco" className={styles.inputText} type="text" placeholder='0,00'
              onChange={(event) => {
                setPreco(event.target.value)
              }}
            />
          </div>

          <div className={styles.buttons}>

            <div className={classNames(styles.inputGroup, styles.divBtnCadastrar)}>
              <button type='submit' className={styles.btnCadastrar}><strong>Cadastrar</strong></button>
            </div>

            <div className={classNames(styles.inputGroup, styles.divBtnAtualizar)}>
              <button type='submit' className={styles.btnAtualizar}><strong>Atualizar</strong></button>
            </div>

            <div className={classNames(styles.inputGroup, styles.divBtnDeletar)}>
              <button type='submit' className={styles.btnDeletar}><strong>Deletar</strong></button>
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

function validaComNome(nome) {

  if (nome.length < 25 && nome.length > 0) {
    return true;
  }
}

export default Comidas;