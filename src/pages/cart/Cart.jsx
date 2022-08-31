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
      title: "Acción",
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
        tax: Number(((subTotal / 100) * 10).toFixed(2)),
        totalAmount: Number(
          (
            Number(subTotal) + Number(((subTotal / 100) * 10).toFixed(2))
          ).toFixed(2)
        ),
        userId: JSON.parse(localStorage.getItem("auth"))._id,
      };
      await axios.post("/api/bills/addbills", newObject);
      message.success("Bill Generada!");
      navigate("/bills");
    } catch (error) {
      message.error("Error!");
      console.log(error);
    }
  };
  return (
    <Layout>
      <h2>Bill</h2>
      <Table dataSource={cartItems} columns={columns} bordered />
      <div className="subTotal">
        <h2>
          Sub Total: <span>$ {subTotal.toFixed(2)}</span>
        </h2>
        <Button onClick={() => setBillPopUp(true)} className="add-new">
          Crear Bill
        </Button>
      </div>
      <Modal
        title="Crear Bill"
        visible={billPopUp}
        onCancel={() => setBillPopUp(false)}
        footer={false}
      >
        <Form layout="vertical" onFinish={handlerSubmit}>
          <FormItem name="customerName" label="Nombre Cliente">
            <Input />
          </FormItem>
          <FormItem name="customerPhone" label="Teléfono Cliente">
            <Input />
          </FormItem>
          <FormItem name="customerAddress" label="Dirección">
            <Input />
          </FormItem>
          <Form.Item name="paymentMethod" label="Método de Pago">
            <Select>
              <Select.Option value="Efectivo">Efectivo</Select.Option>
              <Select.Option value="Transferencia"></Select.Option>
              <Select.Option value="Tarjeta">Tarjeta</Select.Option>
            </Select>
          </Form.Item>
          <div className="total">
            <span>SubTotal: ${subTotal.toFixed(2)}</span>
            <br />
            <span>IVA: ${((subTotal / 100) * 21).toFixed(2)}</span>
            <h3>
              Total: $
              {(
                Number(subTotal) + Number(((subTotal / 100) * 10).toFixed(2))
              ).toFixed(2)}
            </h3>
          </div>
          <div className="form-btn-add">
            <Button htmlType="submit" className="add-new">
              Generar Bill
            </Button>
          </div>
        </Form>
      </Modal>
    </Layout>
  );
};

export default Cart;
