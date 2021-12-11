import { Card } from "@material-ui/core";
import React from "react";
import { Homescreen } from "./components/Homescreen/Homescreen";
import "./index.css";
import { FaRupeeSign } from "react-icons/fa";
import shawarma from "./images/shawarma.jpeg";
import { Container } from "react-bootstrap";
import chicken from "./images/chickenBurger.jpeg"
export default function App() {
  return (
    <>
      <ui>
        <div class="col d-flex justify-content-center">
          <Card
            style={{
              height: "9rem",
              width: "40rem",
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
                  <p style={{ fontSize: "15px", marginTop: "-11px" }}>3187kj</p>

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
      </ui>
    </>
  );
}
