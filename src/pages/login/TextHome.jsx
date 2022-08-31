import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logoBills1 from "../../assets/logoBills1.png";

function TextHome() {
  return (
    <Container fluid className="TextHomeContainer">
      <Row>
        <Col xs={8} md={11} className="d-flex justify-content-center text-dark">
          <h1>Genera tus presupuestos con un "click"</h1>
        </Col>

        <img src={logoBills1} alt="" className="img-c d-flex" />
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
