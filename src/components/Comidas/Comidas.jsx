import React, {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './styles.module.css';
import classNames from 'classnames';


function Comidas() {

  const [cod, setCod] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState(0);



  return (
    <section className={styles.formulario}>
        <Header />
        {/*CAROUSEL/MODAL BANNER*/}
        <h1 className={styles.title}>Comidas</h1>

        <form onSubmit={(event)=>{
          event.preventDefault();
          console.log({cod,nome,descricao,preco})
        }}
        className={styles.container}
        >

          <div className={classNames(styles.inputGroup, styles.divCod)}>
            <label><strong>Cod da Comida:</strong></label>
            <input value={cod} name="cod" className={styles.inputText} type="text" placeholder='001'
            onChange={(event) => {
              setCod(event.target.value)
            }}
            />
          </div>

          <div className={classNames(styles.inputGroup, styles.divBtnConsultar)}>
            <button type='submit'className={styles.btnConsulta}><strong>Consultar</strong></button>
          </div>

          <div className={classNames(styles.inputGroup, styles.divNome)}>
            <label><strong>Nome:</strong></label>
            <input value={nome} name="nome" className={styles.inputText} type="text" placeholder='X-Salada'
            onChange={(event) => {
              setNome(event.target.value)
            }}
            />
          </div>

          <div className={classNames(styles.inputGroup, styles.divDescricao)}>
            <label><strong>Descrição:</strong></label>
            <input value={descricao} name="descricao" className={styles.inputText} type="text" placeholder='Alface, tomate'
            onChange={(event) => {
              setDescricao(event.target.value)
            }}
            />
          </div>
          
          <div className={classNames(styles.inputGroup, styles.divPreco)}>
            <label><strong>Preço:</strong></label>
            <input value={preco} name="preco" className={styles.inputText} type="number" placeholder='R$30,00'
            onChange={(event) => {
              setPreco(event.target.value)
            }}
            />
          </div>

          <div className={classNames(styles.inputGroup, styles.divBtnCadastrar)}>
            <button type='submit'className={styles.btnCadastrar}><strong>Cadastrar</strong></button>
          </div>
          
          <div className={classNames(styles.inputGroup, styles.divBtnAtualizar)}>
            <button type='submit'className={styles.btnAtualizar}><strong>Atualizar</strong></button>
          </div>

          <div className={classNames(styles.inputGroup, styles.divBtnDeletar)}>
            <button type='submit'className={styles.btnDeletar}><strong>Deletar</strong></button>
          </div>


         
        </form>

        {/* POSSIVEL TABELA COM TODAS AS COMIDAS*/}
        <Footer />
    </section>
  );
}

function validaComNome(nome){
    
  if(nome.length < 25 && nome.length > 0){
      return true;
  }
}

export default Comidas;