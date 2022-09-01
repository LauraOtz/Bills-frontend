import { Button, Form, Input, message, Row } from "antd";
import Col from "antd/es/grid/col";
import FormItem from "antd/lib/form/FormItem";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "./Contact";
import Footer from "../login/Footer";
import NavBar from "../login/NavBar";

import CardsR from "./CardsR";
import TextHome from "./TextHome";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerSubmit = async (value) => {
    //console.log(value);
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      const res = await axios.post("/api/users/login", value);
      dispatch({
        type: "HIDE_LOADING",
      });
      message.success("User Login Successfully!");
      localStorage.setItem("auth", JSON.stringify(res.data));
      navigate("/");
    } catch (error) {
      dispatch({
        type: "HIDE_LOADING",
      });
      message.error("Correo o contraseña invalidos");
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      localStorage.getItem("auth");
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <NavBar />
      <Row>
        <Col>
          <TextHome />
        </Col>
        <br />
        <Col className="formLogin">
          <div className="form">
            <br />

            <div className="form-group">
              <Form layout="vertical" onFinish={handlerSubmit}>
                <h2>Iniciar sesión</h2>
                <FormItem
                  name="email"
                  label="Correo electrónico"
                  rules={[
                    {
                      required: true,

                      message: "Introduzca su correo electrónico",
                    },
                    {
                      max: 60,
                      message:
                        "El correo no debe contener más de 60 caracteres",
                    },
                  ]}
                >
                  <Input />
                </FormItem>
                <FormItem
                  name="password"
                  label="Contraseña"
                  rules={[
                    {
                      required: true,

                      message: "Introduzca una contraseña.",
                    },
                    {
                      max: 20,
                      message:
                        "El contraseña no debe contener más de 20 caracteres",
                    },
                  ]}
                >
                  <Input type="password" />
                </FormItem>
                <div className="form-btn-add">
                  <Button htmlType="submit" className="add-new">
                    Enviar
                  </Button>
                  <Link className="form-other" to="/register">
                    ¡Registrate aquí!
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </Col>
      </Row>
      <CardsR />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
};

export default Login;
