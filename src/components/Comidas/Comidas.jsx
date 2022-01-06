import React, {useState} from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './styles.module.css';


function Comidas() {

  const [cod, setCod] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState(0);
  const [img, setImg] = useState('');


  return (
    <section className={styles.formulario}>
        <Header />
        {/*CAROUSEL/MODAL BANNER*/}
        <h1 className={styles.title}>Comidas</h1>

        <form onSubmit={(event)=>{
          event.preventDefault();
          console.log({cod,nome,descricao,preco,img})
        }}>

          <div className={styles.inputGroup}>
            <label><strong>Cod da Comida:</strong></label>
            <input value={cod} name="cod" className={styles.inputText} type="text" placeholder='001'
            onChange={(event) => {
              setCod(event.target.value)
            }}
            />
          </div>

          <div className={styles.inputGroup}>
            <label><strong>Nome:</strong></label>
            <input value={nome} name="nome" className={styles.inputText} type="text" placeholder='X-Salada'
            onChange={(event) => {
              setNome(event.target.value)
            }}
            />
          </div>

          <div className={styles.inputGroup}>
            <label><strong>Descrição:</strong></label>
            <input value={descricao} name="descricao" className={styles.inputText} type="text" placeholder='Alface, tomate'
            onChange={(event) => {
              setDescricao(event.target.value)
            }}
            />
          </div>
          
          <div className={styles.inputGroup}>
            <label><strong>Preço:</strong></label>
            <input value={preco} name="preco" className={styles.inputText} type="number" placeholder='R$30,00'
            onChange={(event) => {
              setPreco(event.target.value)
            }}
            />
          </div>

          <div className={styles.inputGroup}>
            <label><strong>Imagem:</strong></label>
            <input value={img} name="img" className={styles.inputText} type="text" placeholder='imagem'
            onChange={(event) => {
              setImg(event.target.value)
            }}
            />
          </div>
          <button type='submit' className={styles.btnConsulta}><strong>Consultar</strong></button>
        </form>

        {/* POSSIVEL TABELA COM TODAS AS COMIDAS*/}
        <Footer />
    </section>
  );
}

export default Comidas;