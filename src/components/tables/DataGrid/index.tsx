// src/components/tables/DataGrid/index.tsx
import React, { useMemo } from 'react';
import { Button, Space, message } from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  ReloadOutlined,
  ExportOutlined,
} from '@ant-design/icons';
import DataTable from '../DataTable';
import { getColumns } from './columns';
import { generateMockData } from '../../../utils/mockData';

const DataGrid: React.FC = () => {
  // Генерируем мок-данные (один раз при монтировании)
  const rowData = useMemo(() => generateMockData(100), []);
  // Определяем колонки (один раз)
  const columnDefs = useMemo(() => getColumns(), []);

  // Обработчики кнопок (пока заглушки)
  const handleAdd = () => {
    message.info('Добавление новой записи (заглушка)');
  };

  const handleEdit = () => {
    message.info('Редактирование выбранной записи (заглушка)');
  };

  const handleDelete = () => {
    message.info('Удаление выбранной записи (заглушка)');
  };

  const handleRefresh = () => {
    message.success('Данные обновлены (заглушка)');
  };

  const handleExport = () => {
    message.info('Экспорт в Excel (заглушка)');
  };

  // Панель инструментов
  const toolbar = (
    <Space size="middle">
      <Button type="primary" icon={<PlusOutlined />} onClick={handleAdd}>
        Добавить
      </Button>
      <Button icon={<EditOutlined />} onClick={handleEdit}>
        Редактировать
      </Button>
      <Button danger icon={<DeleteOutlined />} onClick={handleDelete}>
        Удалить
      </Button>
      <Button icon={<ReloadOutlined />} onClick={handleRefresh}>
        Обновить
      </Button>
      <Button icon={<ExportOutlined />} onClick={handleExport}>
        Экспорт
      </Button>
    </Space>
  );

  return (
    <DataTable
      rowData={rowData}
      columnDefs={columnDefs}
      toolbar={toolbar}
      rowSelection="single"
      onSelectionChanged={(selectedRows) => {
        // Здесь можно сохранять выбранную строку для будущих операций
        console.log('Выбрано:', selectedRows);
      }}
    />
  );
};

export default DataGrid;