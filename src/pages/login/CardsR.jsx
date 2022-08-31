import React, { Component } from "react";
// import Cards from "../../components/Cards";
import fondo1 from "../../assets/fondo1.jpg";
import mate1 from "../../assets/mate1.jpg";
import email1 from "../../assets/email1.jpg";
import Card from "antd/lib/card/Card";
import { Row } from "antd";

class CardsR extends Component {
  render() {
    return (
      <>
        <Row>
          <Card
            hoverable
            style={{ width: 240, marginBottom: 30 }}
            cover={<img src={fondo1} style={{ height: 200 }} />}
            title="Armá tu presupuesto"
          >
            <p>
              Crearás un archivo con todos los detalles de tus productos en sólo
              unos minutos.
            </p>
          </Card>
          <Card
            title="Mandalo al instante"
            hoverable
            style={{ width: 240, marginBottom: 30 }}
            cover={<img src={email1} style={{ height: 200 }} />}
          >
            <p>
              Archivo listo para enviar vía email desde el mismo sitio! todo
              automaticamente!
            </p>
          </Card>
          <Card
            title="Seguí disfrutando tu día"
            hoverable
            style={{ width: 240, marginBottom: 30 }}
            cover={<img src={mate1} style={{ height: 200 }} />}
          >
            <p>
              Presupuestar nunca fue tan rápido y tan fácil. Desde donde estés
              directo a tus clientes!
            </p>
          </Card>
        </Row>
      </>
    );
  }
}
export default CardsR;
