import React, { useState } from "react";
import { IconContext } from "@react-icons/all-files/lib";
import Button from "@restart/ui/esm/Button";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import { GrClose } from "@react-icons/all-files/gr/GrClose";
import {
  ModalBody,
  ModalTitle,
  ModalFooter,
  ModalDialog,
  Modal,
} from "react-bootstrap";
import { Card } from "@mui/material";
import "./modal.css";
export const Modals = () => {
  const [show, setShow] = useState(false);
  let iconStyles = { fontSize: "30px", color: "white" };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader className="modalHeader">
          <IconContext.Provider value={{ color: "white",size:"30px",style: { horizontalAlign: 'middle' } }}>
          <div>  <GrClose></GrClose></div>
          </IconContext.Provider>
        </ModalHeader>

        <ModalBody>
          <img className="modalImage"></img>
          <p className="modalDescription">
            Chicken,Lettuce,tomato,garlic sauce,aoili,onion,chesse
          </p>
          <p className="modalDescription">120</p>
          <div className="noItemsDiv">
            <div className="d-flex flex-row">
              <button className="decButton">-</button>
              <p className="noItems">1</p>
              <button className="incButton">+</button>
            </div>
          </div>
        </ModalBody>
        <ModalFooter className="modalFooter">
          <div>
            <Button className="addToCartButton" onClick={handleClose}>
              Add To Cart
            </Button>
          </div>
        </ModalFooter>
      </Modal>
    </>
  );
};
