import { ConfigProvider, Layout, theme } from "antd";
import Sidebar from "./sidebar/sidebar";
import Navbar from "./navbar/navbar";
import React from "react";

const { Header, Content, Sider } = Layout;

const AdminLayout = ({ children, title }: any) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <>
      <ConfigProvider
        theme={{
          token: {
            fontFamily: "Poppins",
          },
        }}
      >
        <Layout className="main-layout">
          <Sider
            // breakpoint="md"
            // collapsedWidth="0"
            width={250}
            style={{ height: "100vh", overflow: "auto" }}
            theme="light"
            trigger={null}
            collapsible
            className="ant-sider"
          >
            <div className="demo-logo-vertical" />
            <Sidebar />
          </Sider>
          <Layout className="main-ant-wrapper">
            <Header
              style={{
                backgroundColor: "white",
                padding: "0",
                height: "fit-content",
              }}
            >
              <Navbar />
            </Header>
            <Content
              style={{
                margin: "1.125em 1em",
                padding: "1em",
                minHeight: 280,
              }}
            >
              {children}
            </Content>
          </Layout>
        </Layout>
      </ConfigProvider>
    </>
  );
};

export default AdminLayout;
