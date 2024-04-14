import { ConfigProvider } from "antd";
import LayoutApp from "./LayoutApp";

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            padding: 0,
          },
        },
      }}
    >
      <LayoutApp />;
    </ConfigProvider>
  );
}

export default App;
