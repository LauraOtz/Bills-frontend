import React from "react";
import { Row, Col } from "react-bootstrap";
import "../home/home.css";


function AboutUs() {
  return (
    <div className="about  text-dark">
    <Row className="aboutrow">
        <Col className="text-dark">

    <div className="divArriba">
    
      <h1>De qué se trata esto?.</h1>
      <h3>Automatizamos tus presupuestos!</h3>
      <br />
      <h4>
      Desde donde te encuentres envialos al instante!
      Crea la cuenta de tu empresa, carga tus productos por unica vez. Podes modificar y agregar los detalles que desees cuando quieras.
      </h4>
      <h4>
      Tenes un pedido? Ingresá, cargalo y listo! Enviar al cliente!
      </h4>
      
    </div>
      </Col>


      <br />
      <br />
      <br />
      <Col className="text-dark">

    <div className="divAbajo">

      <h1>Quiénes somos?</h1>
      <br />
      <br />
      <h4>
        Bills está integrado por un equipo fresco, vibrante y energético con
        talento creativo, conocimiento de la industria y estándares de calidad
        muy altos.
      </h4>
      <h4>
        Queremos ayudarte a hacer tu empresa más rapida, eficaz y rentable.
      </h4>

    </div>
    
    </Col>
    </Row>
    
    </div>
  );
}
export default AboutUs;
