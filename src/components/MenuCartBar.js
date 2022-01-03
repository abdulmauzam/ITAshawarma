import React from 'react'
import "./menu.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import shawarma from "../images/shawarma.jpeg"
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import cartButton from "../images/cart.png"
import { Card } from "@material-ui/core";
export const MenuCartBar = () => {
    return (
        <>
        <Card
        style={{ height: "50px", width: "100%", backgroundColor: "#0c043b" }}
      >
        <div class="col d-flex justify-content-center" className="tabHeading">
        <div className="d-flex flex-row">
          <img
            src={shawarma}
            alt="logo"
            style={{
              height: "60px",
              width: "55px",
              marginLeft: "7rem",
              marginTop: "2px",
            }}
          />
          <p className="imageHeading">Ita shawarma and fresh juices</p>
          <Button style={{marginLeft:"37rem"}} >
            <h4 className="home"> HOME </h4>
          </Button>
          
            <button
            className="cartButton"
            ><div className="d-flex flex-row ">
            <AiOutlineShoppingCart size={"30px"}/>
            <p style={{marginLeft:"10px"}}>1</p>
            </div></button>
            
        </div>
        </div>
      </Card>  
        </>
    )
}
