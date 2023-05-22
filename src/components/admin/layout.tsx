import Navbar from "./navbar/navbar";
import Sidebar from "./sidebar/sidebar";
import clsx from "clsx";
import styles from "./layout.module.css";

const AdminLayout = ({ children, title }: any) => {
  return <div>{children}</div>;
};

export default AdminLayout;
