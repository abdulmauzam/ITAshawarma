import React from 'react'
import { Card } from "@material-ui/core";
export const MenuTabBar = () => {
    return (
        <>
        <Card
        style={{ height: "50px", width: "100%", backgroundColor: "#0c043b" }}
      >
        <div class="col d-flex justify-content-center" className="tabHeading">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a
                class="nav-link "
                aria-current="page"
                style={{ color: "white" }}
                href="#"
              >
                Burgers
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="#">
                Sandwiches
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="#">
                Pizzas
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="#">
                Salads
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="#">
                Shawarma
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="#">
                Fries
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="#">
                Pasta
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="#">
                Deserts
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="#">
                Milkshakes
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="#">
                Beverages
              </a>
            </li>
          </ul>
        </div>
      </Card>  
        </>
    )
}
