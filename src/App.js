import "./index.css";
import { Card } from "@material-ui/core";
import { Container } from "react-bootstrap";
import React, { useState } from "react";
import {Modals}   from "./components/Modal"
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuCartBar } from "./components/MenuCartBar.js";
import { MenuPage } from "./components/MenuPage";
import { MenuCard } from "./components/MenuCard";
import { FaRupeeSign } from "react-icons/fa";
export default function App() {
  

  return (
    <>
   
<MenuPage></MenuPage>
  
    </>
  );
}
/*{DUMMY_DATA.map((items)=>{
  return  <button key={items.id} onClick={() => buttonClick(items)}>{items.item}</button>
  })
  }*/