import { Menu } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import AboutUs from "./AboutUs";

const NavBar = () => (
  <Menu mode="horizontal" theme="dark">
    <Menu.Item icon={<UserOutlined />}>
      <Link to={AboutUs}>Conocenos</Link>
    </Menu.Item>

    <Menu.Item icon={<MailOutlined />}>Contactanos</Menu.Item>
  </Menu>
);

export default NavBar;
