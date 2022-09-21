import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo3 from "../../assets/logo3.png";

import "../home/home.css";
import "./login.css";
function TextHome() {
  return (
    <Container>
      <img src={logo3} alt="" className="img-c d-flex" />
      <Row fluid className="TextHomeContainer">
        <Col xs={8} md={11} className="d-flex justify-content-start text-light">
          <h1 className="h1T text-light">
            Generá tus presupuestos con un "Click"
          </h1>
        </Col>
      </Row>
    </Container>
  );
}

export default TextHome;
