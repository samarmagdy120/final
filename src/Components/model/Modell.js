import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { ImWhatsapp } from "react-icons/im";
import { Link } from "react-router-dom";

const Modell = ({phone}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const url =`https://wa.me/+02`
  console.log(`${url}${phone}`);
  return (
    <>
      <ImWhatsapp
        style={{
          fontSize: "27px",
          marginTop: "11px",
          color: "#219221",
          cursor: "pointer",
          display: "inlineBlock",
          marginTop: "2px",
          marginRight: "9px",
        }}
        onClick={handleShow}
      />
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        {/* <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header> */}
        <Modal.Body
          style={{ textAlign: "center", fontSize: "28px", padding: "26px" }}
        >
          سعر المعاينة 40 جنية
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            رفض
          </Button>
          <Button variant="primary">
            <a href={`${url}${phone}`} target="_blank" style={{ color: "#FFF", textDecoration: "none" }}>اكمال</a>
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Modell;
