import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setCredentials } from '../store/authSlice';
import { Form, Input, Button, message } from 'antd';
import styles from './Login.module.css';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = (values: { username: string; password: string }) => {
    setLoading(true);
    setTimeout(() => {
      if (values.username === 'admin' && values.password === 'admin') {
        dispatch(setCredentials({
          token: 'fake-token',
          user: { id: 1, name: 'admin' }
        }));
        message.success('Добро пожаловать!');
        navigate('/dashboard');
      } else {
        message.error('Неверный логин или пароль');
      }
      setLoading(false);
    }, 500);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Вход в систему</h2>
      <Form
        layout="vertical"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.Item
          label="Имя пользователя"
          name="username"
          rules={[{ required: true, message: 'Введите имя пользователя' }]}
        >
          <Input placeholder="admin" />
        </Form.Item>

        <Form.Item
          label="Пароль"
          name="password"
          rules={[{ required: true, message: 'Введите пароль' }]}
        >
          <Input.Password placeholder="admin" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;