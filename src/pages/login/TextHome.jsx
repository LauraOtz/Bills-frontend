import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo6 from "../../assets/logo6.png";

import "../home/home.css";
import "./login.css";
function TextHome() {
  return (
    <Container>
      <Row className="imgRow">
        <img src={logo6} alt="" className="img-c d-flex" />
      </Row>
      <Row fluid className="TextHomeContainer">
        <Col xs={8} md={11} className="d-flex justify-content-start text-light">
          <h1 className="h1T text-light">
            Generá tus presupuestos con un "Click"
          </h1>

          <p className="pL" style={{ fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            nobis.
          </p>
          <p className="pL" style={{ fontWeight: "bold" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            nobis.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default TextHome;
