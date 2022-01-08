import React, { useEffect, useState } from 'react';

import styles from "./styles.module.css";

function Modal(props) {
  const [loading, setLoading] = useState(true);
  const [pedidos, setPedidos] = useState([]);
  const [modal, setModal] = useState(false);
  const [header, setHeader] = useState(null);
  const [body, setBody] = useState(null);


  useEffect(() => {
    setModal(props.modal)

    const {children} = props

    setHeader(children.find(child => child.key === 'header'))
    setBody(children.find(child => child.key === 'body'))

  }, [props.modal]);

  return (
    <>
      <div className={modal ? styles.modal : styles.hidden} id="modal-one" aria-hidden="true">
        <div className={styles.modalDialog}>
          <div className={styles.modalHeader}>
          {header ? header.props.children : null}
            <a href="#" className={styles.btnClose} aria-hidden="true" onClick={props.closeModal}>×</a>

          </div>
          <div className={styles.modalBody}>
          {body ? body.props.children : null}
          </div>
          <div className={styles.modalFooter}> <a href="#" className={styles.btn} onClick={props.save}>Salvar</a>

          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;