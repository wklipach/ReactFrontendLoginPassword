import React from 'react';
import { Layout } from 'antd';
import Split from 'react-split'; // импорт сплиттера
import MainMenu from '../components/MainMenu';
import WindowContainer from '../components/WindowContainer';
import DockPanel from '../components/DockPanel';
import { useWindowStore } from '../store/useWindowStore';
import styles from './Dashboard.module.css';
import DataGrid from '../components/tables/DataGrid';
import DataTree from '../components/trees/DataTree';

const { Header, Content } = Layout;

const Dashboard: React.FC = () => {
  const windows = useWindowStore((state) => state.windows);

  return (
    <Layout className={styles.layout}>
      <Header className={styles.header}>
        <div className={styles.logo}>Моё приложение</div>
        <MainMenu />
      </Header>

      {/* Основная часть без статического Sider */}
      <Layout style={{ height: 'calc(100vh - 64px)' }}> {/* 64px - высота хедера */}
        <Content style={{ padding: 0, overflow: 'hidden' }}>
          {/* Сплиттер между деревом и таблицей */}
          <Split
            sizes={[20, 80]}                // начальные проценты ширины
            minSize={[150, 300]}            // минимальная ширина для каждой панели
            gutterSize={6}                  // толщина полосы разделителя
            direction="horizontal"          // горизонтальное разделение
            cursor="col-resize"             // курсор при наведении
            style={{ display: 'flex', height: '100%' }}
          >
            {/* Левая панель - дерево */}
            <div style={{ padding: 16, background: '#fafafa', overflow: 'auto' }}>
              <div>Дерево (заглушка)
                <DataTree />
              </div>
              {/* Здесь позже будет ваш компонент дерева */}
            </div>

            {/* Правая панель - таблица + слой окон */}
            <div style={{ padding: 0, position: 'relative', display: 'flex', flexDirection: 'column', height: '100%' }}>
               <DataGrid />
              <div className={styles.windowLayer}>
                {windows.map((win) => (
                  <WindowContainer key={win.id} window={win} />
                ))}
              </div>

            </div>
          </Split>
        </Content>
      </Layout>

      <DockPanel />
    </Layout>
  );
};

export default Dashboard;