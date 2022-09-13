import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import {
  DeleteOutlined,
  PlusCircleOutlined,
  MinusCircleOutlined,
} from "@ant-design/icons";
import { Button, Form, Input, message, Modal, Select, Table } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../home/home.css";

const Cart = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [billPopUp, setBillPopUp] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartItems } = useSelector((state) => state.rootReducer);

  const handlerIncrement = (record) => {
    dispatch({
      type: "UPDATE_CART",
      payload: { ...record, quantity: record.quantity + 1 },
    });
  };

  const handlerDecrement = (record) => {
    if (record.quantity !== 1) {
      dispatch({
        type: "UPDATE_CART",
        payload: { ...record, quantity: record.quantity - 1 },
      });
    }
  };

  const handlerDelete = (record) => {
    dispatch({
      type: "DELETE_FROM_CART",
      payload: record,
    });
  };

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
    },
    {
      title: "Imagen",
      dataIndex: "image",
      render: (image, record) => (
        <img src={image} alt={record.name} height={60} width={60} />
      ),
    },
    {
      title: "Precio",
      dataIndex: "price",
    },
    {
      title: "Cantidad",
      dataIndex: "_id",
      render: (id, record) => (
        <div>
          <MinusCircleOutlined
            className="cart-minus"
            onClick={() => handlerDecrement(record)}
          />
          <strong className="cart-quantity">{record.quantity}</strong>
          <PlusCircleOutlined
            className="cart-plus"
            onClick={() => handlerIncrement(record)}
          />
        </div>
      ),
    },
    {
      title: "Eliminar",
      dataIndex: "_id",
      render: (id, record) => (
        <DeleteOutlined
          className="cart-action"
          onClick={() => handlerDelete(record)}
        />
      ),
    },
  ];

  useEffect(() => {
    let temp = 0;
    cartItems.forEach(
      (product) => (temp = temp + product.price * product.quantity)
    );
    setSubTotal(temp);
  }, [cartItems]);

  const handlerSubmit = async (value) => {
    //console.log(value);
    try {
      const newObject = {
        ...value,
        cartItems,
        subTotal,
        tax: Number(((subTotal / 100) * 21).toFixed(2)),
        totalAmount: Number(
          (
            Number(subTotal) + Number(((subTotal / 100) * 21).toFixed(2))
          ).toFixed(2)
        ),
        userId: JSON.parse(localStorage.getItem("token"))._id,
      };
      await axios.post("/api/bills/addbills", newObject);
      message.success("Presupuesto generado con éxito");
      navigate("/bills");
    } catch (error) {
      message.error("Error!");
      console.log(error);
    }
  };
  return (
    <Layout>
      <h2>Presupuesto</h2>
      <div className="ContainerTabla ">
        <Table dataSource={cartItems} columns={columns} bordered />
      </div>
      <div className="subTotal">
        <h2>
          Sub Total: <span>$ {subTotal.toFixed(2)}</span>
        </h2>
        <Button onClick={() => setBillPopUp(true)} className="add-new">
          Crear presupuesto
        </Button>
      </div>
      <Modal
        title="Crear presupuesto"
        visible={billPopUp}
        onCancel={() => setBillPopUp(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={handlerSubmit}>
          <FormItem
            name="customerName"
            label="Nombre del cliente"
            rules={[
              {
                required: true,

                message: "Introduzca el nombre del cliente.",
              },
              {
                max: 20,
                message: "El nombre no puede tener más de 20 caracteres.",
              },
              {
                pattern: "^[a-zA-Z]+(([',.- ][a-zA-Z ])?[a-zA-Z]*)*$",
                message: "Ha ingresado un nombre inválido, intente nuevamente",
              },
            ]}
          >
            <Input />
          </FormItem>
          <FormItem
            name="customerPhone"
            label="Teléfono del cliente"
            rules={[
              {
                required: true,

                message: "Introduzca el teléfono del cliente.",
              },
              {
                required: true,

                message: "Introduzca el teléfono del cliente.",
              },
              {
                type: "phone",

                message: "Introduzca el teléfono del cliente.",
              },
              {
                max: 15,
                message: "El teléfono no puede tener más de 15 caracteres.",
              },
            ]}
          >
            <Input />
          </FormItem>
          <FormItem
            name="customerAddress"
            label="Dirección del cliente"
            rules={[
              {
                required: true,

                message: "Introduzca la dirección del cliente.",
              },
              {
                max: 20,
                message: "La dirección no puede tener más de 20 caracteres.",
              },
            ]}
          >
            <Input />
          </FormItem>
          <Form.Item
            name="paymentMethod"
            label="Forma de pago"
            rules={[
              {
                required: true,

                message: "Seleccione una forma de pago.",
              },
            ]}
          >
            <Select>
              <Select.Option value="efectivo">Efectivo</Select.Option>
              <Select.Option value="transferencia">Transferencia</Select.Option>
              <Select.Option value="tarjeta">Tarjeta</Select.Option>
            </Select>
          </Form.Item>
          <div className="total">
            <span>SubTotal: ${subTotal.toFixed(2)}</span>
            <br />
            <span>IVA: ${((subTotal / 100) * 21).toFixed(2)}</span>
            <h3>
              Total: $
              {(
                Number(subTotal) + Number(((subTotal / 100) * 21).toFixed(2))
              ).toFixed(2)}
            </h3>
          </div>
          <div className="form-btn-add">
            <Button htmlType="submit" className="add-new">
              Generar presupuesto
            </Button>
          </div>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Cart;
