import { Button, Flex, Layout, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;
const { Text } = Typography;
const MenuBar = () => {
  return (
    <Header>
      <Flex align="center" justify="space-between">
        <Text style={{ fontSize: '24px', padding: '2%', fontWeight: 'bold' }}>GistVis</Text>
        <div>
          <Link to="/">
            <Button type="link">Home</Button>
          </Link>
          <Link to="/interactive">
            <Button type="link">User study interface</Button>
          </Link>
          <Link to={`/llm_setting`}>
            <Button type="link">Setting</Button>
          </Link>
        </div>
      </Flex>
    </Header>
  );
};

export default MenuBar;
