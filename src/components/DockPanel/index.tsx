import React from 'react';
import { Button } from 'antd';
import { useWindowStore, type AppWindow } from '../../store/useWindowStore'; 
import { WindowsOutlined } from '@ant-design/icons';

const DockPanel: React.FC = () => {
  const windows = useWindowStore((state) => state.windows);
  const toggleMinimize = useWindowStore((state) => state.toggleMinimize);
  const focusWindow = useWindowStore((state) => state.focusWindow);

  // Указываем тип для фильтрованного массива
  const minimizedWindows: AppWindow[] = windows.filter((w) => w.isMinimized);

  if (minimizedWindows.length === 0) {
    return null;
  }

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
      {minimizedWindows.map((win) => (   // теперь win автоматически имеет тип AppWindow
        <Button
          key={win.id}
          size="small"
          onClick={() => {
            toggleMinimize(win.id);
            focusWindow(win.id);
          }}
          style={{ flexShrink: 0 }}
        >
          {win.title}
        </Button>
      ))}
    </div>
  );
};

export default DockPanel;