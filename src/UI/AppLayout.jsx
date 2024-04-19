import React, { useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Layout, Menu } from "antd";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";
import s from "./Layout.module.css"

const { Header, Content, Sider } = Layout;

export default function AppLayout() {

  const location = useLocation()

  const [keys, setKeys] = useState(location.pathname)
  const navigate = useNavigate()

  const clickHandler = (key) => {
    setKeys(key)
    navigate(key)
  }

  const menuItems = [
    { key: '/dashboard', icon: React.createElement(PieChartOutlined), label: "Dashboard" },
    { key: '/requests', icon: React.createElement(UserOutlined), label: "Requests" },
  ]


  return (
    <Layout className={s.layout}>
      <Header>
        <h1>HelpDesk</h1>
      </Header>
      <Content>
        <Layout className={s.layout}>
          <Sider className={s.sidebar}>
            <Menu
              selectedKeys={keys}
              items={menuItems}
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
