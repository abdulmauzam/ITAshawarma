import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./menu.css";
import { Burgers } from "./MenuCard";

export const MenuList = (props) => {
  return (
    <>
      <div className="ListHeading" >Burgers</div>
      <div className="grid " key="burgers">{props.Burgers}</div>

      <div className="ListHeading" >Sandwiches</div>
      <div className="grid " key="sandwiches">{props.Sandwiches}</div>
      <div className="ListHeading" >Pizzas</div>
      <div className="grid " key="pizzas">{props.Pizzas}</div>
      <div className="ListHeading" >Salads</div>
      <div className="grid " key="salads">{props.Salads}</div>
      <div className="ListHeading" >Shawarma</div>
      <div className="grid "  key="shawarma">{props.Shawarma}</div>
      <div className="ListHeading" >Fries</div>
      <div className="grid " key="fries">{props.Fries}</div>
      <div className="ListHeading"  >Pasta</div>
      <div className="grid " key="pasta" >{props.Pasta}</div>
      <div className="ListHeading" >Deserts</div>
      <div className="grid " key="deserts">{props.Menu}</div>
      <div className="ListHeading" >Milkshakes</div>
      <div className="grid " key="milkshakes">{props.Menu}</div>
      <div className="ListHeading" >Beverages</div>
      <div className="grid " key="beverages">{props.Menu}</div>
    </>
  );
};
