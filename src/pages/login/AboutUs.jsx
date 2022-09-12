import React from "react";
import "../home/home.css";
import { Col, Row } from "react-bootstrap";

function AboutUs() {
  return (
    <Row className="about" id="about">
      <Col className="Col">
        <hr className="hr" />
        <br />
        <h1>¿De qué se trata esto?</h1>
        <h3>¡Automatizamos tus presupuestos!</h3>
        <p>¡Desde donde te encuentres envialos al instante!</p>
        Crea la cuenta de tu empresa, carga tus productos por unica vez. Podes
        modificar y agregar los detalles que desees cuando quieras.
        <p>¿Tenes un pedido? Ingresá, cargalo ¡Y listo! Enviar al cliente</p>
        <br />
      </Col>
      <Col className="Col">
        <hr className="hr" />
        <br />
        <h1>¿Quiénes somos?</h1>
        <p>
          Bills está integrado por un equipo fresco, vibrante y energético con
          talento creativo, conocimiento de la industria y estándares de calidad
          muy altos.
        </p>
        <p>
          Queremos ayudarte a hacer tu empresa más rapida, eficaz y rentable.
        </p>
        <br />
      </Col>
    </Row>
  );
}
export default AboutUs;
