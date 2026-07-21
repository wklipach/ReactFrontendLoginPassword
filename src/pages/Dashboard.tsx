import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';

import { Button, Card, Space, Typography } from 'antd';
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import styles from './Dashboard.module.css';

const { Title, Text } = Typography;

const Dashboard = () => {
  const user = useSelector((state: any) => state.auth.user);
  const dispatch = useDispatch();

return (
    <div className={styles.container}>
      <Card>
        <Space vertical size="large" style={{ width: '100%' }}>
          <Title level={2}>
            <UserOutlined /> Добро пожаловать, {user?.name}!
          </Title>
          <Text>Это главная страница. Вы успешно вошли.</Text>
          <Button
            type="primary"
            danger
            icon={<LogoutOutlined />}
            onClick={() => dispatch(logout())}
          >
            Выйти
          </Button>
        </Space>
      </Card>
    </div>
  );
  
};

export default Dashboard;