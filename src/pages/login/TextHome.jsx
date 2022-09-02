import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoBills1 from "../../assets/logoBills1.png";
import "../home/home.css";

function TextHome() {
  return (
    <Container fluid className="TextHomeContainer">
      <Row>
        <Col xs={8} md={11} className="d-flex justify-content-center text-dark">
          <h1>Generá tus presupuestos con un "Click"</h1>
        </Col>

        <img src={logoBills1} alt="" className="img-c d-flex" />
      </Row>
    </Container>
  );
}

export default TextHome;
