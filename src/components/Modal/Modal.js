import React, { useEffect, useState } from 'react';

import styles from "./styles.module.css";

function Modal(props) {
  const [loading, setLoading] = useState(true);
  const [pedidos, setPedidos] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setModal(props.modal)
  }, [props.modal]);

  return (
    <>
      <div className={modal ? styles.modal : styles.hidden} id="modal-one" aria-hidden="true">
        <div className={styles.modalDialog}>
          <div className={styles.modalHeader}>
            <h2>Modal in CSS?</h2>
            <a href="#" className={styles.btnClose} aria-hidden="true" onClick={props.closeModal}>×</a>

          </div>
          <div className={styles.modalBody}>
            <p>One modal example here! :D</p>
          </div>
          <div className={styles.modalFooter}> <a href="#" className={styles.btn}>Nice!</a>

          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;