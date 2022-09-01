import { Button, Form, Input, message } from "antd";
import FormItem from "antd/lib/form/FormItem";
import axios from "axios";
import React, { useState } from "react";
//import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";

const Register = () => {
  const postUsuario = async (datos) => {
    const resp = await axios.get(`api/users/register`, {
      method: "POST",
      body: JSON.stringify(datos),
    });

    const data = await resp.json();

    return data;
  };

  const [formValues, setFormValues] = useState({
    nombre: "",
    email: "",
    password: "",
    role: "ADMIN-ROLE",
  });

  const [message, setMessage] = useState([]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    postUsuario(formValues).then((respuesta) => {
      console.log(respuesta);
      if (respuesta?.errors) {
        setMessage(respuesta.errors);
      } else {
        setMessage([{ ok: true, msg: "Registro exitoso!" }]);
        setFormValues({
          nombre: "",
          email: "",
          password: "",
        });
        setTimeout(() => {
          setMessage([]);
        }, 2000);
      }
    });
  };

  return (
    <div className="formRegistro">
      <div className="form">
        <h1>Bills</h1>
        <p>Registro</p>
        <div className="form-group">
          <Form layout="vertical" onFinish={handleSubmit}>
            <FormItem
              name="name"
              label="Nombre"
              value={formValues.nombre}
              onChange={handleChange}
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
              label="Correo electrónico"
              value={formValues.email}
              onChange={handleChange}
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
              <Input />
            </FormItem>
            <FormItem
              name="password"
              label="Contraseña"
              value={formValues.password}
              onChange={handleChange}
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
              <Link className="form-other" to="/login">
                Iniciar sesión
              </Link>
            </div>
          </Form>
        </div>
        {message.length > 0 &&
          message.map((item, index) => (
            <div
              className={
                item?.ok
                  ? "alert alert-success mt-3"
                  : "alert alert-danger mt-3"
              }
              role="alert"
              key={index}
            >
              {item.msg}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Register;