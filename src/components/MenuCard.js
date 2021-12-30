import React from "react";
import { Card } from "@material-ui/core";
import { Container } from "react-bootstrap";
import { FaRupeeSign } from "react-icons/fa";
import shawarma from "../images/shawarma.jpeg";
import burger from "../images/chickenBurger.jpeg";
const DUMMY_DATA = [
  {
    item: "shawarma",
    recipe: "lettuce,tomato,meat,lettuce,tomato,meat,lettuce,tomato,meat",
    price: "124",
    pic: shawarma,
  },
  { item: "shake", recipe: "meat", price: "14", pic: burger },
];
export const MenuCard = () => {
  const Burgers= DUMMY_DATA.map(data=>{
    return(
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
                  <h4 className="menuHeading"> {data.item}</h4>
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
                  <p style={{ fontSize: "15px" }}>{data.recipe}</p>{" "}
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
                      {data.price}{" "}
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
                src={data.pic}
              ></img>
            </div>
          </div>
        </Card>
      </div>
    </div>
  
    )
  })
  return (
    <>
      <div className="grid justify-content-center">
        
      {Burgers}
      </div>
    </>
  );
};
