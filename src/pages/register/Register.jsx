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
              hasFeedback
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
                { type: "email", message: "Por favor ingrese un email válido" },
              ]}
              hasFeedback
            >
              <Input />
            </FormItem>
            <FormItem
              name="password"
              label="Password"
              rules={[
                {
                  required: true,

                  message: "Introduzca una contraseña.",
                },
                { min: 6 },
                {
                  max: 20,
                  message:
                    "El contraseña no debe contener más de 20 caracteres",
                },
                {
                  validator: (_, value) =>
                    value && value.includes("A-Z")
                      ? Promise.resolve()
                      : Promise.reject("Password does not match criteria."),
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </FormItem>

            <FormItem
              name="confirmPassword"
              label="Confirm Password"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered does not match."
                    );
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password />
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
