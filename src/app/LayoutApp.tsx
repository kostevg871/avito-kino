import { Layout } from "antd";

import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

const LayoutApp = () => {
  return (
    <Layout>
      <Header style={{ color: "white" }}>Header</Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default LayoutApp;
