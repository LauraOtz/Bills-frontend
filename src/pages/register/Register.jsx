import { Button, Form, Input, message } from "antd";
import FormItem from "antd/lib/form/FormItem";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlerSubmit = async (value) => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      await axios.post("/api/users/register", value);
      message.success("Registro Exitoso!");
      navigate("/login");
      dispatch({
        type: "HIDE_LOADING",
      });
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
    <div className="formRegistro">
      <div className="form">
        <h2>BILL$</h2>
        <p>Registro de Usuario</p>
        <div className="form-group">
          <Form layout="vertical" onFinish={handlerSubmit}>
            <FormItem
              name="name"
              label="Nombre"
              rules={[
                {
                  required: true,

                  message: "Introduzca su nombre",
                },
                {
                  max: 20,
                  message: "El nombre no debe contener más de 20 caracteres",
                },
              ]}
            >
              <Input />
            </FormItem>

            <FormItem
              name="email"
              label="Correo Electrónico"
              rules={[
                {
                  required: true,

                  message: "Introduzca su correo electrónico",
                },
                {
                  max: 60,
                  message: "El correo no debe contener más de 60 caracteres",
                },
              ]}
            >
              <Input type="email" />
            </FormItem>
            <FormItem
              name="password"
              label="Password"
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
                Registro
              </Button>
              <Link className="form-other" to="/login">
                Iniciar Sesión Aquí!
              </Link>
              <br />
              <br />
              <Link className="form-other" to="/login">
                Volver
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
