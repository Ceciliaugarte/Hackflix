import React from "react";
import Modal from "react-bootstrap/Modal";

function ModalInfo({ modalShow, setModalShow }) {
  return (
    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter" className="fs-2 ps-2">
          Attention!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p className="fs-5 px-2">
          This section is designed for illustrative purposes, intended to
          simulate the Company's information.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="close-modal-btn "
          onClick={() => setModalShow(false)}
        >
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalInfo;
