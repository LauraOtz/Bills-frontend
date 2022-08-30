import { Col, Row } from "antd";

function TextHome() {
  return (
    <>
      <Row>
        <Col
          xs={12}
          md={8}
          className="text-dark  d-flex justify-content-center"
        >
          <h1>Genera tus presupuestos al alcance de un "click".</h1>
        </Col>
      </Row>
      <hr />
    </>
  );
}

export default TextHome;
