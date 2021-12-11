import React from "react";
import "./slideshow.css";
import slide1 from "../../images/slide1.jpg";
import slide2 from "../../images/slide2.jpg";
import slide3 from "../../images/slide3.jpg";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const slideImages = [
  {
    src: slide1,
    caption: "Slide 1",
  },
  {
    src: slide2,
    caption: "Slide 2",
  },
  {
    src: slide3,
    caption: "Slide 3",
  },
];

export const Slideshow = () => {
    return (
        <>
    
      <div className="slide-container">
        <Slide>
          {slideImages.map((slideImage, index) => (
            <div className="each-slide" key={index}>
              <img src={slideImage.src} className="image" alt="slideshow"></img>
            </div>
          ))}
        </Slide>
      </div>
    </>
    )
}
