import React, { useEffect, useState } from "react";
import { Card } from "@material-ui/core";
import { Container } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import { IconContext } from "@react-icons/all-files/lib";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { MenuList } from "./MenuList";
import Button from "@restart/ui/esm/Button";
import axios from "axios";
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

  const [modalData, setModalData] = useState({
    recipe: "brinjal",
    price: "120",
  });

  const [dummyData, setDummyData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://ita-shawarma-default-rtdb.asia-southeast1.firebasedatabase.app/MENU.json"
      )
      .then((response) => {
        let data = response.data.BURGERS;
        const Burgers = [];
        for (var i=0;i<data.length;i++) {
          console.log(data[i].name)
          Burgers.push({
            name= data[i].name,
            price= data[i].price,
            description= data[i].Description,
            image= data[i].image,
          });
          setDummyData(Burgers)
          console.log(dummyData.length)
        }
      });
  }, []);

  const buttonClick = (items) => {
    setShow(true);
    setModalData((prevData) => ({
      ...prevData,
      recipe: items.recipe,
      price: items.price,
    }));
  };
  const Menu = dummyData.map((items) => {
    console.log(items)
    return (
      <div onClick={() => buttonClick(items)}>
        <div className="grid">
          <div class="col d-flex justify-content-center">
            <Card
              style={{
                height: "10rem",
                width: "37rem",
                marginBottom: "2px",
                marginTop: "5px",
                backgroundColor: "wheat",
              }}
            >
              <div className="d-flex flex-row">
                <div className="d-flex flex-column">
                  <Container style={{ height: "25px" }}>
                    <Card
                      style={{
                        height: "40px",
                        width: "21rem",
                        backgroundColor: "wheat",
                        boxShadow: "0px 0px",
                        marginTop: "7px",
                      }}
                    >
                      <h4 className="menuHeading"> {items.name}</h4>
                    </Card>
                    <Card
                      style={{
                        height: "40px",
                        width: "21rem",
                        backgroundColor: "wheat",
                        boxShadow: "0px 0px",
                        marginTop: "7px",
                      }}
                    >
                      <p style={{ fontSize: "15px" }}>{items.description}</p>{" "}
                    </Card>
                    <Card
                      style={{
                        height: "20px",
                        width: "21rem",
                        backgroundColor: "wheat",
                        boxShadow: "0px 0px",
                        marginTop: "7px",
                      }}
                    >
                      <p style={{ fontSize: "15px" }}>3187kj</p>
                    </Card>
                    <Card
                      style={{
                        height: "25px",
                        width: "21rem",
                        backgroundColor: "wheat",
                        boxShadow: "0px 0px",
                        marginTop: "7px",
                      }}
                    >
                      <div className="d-flex flex-row">
                        <FaRupeeSign
                          size={"17px"}
                          style={{ marginTop: "7px" }}
                        ></FaRupeeSign>
                        <p
                          style={{
                            fontSize: "20px",
                            textAlign: "center",
                          }}
                        >
                          {items.price}{" "}
                        </p>
                      </div>
                    </Card>
                  </Container>
                </div>
                <div class="col d-flex justify-content-center ">
                  <img
                    alt=""
                    style={{
                      height: "130px",
                      width: "150px",
                      marginLeft: "55px",
                      marginTop: "16px",
                    }}
                    src={items.image}
                  ></img>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <MenuList Menu={Menu}></MenuList>

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
          <p className="modalDescription">{modalData.description}</p>
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
