import React, { useState } from "react";
import { IconContext } from "@react-icons/all-files/lib";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import Button from "@restart/ui/esm/Button";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import {
  ModalBody,
  ModalTitle,
  ModalFooter,
  ModalDialog,
  Modal,
} from "react-bootstrap";
import "./modal.css";
export const Modals = () => {
  const [show, setShow] = useState(false);
  let iconStyles = { fontSize: "30px", color: "white" };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [modalData, setModalData] = useState({
    recipe: "brinjal",
    price: "120",
  });

  const DUMMY_DATA = [
    {
      id: 1,
      item: "shawarma",
      recipe: "lettuce,tomato,meat,lettuce,tomato,meat,lettuce,tomato,meat",
      price: "124",
    },
    { id: 2, item: "shake", recipe: "meat", price: "14" },
  ];
  const buttonClick = (items) => {
    setShow(true);
    setModalData((prevData) => ({
       ...prevData,
       recipe:items.recipe,
       price:items.price,
     }));
  };

  return (
    <>
      {DUMMY_DATA.map((items) => {
        return (
          <Button variant="primary" onClick={() => buttonClick(items)}>
            {items.item}
          </Button>
        );
      })}

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <ModalHeader className="modalHeader">
          <IconContext.Provider
            value={{
              color: "white",
              size: "30px",
              style: { horizontalAlign: "middle" },
            }}
          >
            <div className="iconDiv" onClick={handleClose}>
              {" "}
              <AiOutlineClose style={{ marginLeft: "362px" }}></AiOutlineClose>
            </div>
          </IconContext.Provider>
        </ModalHeader>

        <ModalBody>
          <img className="modalImage"></img>
          <p className="modalDescription">{modalData.recipe}</p>
          <p className="modalDescription">{modalData.price}</p>
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
