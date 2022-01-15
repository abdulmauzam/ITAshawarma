import React from 'react'
import { Link } from 'react-scroll';
import { Card } from "@material-ui/core";
export const MenuTabBar = () => {
    return (
        <>
        <Card
        style={{ height: "50px", width: "100%", backgroundColor: "#0c043b" }}
      >
        <div class="d-flex col justify-content-center" className="tabHeading">
          <ul class="nav justify-content-center">
            <Link activeClass="burgers" class="nav-item">
              <a
                class="nav-link "
                aria-current="page"
                style={{ color: "white" }}
                href="burgers"
              >
                Burgers
              </a>
            </Link>
            <Link to="sandwiches" class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="sandwiches">
                Sandwiches
              </a>
            </Link>
            <Link to="pizzas" class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="pizzas">
                Pizzas
              </a>
            </Link>
            <Link to="salads" class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="salads">
                Salads
              </a>
            </Link>
            <Link to="shawarma" class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="shawarma">
                Shawarma
              </a>
            </Link>
            <Link to="fries" class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="fries">
                Fries
              </a>
            </Link>
            <Link to="pasta" class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="pasta">
                Pasta
              </a>
            </Link>
            <Link to="deserts" class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="deserts">
                Deserts
              </a>
            </Link>
            <Link to="milkshakes" class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="milkshakes">
                Milkshakes
              </a>
            </Link>
            <Link to="beverages" class="nav-item">
              <a class="nav-link" style={{ color: "white" }} href="bevarages" >
                Beverages
              </a>
            </Link>
          </ul>
        </div>
      </Card>  
        </>
    )
}
