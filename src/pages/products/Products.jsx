import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LayoutApp from "../../components/Layout";
import {
  DeleteOutlined,
  EditOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Table,
  message,
  notification,
} from "antd";
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

  const openNotification = (record) => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button
        size="small"
        className="add-new"
        onClick={() => {
          handlerDelete(record);
          notification.close(key);
        }}
      >
        Confirmar
      </Button>
    );
    notification.open({
      message: "¿Seguro desea borrar el producto?",

      icon: <WarningOutlined style={{ color: "#ff7f50" }} />,
      btn,
      key,
    });
  };

  //---------------------------------
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
  //-------------------------

  //------------------------

  const columns = [
    {
      title: "Nombre",
      dataIndex: "name",
    },
    {
      title: "Imagen",
      dataIndex: "image",
      render: (image, record) => (
        <img src={image} alt={record.name} height={50} width={50} />
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
            onClick={() => openNotification(record)}
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
    if (editProduct === null) {
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
    
    <div className="Hidden">
      <LayoutApp>
        <h2>Mis Productos</h2>
        <Button className="add-new" onClick={() => setPopModal(true)}>
          Agregar Nuevo
        </Button>
        <Table
          className="ContainerTabla"
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
                    message: "Introduzca el nombre del producto.",
                  },
                  {
                    max: 20,
                    message: "El nombre no debe contener más de 20 caracteres",
                  },
                ]}
              >
                <Input />
              </FormItem>
              <Form.Item
                name="category"
                label="Categoría"
                rules={[
                  { required: true, message: "Seleccione una categoría" },
                ]}
              >
                <Select>
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
                    message: "Introduzca el precio del producto si el signo $.",
                  },
                  {
                    min: 2,
                    message: "El precio debe contener al menos dos números.",
                  },
                  {
                    max: 10,
                    message: "El precio no debe contener más de 10 números.",
                  },
                ]}
              >
                <Input />
              </FormItem>
              <FormItem name="image" label="URL Imagen">
                <Input />
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
