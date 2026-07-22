import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import { useWindowStore } from '../../store/useWindowStore';
import {
  AppstoreOutlined,
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  SettingOutlined,
  DatabaseOutlined,
  ShoppingOutlined,
} from '@ant-design/icons';

// Вспомогательные компоненты-заглушки для окон (пока просто текст)
const DummyWindow = ({ title }: { title: string }) => <div>Содержимое окна: {title}</div>;

const MainMenu: React.FC = () => {
  const addWindow = useWindowStore((state) => state.addWindow);

  // Функция-обработчик открытия окна
  const openWindow = (title: string, key: string, width = 800, height = 600) => {
    addWindow({
      id: `${key}-${Date.now()}`,
      title,
      component: <DummyWindow title={title} />,
      x: 100 + Math.random() * 50, // случайный сдвиг, чтобы окна не накладывались
      y: 50 + Math.random() * 50,
      width,
      height,
    });
  };

  // Пункты меню
  const items: MenuProps['items'] = [
    {
      key: 'sub1',
      icon: <DatabaseOutlined />,
      label: 'Справочники',
      children: [
        { key: 'contractors', label: 'Контрагенты', onClick: () => openWindow('Контрагенты', 'contractors', 900, 600) },
        { key: 'products', label: 'Товары', onClick: () => openWindow('Товары', 'products', 1000, 700) },
        { key: 'warehouses', label: 'Склады', onClick: () => openWindow('Склады', 'warehouses', 700, 500) },
      ],
    },
    {
      key: 'sub2',
      icon: <ShoppingOutlined />,
      label: 'Документы',
      children: [
        { key: 'orders', label: 'Заказы', onClick: () => openWindow('Заказы', 'orders', 1100, 700) },
        { key: 'invoices', label: 'Счета', onClick: () => openWindow('Счета', 'invoices', 900, 600) },
        { key: 'acts', label: 'Акты', onClick: () => openWindow('Акты', 'acts', 900, 600) },
      ],
    },
    {
      key: 'sub3',
      icon: <PieChartOutlined />,
      label: 'Отчёты',
      children: [
        { key: 'sales', label: 'Продажи', onClick: () => openWindow('Отчёт по продажам', 'sales', 1000, 700) },
        { key: 'stock', label: 'Остатки', onClick: () => openWindow('Остатки товаров', 'stock', 900, 600) },
      ],
    },
    {
      key: 'sub4',
      icon: <SettingOutlined />,
      label: 'Настройки',
      children: [
        { key: 'users', label: 'Пользователи', onClick: () => openWindow('Пользователи', 'users', 800, 600) },
        { key: 'profile', label: 'Профиль', onClick: () => openWindow('Профиль', 'profile', 600, 400) },
      ],
    },
  ];

  return (
    <Menu
      theme="dark" // или "light", зависит от дизайна
      mode="horizontal"
      items={items}
      style={{ flex: 1, minWidth: 0 }}
    />
  );
};

export default MainMenu;