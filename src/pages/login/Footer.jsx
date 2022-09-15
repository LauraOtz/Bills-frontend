import React from "react";
import "font-awesome/css/font-awesome.css";
import "../login/Footer.css";
import { Col, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const FooterApp = () => {
  return (
    <>
      <div className="footer__container">
      <Row className="FooterRow ">
      <Col className="FooterColMail col-md-12">
        <a className="text-dark" href="">2022 © billscompany22@gmail.com</a>
      </Col>
      
      <Col className="FooterColIcon col-md-12">

        <div className="social__media--wrap">
          <div className="button" >
            <div className="icon" >
              <i className="fa fa-instagram"></i>
            </div>
            <NavLink to= "/*"><span>Instagram</span></NavLink>
          </div>

          <div className="button">
            <div className="icon">
              <i className="fa fa-facebook-f"></i>
            </div>
            <NavLink to= "/*"><span>Facebook</span></NavLink>
          </div>

          <div className="button">
            <div className="icon">
              <i className="fa fa-twitter"></i>
            </div>
            <NavLink to= "/*"><span>Twitter</span></NavLink>
          </div>

          <div className="button">
            <div className="icon">
              <i className="fa fa-linkedin"></i>
            </div>
            <NavLink to= "/*"><span>LinkeIn</span></NavLink>
          </div>

          <div className="button">
            <div className="icon">
              <i className="fa fa-youtube"></i>
            </div>
            <NavLink to= "/*"><span>Youtube</span></NavLink>
          </div>
        </div>
      </Col>
      
      </Row>
      </div>
        
      
    </>
  );
};

export default FooterApp;
