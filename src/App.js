
import "./index.css";
import { FaRupeeSign } from "react-icons/fa";
import React from "react";
import { Card } from "@material-ui/core";
import { Container } from "react-bootstrap";
import chicken from "./images/chickenBurger.jpeg";
import fries from "./images/fries,burgers.jpg";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  return (
    <>
  
      <img src={fries} style={{ height: "320px", width: "100%" }}></img>
      <Card
        style={{ height: "50px", width: "100%", backgroundColor: "#0c043b" }}
      >
        <div class="col d-flex justify-content-center">
          <div className="d-flex flex-row">
            <Button>
              <h4
                className="heading2"
                style={{ color: "white", fontSize: "20px" }}
              >
                {" "}
                Sandwiches{" "}
              </h4>
            </Button>
            <Button>
              <h4
                className="heading2"
                style={{ color: "white", fontSize: "20px" }}
              >
                {" "}
                Burgers{" "}
              </h4>
            </Button>
            <Button>
              <h4
                className="heading2"
                style={{ color: "white", fontSize: "20px" }}
              >
                {" "}
                Pizzas{" "}
              </h4>
            </Button>
            <Button>
              <h4
                className="heading2"
                style={{ color: "white", fontSize: "20px" }}
              >
                {" "}
                Salads{" "}
              </h4>
            </Button>
            <Button>
              <h4
                className="heading2"
                style={{ color: "white", fontSize: "20px" }}
              >
                {" "}
                Shawarma{" "}
              </h4>
            </Button>
            <Button>
              <h4
                className="heading2"
                style={{ color: "white", fontSize: "20px" }}
              >
                {" "}
                Fries{" "}
              </h4>
            </Button>
            <Button>
              <h4
                className="heading2"
                style={{ color: "white", fontSize: "20px" }}
              >
                {" "}
                Pasta{" "}
              </h4>
            </Button>
            <Button>
              <h4
                className="heading2"
                style={{ color: "white", fontSize: "20px" }}
              >
                {" "}
                Deserts{" "}
              </h4>
            </Button>
          </div>
        </div>
      </Card>
      <ui>
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
                    <h4 className="menuHeading"> CHEESE BURGER</h4>
                    <p style={{ fontSize: "15px" }}>
                      chicken patty,crispy lettuce,kectchup,tomato,mayo,cheddar
                      cheese,garlic aioli
                    </p>
                    <p style={{ fontSize: "15px", marginTop: "-11px" }}>
                      3187kj
                    </p>

                    <div className="d-flex flex-row">
                      <FaRupeeSign
                        size={"17px"}
                        style={{ marginTop: "-11px" }}
                      ></FaRupeeSign>
                      <p
                        style={{
                          fontSize: "20px",
                          textAlign: "center",
                          marginTop: "-18px",
                        }}
                      >
                        120{" "}
                      </p>
                    </div>
                  </Container>
                </div>
                <div class="col d-flex justify-content-center">
                  <img
                    style={{
                      height: "130px",
                      width: "150px",
                      marginRight: "25px",
                      marginTop: "7px",
                    }}
                    src={chicken}
                  ></img>
                </div>
              </div>
            </Card>
          </div>
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
                    <h4 className="menuHeading"> CHEESE BURGER</h4>
                    <p style={{ fontSize: "15px" }}>
                      chicken patty,crispy lettuce,kectchup,tomato,mayo,cheddar
                      cheese,garlic aioli
                    </p>
                    <p style={{ fontSize: "15px", marginTop: "-11px" }}>
                      3187kj
                    </p>

                    <div className="d-flex flex-row">
                      <FaRupeeSign
                        size={"17px"}
                        style={{ marginTop: "-11px" }}
                      ></FaRupeeSign>
                      <p
                        style={{
                          fontSize: "20px",
                          textAlign: "center",
                          marginTop: "-18px",
                        }}
                      >
                        120{" "}
                      </p>
                    </div>
                  </Container>
                </div>
                <div class="col d-flex justify-content-center">
                  <img
                    style={{
                      height: "130px",
                      width: "150px",
                      marginRight: "25px",
                      marginTop: "7px",
                    }}
                    src={chicken}
                  ></img>
                </div>
              </div>
            </Card>
          </div>
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
                    <h4 className="menuHeading"> CHEESE BURGER</h4>
                    <p style={{ fontSize: "15px" }}>
                      chicken patty,crispy lettuce,kectchup,tomato,mayo,cheddar
                      cheese,garlic aioli
                    </p>
                    <p style={{ fontSize: "15px", marginTop: "-11px" }}>
                      3187kj
                    </p>

                    <div className="d-flex flex-row">
                      <FaRupeeSign
                        size={"17px"}
                        style={{ marginTop: "-11px" }}
                      ></FaRupeeSign>
                      <p
                        style={{
                          fontSize: "20px",
                          textAlign: "center",
                          marginTop: "-18px",
                        }}
                      >
                        120{" "}
                      </p>
                    </div>
                  </Container>
                </div>
                <div class="col d-flex justify-content-center">
                  <img
                    style={{
                      height: "130px",
                      width: "150px",
                      marginRight: "25px",
                      marginTop: "7px",
                    }}
                    src={chicken}
                  ></img>
                </div>
              </div>
            </Card>
          </div><div class="col d-flex justify-content-center">
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
                  <h4 className="menuHeading"> CHEESE BURGER</h4>
                  <p style={{ fontSize: "15px" }}>
                    chicken patty,crispy lettuce,kectchup,tomato,mayo,cheddar
                    cheese,garlic aioli
                  </p>
                  <p style={{ fontSize: "15px", marginTop: "-11px" }}>
                    3187kj
                  </p>

                  <div className="d-flex flex-row">
                    <FaRupeeSign
                      size={"17px"}
                      style={{ marginTop: "-11px" }}
                    ></FaRupeeSign>
                    <p
                      style={{
                        fontSize: "20px",
                        textAlign: "center",
                        marginTop: "-18px",
                      }}
                    >
                      120{" "}
                    </p>
                  </div>
                </Container>
              </div>
              <div class="col d-flex justify-content-center">
                <img
                  style={{
                    height: "130px",
                    width: "150px",
                    marginRight: "25px",
                    marginTop: "7px",
                  }}
                  src={chicken}
                ></img>
              </div>
            </div>
          </Card>
        </div>
        </div>
      </ui>
 
    </>
  );
}
