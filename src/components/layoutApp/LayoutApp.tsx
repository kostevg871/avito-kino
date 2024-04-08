import { Layout, Flex, Typography } from "antd";

import MainPage from "../../pages/MainPage";

const { Header, Content } = Layout;

const LayoutApp = () => {
  return (
    <Flex gap="middle" wrap="wrap">
      <Layout>
        <Header>Header</Header>
        <Content>
          <Flex
            gap="middle"
            vertical={false}
            justify={"space-between"}
            align={"center"}
          >
            <Typography.Title>Фильмы</Typography.Title>
            <p>25</p>
          </Flex>
          <MainPage />
        </Content>
      </Layout>
    </Flex>
  );
};

export default LayoutApp;
