import React from "react";
import shawarma from "../../images/shawarma.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppBar } from "@material-ui/core";
import "./appbar.css";
import Button from "@mui/material/Button";
import { GoLocation } from "react-icons/go";
export default function ApppBar() {
  const location =
    "https://www.google.com/maps/place/Iron+Threads+Arena/@17.4361499,78.4270151,17z/data=!3m1!4b1!4m5!3m4!1s0x3bcb9128070190d1:0xaa8320a97820a8ce!8m2!3d17.4361499!4d78.4292038";
  return (
    <div>
      <AppBar
        style={{
          height: "65px",
          backgroundColor: "#0c043b",
          width: "100%",
          position:"fixed",
        }}
      >
        <div className="d-flex flex-row">
          <img
            src={shawarma}
            alt="logo"
            style={{
              height: "60px",
              width: "55px",
              marginLeft: "10rem",
              marginTop: "2px",
            }}
          />
          <Button onClick={() => window.open(location)}>
            <GoLocation size={"30px"} style={{ color: "white" }}></GoLocation>
          </Button>
          <Button>
            <h4 className="heading2"> HOME </h4>
          </Button>
          <Button>
            {" "}
            <h4 className="heading2">MENU</h4>
          </Button>
          <Button>
            <h4 className="heading2">CONTACT</h4>
          </Button>
          <Button>
            <h4 className="heading2">ABOUT US</h4>
          </Button>
          <div className="wrapper">
            <div className="link_wrapper">
              <button className="a">Order Online</button>
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 268.832 268.832"
                >
                  <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
}
