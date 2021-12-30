import "./index.css";
import { FaRupeeSign } from "react-icons/fa";
import React from "react";
import { Card } from "@material-ui/core";
import { Container } from "react-bootstrap";
import chicken from "./images/chickenBurger.jpeg";
import fries from "./images/fries,burgers.jpg";
import Button from "@mui/material/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { MenuCard } from "./components/MenuCard";
import { MenuTabBar } from "./components/MenuTabBar";

export default function App() {
  return (
    <>
  
      <img src={fries} style={{ height: "320px", width: "100%" }}></img>

      <MenuTabBar/>
      <MenuCard/>
 
    </>
  );
}