import React, { useState } from "react";
import { Outlet, redirect, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";

const { Header, Content, Sider } = Layout;

export default function AppLayout() {

  const location = useLocation()

  const [keys, setKeys] = useState(location.pathname)
  const navigate = useNavigate()

  const clickHandler = (key) => {
    setKeys(key)
    navigate(key)
  }


  return (
    <Layout className="layout">
      <Header>
        <h1>HelpDesk</h1>
      </Header>
      <Content>
        <Layout className="layout">
          <Sider className="sidebar">
            <Menu
            selectedKeys={keys}
              items={[
                { key: '/dashboard', icon: React.createElement(PieChartOutlined), label: "Dashboard" },
                { key: '/requests', icon: React.createElement(UserOutlined), label: "Requests" },
              ]}

              onClick={(e) => {clickHandler(e.key)}}
            ></Menu>
          </Sider>
          <Content className="workspace">
            <Outlet />
          </Content>
        </Layout>
      </Content>
    </Layout>
  );
}
