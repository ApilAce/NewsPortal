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
import { useRouter } from "next/router";

const Sidebar = () => {
  
const router = useRouter();

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
  label: `nav ${index + 1}`
}));

  return (
    <div>
      <h2 className={styles.title}>News Portal</h2>
      <Menu
        theme="light"
        mode="inline"
        defaultSelectedKeys={["1"]}
        items={items}
        onClick={({ item, key, keyPath, domEvent }) => {
          key == '1' ? router.push('/admin') : ''
          key == '2' ? router.push('/admin/category') : ''
        }}
        className={styles.menu}
      />
    </div>
  );
};

export default Sidebar;
