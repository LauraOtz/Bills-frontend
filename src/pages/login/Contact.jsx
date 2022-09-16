import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Form, Input, Row, Col } from "antd";
// import "../home/home.css"
import "../login/Contactanos.css";

const { TextArea } = Input;

const Contact = () => {
  const form = useRef();
  //envío de email js
  const sendEmail = (e) => {
    console.log(e);
    emailjs
      .send("service_j674jg8", "template_vay33bg", e, "p-NgmvCaKTkomPPlV")
      .then(
        (result) => {
          console.log(result.text);
          alert("Mensaje enviado");
        },

        (error) => {
          error(error.text);
        }
      );
  };

  return (
    <>
      <hr className="hr" />
      <br />

      <div>
        <h1 span={12} className="H1Contactanos">
          Contactanos
        </h1>

        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col offset={0}>
            <div>
              <p>
                <h3 className="H3Contactanos">
                  Ofrecemos un servicio personalizado, profesional y confiable.
                </h3>
              </p>
              <p>
                <h3 className="H3Contactanos">
                  Dejanos tu consulta y responderemos a la brevedad
                </h3>
              </p>
            </div>
          </Col>
          <Col offset={0}>
            <Form
              className="FormContactanos"
              ref={form}
              onFinish={sendEmail}
              name="basic"
              id="FormContactanos"
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              initialValues={{
                remember: true,
              }}
              autoComplete="off"
            >
              <Form.Item
                label="Nombre"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Por favor introduzca su nombre",
                  },

                  // {
                  //   whitespace: true,
                  // },

                  {
                    type: "regexp",
                    pattern: new RegExp("^[a-zA-Z]*$"),
                    message: "Wrong format!",
                  },

                  {
                    min: 4,
                    max: 30,
                    message: "Tiene que tener entre 4 y 30 Caracteres",
                  },
                  {
                    validator: (_, value) =>
                      value.match(/^[a-zA-Z]+$/)
                        ? Promise.resolve()
                        : Promise.reject(
                            "Solo se puede ingresar letras para el nombre!"
                          ),
                  },

                  // {
                  //   validator:(_, value)=>
                  //   value &&
                  //   value.includes("a")
                  //   || value.includes("b")
                  // }
                ]}
                hasFeedback
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Correo electronico"
                name="email"
                rules={[
                  {
                    required: true,
                    message: "Por favor introduzca su correo electrónico.",
                  },
                  {
                    type: "email",
                    message: "Ingrese un Correo Electrónico Valido!",
                  },
                  {
                    whitespace: true,
                  },
                ]}
                hasFeedback
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="message"
                label="Mensaje"
                rules={[
                  {
                    required: true,
                    message: "Ingrese su mensaje!",
                  },
                  {
                    min: 4,
                    max: 150,
                    message:
                      "Ingrese un mensaje valido, entre 4 y 150 Caracteres",
                  },

                  {
                    whitespace: true,
                  },
                ]}
                hasFeedback
              >
                <TextArea
                  name="textarea"
                  cols={100}
                  rows={4}
                  showCount
                  maxLength={150}
                  hasFeedback
                />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 20,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  value="Send"
                  class="ant-btn ant-btn-default add-new"
                >
                  Enviar
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
};
export default Contact;
