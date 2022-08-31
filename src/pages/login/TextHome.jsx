import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//import "../css/TextHome.css";
//import logoBills1 from "../assets/logoBillsFinal.png";

function TextHome() {
  return (
    <Container fluid className="TextHomeContainer">
      <Row>
        <Col
          lg="12"
          className="d-flex align-items-center justify-content-center"
        >
          <Row className="img-contact">
            <img src={""} alt="" className="img-c d-flex" />
          </Row>
          <Col
            xs={8}
            md={11}
            className="d-flex justify-content-center text-dark"
          >
            <h1>Genera tus presupuestos al alcance de un "click"</h1>
          </Col>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default TextHome;
// import { Col, Row } from "antd";

// function TextHome() {
//   return (
//     <>
//       <Row>
//         <Col
//           xs={12}
//           md={8}
//           className="text-dark  d-flex justify-content-center"
//         >
//           <h1>Genera tus presupuestos al alcance de un "click".</h1>
//         </Col>
//       </Row>
//       <hr />
//     </>
//   );
// }

// export default TextHome;
