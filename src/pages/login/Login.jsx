import { Button, Form, Input, message, Row } from "antd";
import Col from "antd/es/grid/col";
import FormItem from "antd/lib/form/FormItem";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AboutUs from "./AboutUs";
import Contact from "../../pages/login/Contact";
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
      message.error("Error!");
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
<<<<<<< HEAD
    <div className='form'>
        <h2>Bills</h2>
        <p>Iniciar sesión</p>
        <div className="form-group">
          <Form layout='vertical' onFinish={handlerSubmit}>
            <FormItem name="email" label="correo electrónico">
              <Input/>
            </FormItem>
            <FormItem name="password" label="Contraseña">
              <Input type="password"/>
            </FormItem>
            <div className="form-btn-add">
              <Button htmlType='submit' className='add-new'>Iniciar sesión</Button>
              <Link className='form-other' to="/register">¡Registrate aquí!</Link>
=======
    <>
      <Row>
        <Col>
          <TextHome />
        </Col>
        <Col>
          <div className="form">
            <h2>Bills</h2>
            <p>Login</p>
            <div className="form-group">
              <Form layout="vertical" onFinish={handlerSubmit}>
                <FormItem name="userId" label="User ID">
                  <Input />
                </FormItem>
                <FormItem name="password" label="Password">
                  <Input type="password" />
                </FormItem>
                <div className="form-btn-add">
                  <Button htmlType="submit" className="add-new">
                    Login
                  </Button>
                  <Link className="form-other" to="/register">
                    Register Here!
                  </Link>
                </div>
              </Form>
>>>>>>> 7681bd395c49d0f03bf43f6ec1ecb687102ce71c
            </div>
          </div>
        </Col>
      </Row>
      <CardsR />
      <AboutUs />
      <Contact />
    </>
  );
};

export default Login;
