import { Layout } from "antd";
import Title from "antd/es/typography/Title";

import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

const LayoutApp = () => {
  return (
    <Layout>
      <Header>
        <Title style={{ color: "white", padding: 10 }}>Kino</Title>
      </Header>
      <Content style={{ padding: 10 }}>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default LayoutApp;
