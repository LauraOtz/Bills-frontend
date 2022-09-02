import React from "react";
import "./NotFound.css";
import wall from "../assets/wall.jpg";
import Image from "react-bootstrap/Image";
//import "animate.css";
//import App from "../src/App.jsx";

export default function NotFound() {
  return (
    <>
      <div className="containerNF">
        <div className="div404">
          {/* <img className="img404" src={Monitor} alt="Image404"></img> */}
          <Image
            className="img404 animate__animated animate__rubberBand"
            src={wall}
            alt="Image404"
          />
        </div>
      </div>
    </>
  );
}
