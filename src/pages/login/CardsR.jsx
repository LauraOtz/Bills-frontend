import React, { Component } from "react";
<<<<<<< HEAD
import { Card, Col, Row } from "antd";
import "../login/cards-style.css";

class CardsR1 extends Component {
  render() {
    return (
      <div
        className="ContainerC
       site-card-wrapper"
      >
        <Row gutter={20}>
          <Col className="CC" span={7}>
            <Card title="Armá tu presupuesto" bordered={false}>
              <p className="Par">
                Crearás un archivo con todos los detalles de tus productos en
                sólo unos minutos.{" "}
              </p>
=======

import { Card, Col, Row } from 'antd';

import "../login/cards-style.css";



class CardsR1 extends Component {
  render() {
    return(
      <div className="ContainerC
       site-card-wrapper">
   
        <Row gutter={20} >
           
          <Col className="CC" span={7}>
      
            <Card   title=  "Armá tu presupuesto"    bordered={false}><p className="Par">
            Crearás un archivo con todos los detalles de tus productos en sólo
                  unos minutos. </p> 
>>>>>>> 1a02adb193c221a06a431f1cd9ab850605efd19d
            </Card>
          </Col>
          <Col className="CC" span={7}>
            <Card title="Mandalo al instante" bordered={false}>
              <p className="Par">
<<<<<<< HEAD
                Archivo listo para enviar vía email desde el mismo sitio! todo
                automaticamente!
=======

       Archivo listo para enviar vía email desde el mismo sitio! todo
                  automaticamente! 
>>>>>>> 1a02adb193c221a06a431f1cd9ab850605efd19d
              </p>
            </Card>
          </Col>
          <Col className="CC" span={7}>
            <Card title="Seguí disfrutando tu día" bordered={false}>
<<<<<<< HEAD
              <p className="Par">
                Presupuestar nunca fue tan rápido y tan fácil. Donde estés
                directo a tus clientes!
=======
              <p  className="Par">
            Presupuestar nunca fue tan rápido y tan fácil. Donde estés directo
                  a tus clientes!  
>>>>>>> 1a02adb193c221a06a431f1cd9ab850605efd19d
              </p>
            </Card>
          </Col>
        </Row>
<<<<<<< HEAD
=======
     
>>>>>>> 1a02adb193c221a06a431f1cd9ab850605efd19d
      </div>
    );
  }
}
export default CardsR1;
