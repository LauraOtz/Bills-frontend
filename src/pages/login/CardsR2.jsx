import React, { Component } from "react";
// import Cards from "../../components/Cards";
import fondo1 from "../../assets/fondo1.jpg";
import mate1 from "../../assets/mate1.jpg";
import email1 from "../../assets/email1.jpg";
import Card from "antd/lib/card/Card";
import { Row } from "antd";
// import "../login/cards-style.css";
import { Carousel } from 'antd';
import "../login/CardsR2.css";

const CardsR2 = () => (
      <div className="contentStyleR2Div">
        
      <Carousel autoplay effect="fade" className="contentStyleR2C">
      
    <div className="CardDivCarrousel">
      <h1 className="contentStyleR2H11">
      {/* <img className="ImgCardsR2" src={mate1} /> */}
      
      </h1>
      <h1>
      Armá tu presupuesto!
      </h1>
      <h3 className="contentStyleR2H3">
      Crearás un archivo con todos los detalles de tus productos en sólo unos minutos.
      </h3>
    </div>
    <div className="CardDivCarrousel">
      <h1 className="contentStyleR2H12">
      {/* <img className="ImgCardsR2" src={email1} /> */}
      
      </h1>
      <h1>
      Mandalo al instante
      </h1>
      <h3 className="contentStyleR2H3">
      Archivo listo para enviar vía email desde el mismo sitio! todo automaticamente!
      </h3>
    
    </div>
    <div className="CardDivCarrousel">
      <h1 className="contentStyleR2H13">
      {/* <img className="ImgCardsR2" src={fondo1} /> */}
      </h1>
      <h1>
      Seguí disfrutando tu día
      </h1>
    <h3 className="contentStyleR2H3">
    Presupuestar nunca fue tan rápido y tan fácil. Donde estés directo a tus clientes!
    </h3>
    </div>
    
  </Carousel>
      </div>
      

       );
    
  
  export default CardsR2;