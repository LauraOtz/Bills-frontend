import React, { Component } from "react";

import { Card, Col, Row } from 'antd';
import "../login/cards-style.css";
import {DollarCircleOutlined} from "@ant-design/icons";

class CardsR extends Component {
  render() {
    return(
      <div className=" Cards site-card-wrapper">
        <Row gutter={16}>
          <Col span={8}>
      
            <Card icon={<DollarCircleOutlined />}  title="Armá tu presupuesto" bordered={false}>
            Crearás un archivo con todos los detalles de tus productos en sólo
                  unos minutos.
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Mandalo al instante" bordered={false}>
            Archivo listo para enviar vía email desde el mismo sitio! todo
                  automaticamente!
            </Card>
          </Col>
          <Col span={8}>
            <Card title="Seguí disfrutando tu día" bordered={false}>
            Presupuestar nunca fue tan rápido y tan fácil. Donde estés directo
                  a tus clientes!
            </Card>
          </Col>
        </Row>
      </div>
    );
    
  }
}
export default CardsR;
