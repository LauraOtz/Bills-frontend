// emailjs.sendForm(
//   "service_mjmilxq",
//   "template_sevw0is",
//   form.current,
//   "Av9ifBj0zQ-fxT7XP"
// );

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Row, Col } from "antd";

import logoBills1 from "../../assets/logoBills1.png";

// npm i @emailjs/browser
import { useForm } from "react-hook-form";

const Contact = () => {
  //validacion caracteres
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => alert(JSON.stringify(data));

  const form = useRef();
  //envio de email js
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_mjmilxq",
        "template_sevw0is",
        form.current,
        "Av9ifBj0zQ-fxT7XP"
      )
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
      <Row className="mb-5 mt-3">
        <Col lg="8">
          <h1 className="display-4 mb-4">Contactanos</h1>

          <hr className="t_border my-4 ml-0 text-left" />
        </Col>
      </Row>
      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <p>
            <h5>
              Ofrecemos un servicio personalizado, profesional y confiable.
            </h5>
          </p>
          <p>
            <h5>Dejanos tu consulta y responderemos a la brevedad</h5>
          </p>
          <Row className="img-contact">
            <img src={logoBills1} alt="" className="img-c" />
          </Row>
        </Col>

        <Col lg="7" className="d-flex align-items-center">
          <form
            ref={form}
            onSubmit={handleSubmit(onSubmit) && sendEmail}
            className="contact__form w-100"
          >
            <label>Nombre y apellido</label>
            <input
              type="text"
              name="user_name"
              className="form-control"
              id="name"
              placeholder="nombre y apellido"
              required
            />
            <label>Correo electrónico</label>
            <input
              type="email"
              name="user_email"
              className="form-control rounded-0"
              id="email"
              placeholder="Correo electronico"
              required
            />
            <textarea
              name="Mensaje"
              id="message"
              placeholder="Escribe tu consulta"
              rows="5"
              required
              className={`w-full text-3xl h-60 placeholder-gray-500 rounded-lg ${
                errors.comment &&
                " focus:border-red-500 focus:ring-red-500 border-red-500"
              }`}
              {...register("comment", {
                required: {
                  value: true,
                },
                minLength: {
                  value: 3,
                  message: "Complete el mensaje",
                },
                maxLength: {
                  value: 60,
                  message: "Máximo de caracteres permitidos 60 ",
                },
              })}
            />
            <div>
              {errors.comment && (
                <span className="text-red-500 text-sm">
                  {errors.comment.message}
                </span>
              )}
            </div>
            <input
              type="submit"
              value="Send"
              className="btn ac_btn"
              onSubmit={handleSubmit(onSubmit)}
            />{" "}
          </form>
        </Col>
      </Row>
    </>
  );
};
export default Contact;
