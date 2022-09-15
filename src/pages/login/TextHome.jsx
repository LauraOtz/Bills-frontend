import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoBills1 from "../../assets/logoBills1.png";

import "../home/home.css";
import "./login.css";
function TextHome() {
  return (
    <Container>
      <Row fluid className="TextHomeContainer">
        <img src={logoBills1} alt="" className="img-c d-flex" />
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
