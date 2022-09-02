import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button, Form, Input, Row, Col } from "antd";

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
      <h1>Contactanos</h1>
      <Row>
        <Col span={8}>
          <p>
            <h5>
              Ofrecemos un servicio personalizado, profesional y confiable.
            </h5>
          </p>
          <p>
            <h5>Dejanos tu consulta y responderemos a la brevedad</h5>
          </p>
        </Col>
        <Col span={16}>
          <Form
            ref={form}
            onFinish={sendEmail}
            name="basic"
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
              label="Nombre y apellido"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Por favor introduzca su nombre.",
                },
              ]}
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
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="message" label="Mensaje">
              <TextArea
                rows={4}
                showCount
                maxLength={150}
                rules={[
                  {
                    required: true,
                    message: "Por favor introduzca su correo electrónico.",
                  },
                ]}
              />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit" value="Send">
                Enviar
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
export default Contact;
