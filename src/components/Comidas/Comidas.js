import React, {useState} from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import styles from './styles.module.css';


function Comidas() {

  const [cod, setCod] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescriocao] = useState('');
  const [preco, setPreco] = useState('');
  const [img, setImg] = useState('');


  return (
    <section className={styles.formulario}>
        <Header />
        {/*CAROUSEL/MODAL BANNER*/}
        <h1 className={styles.title}>Comidas</h1>
        <form>
          <label for='cod'>Cod da Comida:</label>
          <input name="cod" className={styles.inputText} type="text" placeholder='001'/>
          <label for='nome'>Nome:</label>
          <input name="nome" className={styles.inputText} type="text" placeholder='X-Salada'/>
          <label for='descricao'>Descrição:</label>
          <input name="descricao" className={styles.inputText} type="text" placeholder='Alface, tomate'/>
          <label for='preco'>Preço:</label>
          <input name="preco" className={styles.inputText} type="number" placeholder='R$30,00'/>
          <label for='img'>imagem:</label>
          <input name="img" className={styles.inputText} type="text" placeholder='imagem'/>
        </form>

        {/* POSSIVEL TABELA COM TODAS AS COMIDAS*/}
        <Footer />
    </section>
  );
}

export default Comidas;