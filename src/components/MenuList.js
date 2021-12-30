import React from "react";
import { Card } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";
import "./menu.css";
import { Burgers } from "./MenuCard";

export const MenuList = () => {

  
  return(<>
    <div className="ListHeading">Burgers</div>
  <div className="grid ">{Burgers}</div>
    
    <div className="ListHeading">Sandwiches</div>
    <div className="ListHeading">Pizzas</div>
    <div className="ListHeading">Salads</div>
    <div className="ListHeading">Shawarma</div>
    <div className="ListHeading">Fries</div>
    <div className="ListHeading">Pasta</div>
    <div className="ListHeading">Deserts</div>
    <div className="ListHeading">Milkshakes</div>
    <div className="ListHeading">Beverages</div>

    
    </>);

};
