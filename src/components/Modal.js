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

  const [burgers, setBurgers] = useState([]);
  const [shawarmas,setShawarmas]=useState([]);
  const [sandwiches,setSandwiches]=useState([]);
  const [pizzas,setPizzas]=useState([]);
  const [salads,setSalads]=useState([]);
  const [fries,setFries]=useState([]);
  const [pasta,setPasta]=useState([]);

  useEffect(() => {
    const fetchmeals = async () => {
      const response = await fetch(
        "https://ita-shawarma-default-rtdb.asia-southeast1.firebasedatabase.app/MENU.json"
      );
      const responseData = await response.json();
      
      
      const Burgers = responseData.BURGERS;
      const loadedBurgers = [];
      for (var key in Burgers) {
        loadedBurgers.push({
          id: key,
          name: Burgers[key].name,
          description: Burgers[key].Description,
          image: Burgers[key].image,
          price: Burgers[key].price,
        });
      }

      const Shawarmas = responseData.Shawarma;
      console.log(Shawarmas)
      const loadedShawarma= [];
      for (var key in Shawarmas) {
        loadedShawarma.push({
          id: key,
          name: Shawarmas[key].name,
          description: Shawarmas[key].Description,
          image: Shawarmas[key].image,
          price: Shawarmas[key].price,
        });
      }

      const Sandwiches = responseData.SANDWIHCES;
      console.log(Sandwiches)
      const loadedSandwiches= [];
      for (var key in Sandwiches) {
        loadedSandwiches.push({
          id: key,
          name: Sandwiches[key].name,
          description: Sandwiches[key].Description,
          image: Sandwiches[key].image,
          price: Sandwiches[key].price,
        });
      }

      const Pizzas = responseData.PIZZAS;
      console.log(Pizzas)
      const loadedPizzas= [];
      for (var key in Pizzas) {
        loadedPizzas.push({
          id: key,
          name: Pizzas[key].name,
          description: Pizzas[key].Description,
          image: Pizzas[key].image,
          price: Pizzas[key].price,
        });
      }

      const Salads = responseData.SALADS;
      console.log(Salads)
      const loadedSalads= [];
      for (var key in Salads) {
        loadedSalads.push({
          id: key,
          name: Salads[key].name,
          description: Salads[key].Description,
          image: Salads[key].image,
          price: Salads[key].price,
        });
      }

      const Fries = responseData.FRIES;
      console.log(Fries)
      const loadedFries= [];
      for (var key in Fries) {
        loadedFries.push({
          id: key,
          name: Fries[key].name,
          description: Fries[key].Description,
          image: Fries[key].image,
          price: Fries[key].price,
        });
      }

      const Pasta = responseData.PASTA;
      console.log(Pasta)
      const loadedPasta= [];
      for (var key in Pasta) {
        loadedPasta.push({
          id: key,
          name: Pasta[key].name,
          description: Pasta[key].Description,
          image: Pasta[key].image,
          price: Pasta[key].price,
        });
      }
      
      setPasta(loadedPasta)
      setFries(loadedFries)
      setSalads(loadedSalads)
      setPizzas(loadedPizzas)
      setSandwiches(loadedSandwiches)
      setShawarmas(loadedShawarma)
      setBurgers(loadedBurgers);
      
    };
    fetchmeals();
  }, []);

  
  const buttonClick = (items) => {
    setShow(true);
    setModalData((prevData) => ({
      ...prevData,
      recipe: items.recipe,
      price: items.price,
    }));
  };
  const Burgers= burgers.map((items) => {
 
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
  const Salads= salads.map((items) => {
 
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
  const Sandwiches = sandwiches.map((items) => {
   
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
  const shawarma= shawarmas.map((items) => {
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
  const pizza= pizzas.map((items) => {
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

  const pastas= pasta.map((items) => {
 
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

  const friess= fries.map((items) => {
 
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
      <MenuList Burgers={Burgers} Shawarma={shawarma} Sandwiches={Sandwiches} 
      Salads={Salads} Pizzas={pizza} Fries={friess} Pasta={pastas}></MenuList>

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
