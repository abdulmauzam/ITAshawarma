import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./menu.css";
import { Burgers } from "./MenuCard";

export const MenuList = (props) => {
  return (
    <>
      <div className="ListHeading" id="burgers">Burgers</div>
      <div className="grid ">{props.Menu}</div>

      <div className="ListHeading" id="sandwiches">Sandwiches</div>
      <div className="grid ">{props.Sandwiches}</div>
      <div className="ListHeading" id="pizzas">Pizzas</div>
      <div className="grid ">{props.Menu}</div>
      <div className="ListHeading" id="salads">Salads</div>
      <div className="grid ">{props.Menu}</div>
      <div className="ListHeading" id="shawarma">Shawarma</div>
      <div className="grid ">{props.Shawarma}</div>
      <div className="ListHeading" id="fries">Fries</div>
      <div className="grid ">{props.Menu}</div>
      <div className="ListHeading" id="pasta" >Pasta</div>
      <div className="grid ">{props.Menu}</div>
      <div className="ListHeading" id="deserts">Deserts</div>
      <div className="grid ">{props.Menu}</div>
      <div className="ListHeading" id="milkshakes">Milkshakes</div>
      <div className="grid ">{props.Menu}</div>
      <div className="ListHeading" id="beverages">Beverages</div>
      <div className="grid ">{props.Menu}</div>
    </>
  );
};
