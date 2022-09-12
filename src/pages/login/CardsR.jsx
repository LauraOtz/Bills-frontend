import React, { Component } from "react";

import { Card, Col, Row } from 'antd';
import "../login/cards-style.css";
import {DollarCircleFilled, MailOutlined , LikeOutlined} from "@ant-design/icons";

class CardsR extends Component {
  render() {
    return(
      <div className="ContainerC
       site-card-wrapper">
        <hr />
        <Row gutter={20} >
          <Col className="CC" span={7}>
      
            <Card   title=  "Armá tu presupuesto"    bordered={false}>
            Crearás un archivo con todos los detalles de tus productos en sólo
                  unos minutos.  {<DollarCircleFilled/>}
            </Card>
          </Col>
          <Col className="CC" span={7}>
            <Card title="Mandalo al instante" bordered={false}>
            Archivo listo para enviar vía email desde el mismo sitio! todo
                  automaticamente!  {<MailOutlined />}
            </Card>
          </Col>
          <Col className="CC" span={7}>
            <Card title="Seguí disfrutando tu día" bordered={false}>
            Presupuestar nunca fue tan rápido y tan fácil. Donde estés directo
                  a tus clientes!  {<LikeOutlined />}
            </Card>
          </Col>
        </Row>
        <hr />
      </div>
    );
    
  }
}
export default CardsR;
