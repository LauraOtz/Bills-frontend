import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LayoutApp from "../../components/Layout";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select, Table, message } from "antd";
import FormItem from "antd/lib/form/FormItem";
import "../home/home.css";

const Products = () => {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState([]);
  const [popModal, setPopModal] = useState(false);
  const [editProduct, setEditProduct] = useState(false);

  const getAllProducts = async () => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      const { data } = await axios.get("/api/products/getproducts");
      setProductData(data);
      dispatch({
        type: "HIDE_LOADING",
      });
      console.log(data);
    } catch (error) {
      dispatch({
        type: "HIDE_LOADING",
      });
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handlerDelete = async (record) => {
    try {
      dispatch({
        type: "SHOW_LOADING",
      });
      await axios.post("/api/products/deleteproducts", {
        productId: record._id,
      });
      message.success("Producto Eliminado!");
      getAllProducts();
      setPopModal(false);
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
      title: "Acción",
      dataIndex: "_id",
      render: (id, record) => (
        <div>
          <DeleteOutlined
            className="cart-action"
            onClick={() => handlerDelete(record)}
          />
          <EditOutlined
            className="cart-edit"
            onClick={() => {
              setEditProduct(record);
              setPopModal(true);
            }}
          />
        </div>
      ),
    },
  ];

  const handlerSubmit = async (value) => {
    //console.log(value);
    if (editProduct === false) {
      try {
        dispatch({
          type: "SHOW_LOADING",
        });
        const res = await axios.post("/api/products/addproducts", value);
        message.success("Producto Agregado!");
        getAllProducts();
        setPopModal(false);
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
    } else {
      try {
        dispatch({
          type: "SHOW_LOADING",
        });
        await axios.put("/api/products/updateproducts", {
          ...value,
          productId: editProduct._id,
        });
        message.success("Product Actualizado!");
        getAllProducts();
        setPopModal(false);
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
    }
  };

  return (
    <div className="Home">
      <LayoutApp>
        <h2>Mis Productos</h2>
        <Button className="add-new" onClick={() => setPopModal(true)}>
          Agregar Nuevo
        </Button>
        <Table
          className="ContainerTable"
          dataSource={productData}
          columns={columns}
          bordered
        />

        {popModal && (
          <Modal
            title={`${
              editProduct !== false ? "Editar producto" : "Agregar Producto"
            }`}
            visible={popModal}
            onCancel={() => {
              setEditProduct(false);
              setPopModal(false);
            }}
            footer={false}
          >
            <Form
              layout="vertical"
              initialValues={editProduct}
              onFinish={handlerSubmit}
            >
              <FormItem
                name="name"
                label="Nombre"
                rules={[
                  {
                    required: true,
                    pattern: new RegExp(/^[^\W_]{4,20}$/),
                    message: "Campo requerido",
                  },
                ]}
              >
                <Input placeholder="Ingrese el nombre del producto." />
              </FormItem>
              <Form.Item
                name="category"
                label="Categoría"
                rules={[
                  { required: true, message: "Seleccione una categoría" },
                ]}
              >
                <Select placeholder="Seleccione una categoría">
                  <Select.Option value="accesorios">Accesorios</Select.Option>
                  <Select.Option value="celulares">Celulares</Select.Option>
                  <Select.Option value="herramientas">
                    Herramientas
                  </Select.Option>
                </Select>
              </Form.Item>
              <FormItem
                name="price"
                label="Precio"
                rules={[
                  {
                    required: true,

                    message: "Campo requerido.",
                  },
                  {
                    required: true,
                    pattern: new RegExp(
                      /^(\d*[1-9]\d*(\.\d+)?|0*\.\d*[1-9]\d*)$/
                    ),
                    message: "Por favor ingrese un precio válido.",
                  },

                  {
                    max: 10,
                    message: "El precio no debe contener más de 10 números.",
                  },
                ]}
              >
                <Input placeholder="Ingrese el precio del producto sin el signo $" />
              </FormItem>
              <FormItem name="image" label="URL Imagen (opcional)">
                <Input placeholder="Ingrese dirección de la imagen de su producto." />
              </FormItem>
              <div className="form-btn-add">
                <Button htmlType="submit" className="add-new">
                  Agregar
                </Button>
              </div>
            </Form>
          </Modal>
        )}
      </LayoutApp>
    </div>
  );
};

export default Products;
