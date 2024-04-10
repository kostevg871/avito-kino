import { Layout, Flex } from "antd";

import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

const LayoutApp = () => {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout>
        <Header style={{ color: "white" }}>Header</Header>
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Flex>
  );
};

export default LayoutApp;
