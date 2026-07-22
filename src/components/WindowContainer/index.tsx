import React  from 'react';
import { Rnd } from 'react-rnd';
import { Button } from 'antd';
import {
  CloseOutlined,
  MinusOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
} from '@ant-design/icons';
import { useWindowStore, type AppWindow } from '../../store/useWindowStore';

interface Props {
  window: AppWindow;
}

const WindowContainer: React.FC<Props> = ({ window }) => {
  const {
    id,
    title,
    component,
    x,
    y,
    width,
    height,
    zIndex,
    isMinimized,
    isMaximized,
  } = window;

  const { updateWindow, closeWindow, toggleMinimize, toggleMaximize, focusWindow } =
    useWindowStore();

  // Если окно свёрнуто – не рендерим его (позже появится док-панель)
  if (isMinimized) return null;

  // Обработчики перемещения и изменения размера
  const handleDragStop = (_e: any, data: { x: number; y: number }) => {
    if (!isMaximized) {
      updateWindow(id, { x: data.x, y: data.y });
    }
  };

  const handleResizeStop = (
    _e: any,
    _direction: any,
    ref: HTMLElement,
    _delta: any,
    position: { x: number; y: number }
  ) => {
    if (!isMaximized) {
      updateWindow(id, {
        width: ref.offsetWidth,
        height: ref.offsetHeight,
        x: position.x,
        y: position.y,
      });
    }
  };

  // Двойной клик по заголовку для максимизации/восстановления
  const handleTitleDoubleClick = () => {
    toggleMaximize(id);
  };

  // Рендер кнопок управления
  const renderControlButtons = () => (
    <div style={{ display: 'flex', gap: 4 }}>
      <Button
        type="text"
        size="small"
        icon={<MinusOutlined />}
        onClick={(e) => { e.stopPropagation(); toggleMinimize(id); }}
        style={{ color: '#fff', fontSize: 12, padding: '0 6px' }}
      />
      <Button
        type="text"
        size="small"
        icon={isMaximized ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
        onClick={(e) => { e.stopPropagation(); toggleMaximize(id); }}
        style={{ color: '#fff', fontSize: 12, padding: '0 6px' }}
      />
      <Button
        type="text"
        size="small"
        icon={<CloseOutlined />}
        onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
        style={{ color: '#fff', fontSize: 12, padding: '0 6px' }}
        danger
      />
    </div>
  );

  return (
    <Rnd
      position={{ x, y }}
      size={{ width, height }}
      onDragStop={handleDragStop}
      onResizeStop={handleResizeStop}
      style={{ zIndex, pointerEvents: 'auto' }}
      onClick={() => focusWindow(id)}
      // Разрешаем перетаскивание только за заголовок (класс .window-header)
      dragHandleClassName="window-header"
      // Если окно максимизировано, отключаем возможность изменения размера и перемещения
      disableDragging={!!isMaximized}
      enableResizing={!isMaximized}
      bounds="parent" // чтобы окно не выходило за пределы родителя
    >
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#fff',
          borderRadius: 8,
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
        }}
      >
        {/* Шапка окна */}
        <div
          className="window-header"
          onDoubleClick={handleTitleDoubleClick}
          style={{
            backgroundColor: '#2d7b9b', // можно взять из темы
            padding: '6px 12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            cursor: 'default',
            userSelect: 'none',
            flexShrink: 0,
          }}
        >
          <span style={{ color: '#fff', fontWeight: 500, fontSize: 13 }}>
            {title}
          </span>
          {renderControlButtons()}
        </div>

        {/* Тело окна */}
        <div
          style={{
            flex: 1,
            overflow: 'auto',
            padding: 8,
            backgroundColor: '#fff',
          }}
        >
          {component}
        </div>
      </div>
    </Rnd>
  );
};

export default WindowContainer;