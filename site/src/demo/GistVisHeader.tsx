import React from "react";
import { Layout,Flex,Button,Typography, ConfigProvider } from "antd";
import THEME from "../style/theme";

const { Header } = Layout;
const { Text } = Typography;

const GistVisHeader:React.FC = () => {
  return (
    <ConfigProvider theme={THEME}>
      <Header>
        <Flex align="center" justify="space-between">
          <Text style={{ fontSize: '24px', padding: '2%', fontWeight: 'bold' }}>GistVis</Text>
          <div>
            <Button href="/" type="link">
              Home
            </Button>
            <Button href="/interactive" type="link">
              User study interface
            </Button>
            <Button href="/llm_setting" type="link">
              Setting
            </Button>
            <Button href="/test" type="link">
              Test
            </Button>
          </div>
        </Flex>
    </Header>
  </ConfigProvider>
  )
}

export default GistVisHeader;