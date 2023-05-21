import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Menu, MenuProps } from "antd";
import React from "react";
import styles from "./sidebar.module.css";

const items: MenuProps["items"] = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  ShopOutlined,
  TeamOutlined,
  CloudOutlined,
  AppstoreOutlined,
].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

const Sidebar = () => {
  return (
    <div>
      <h2 className={styles.title}>News Portal</h2>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={items}
        className={styles.menu}
      />
    </div>
  );
};

export default Sidebar;
