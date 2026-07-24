import React from 'react';
import { Button } from 'antd';
import { useWindowStore } from '../../store/useWindowStore';
import { WindowsOutlined } from '@ant-design/icons';

const DockPanel: React.FC = () => {
  // Берём ВСЕ окна (не только свёрнутые)
  const windows = useWindowStore((state) => state.windows);
  const toggleMinimize = useWindowStore((state) => state.toggleMinimize);
  const focusWindow = useWindowStore((state) => state.focusWindow);

  // Если окон нет, панель не показываем
  if (windows.length === 0) return null;

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#f0f0f0',
        borderTop: '1px solid #d9d9d9',
        padding: '4px 8px',
        display: 'flex',
        gap: '4px',
        alignItems: 'center',
        zIndex: 9999,
        height: 40,
        overflowX: 'auto',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.1)',
      }}
    >
      <WindowsOutlined style={{ marginRight: 8, color: '#1890ff' }} />
      {windows.map((win) => (
        <Button
          key={win.id}
          size="small"
          onClick={() => {
            // Переключаем состояние свёрнутости
            toggleMinimize(win.id);
            // Если окно было свёрнуто, оно развернётся, и мы поднимем его наверх
            // Если оно было развёрнуто, оно свернётся, focusWindow не помешает
            focusWindow(win.id);
          }}
          style={{
            flexShrink: 0,
            // Можно добавить визуальный признак, что окно активно (не свёрнуто)
            backgroundColor: win.isMinimized ? undefined : '#e6f7ff',
            borderColor: win.isMinimized ? undefined : '#1890ff',
          }}
        >
          {win.title}
        </Button>
      ))}
    </div>
  );
};

export default DockPanel;