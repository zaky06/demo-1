import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import style from './modal.module.css'
// import img1 from "./IMG_5323.JPG";


function Example(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
        <img src={props.img} onClick={handleShow} alt="img1" />

      <Modal show={show} size="xl" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className={style.modalTitle}><a target={'_blank'} href="zaky06.github.io/cra-gh/">Перейти на сайт</a></Modal.Title>
        </Modal.Header>
        <Modal.Body className={style.modalBody}><img className={style.imgBody} src={props.img} alt="img1" /></Modal.Body>
      </Modal>
    </>
  );
}

export default Example;