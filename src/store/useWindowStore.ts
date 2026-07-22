import { create } from 'zustand';
import type { ReactNode } from 'react';

export interface AppWindow {
  id: string;
  title: string;
  component: ReactNode;
  x: number;
  y: number;
  width: number;
  height: number;
  zIndex: number;
  isMinimized: boolean;
  isMaximized?: boolean;        // флаг максимизации
  prevX?: number;              // предыдущие координаты для восстановления
  prevY?: number;
  prevWidth?: number;
  prevHeight?: number;
}

interface WindowStore {
  windows: AppWindow[];
  addWindow: (window: Omit<AppWindow, 'zIndex' | 'isMinimized' | 'isMaximized' | 'prevX' | 'prevY' | 'prevWidth' | 'prevHeight'>) => void;
  closeWindow: (id: string) => void;
  updateWindow: (id: string, updates: Partial<AppWindow>) => void;
  toggleMinimize: (id: string) => void;
  toggleMaximize: (id: string) => void;
  focusWindow: (id: string) => void;
}

let maxZIndex = 1000;

export const useWindowStore = create<WindowStore>((set, get) => ({
  windows: [],
  
  addWindow: (windowData) => {
    const newWindow: AppWindow = {
      ...windowData,
      zIndex: ++maxZIndex,
      isMinimized: false,
      isMaximized: false,
    };
    set((state) => ({ windows: [...state.windows, newWindow] }));
  },
  
  closeWindow: (id) => {
    set((state) => ({
      windows: state.windows.filter((w) => w.id !== id),
    }));
  },
  
  updateWindow: (id, updates) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, ...updates } : w
      ),
    }));
  },
  
  toggleMinimize: (id) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, isMinimized: !w.isMinimized } : w
      ),
    }));
  },
  
 toggleMaximize: (id) => {
  set((state) => {
    const win = state.windows.find((w) => w.id === id);
    if (!win) return state;

    if (win.isMaximized) {
      // Восстанавливаем
      return {
        windows: state.windows.map((w) =>
          w.id === id
            ? {
                ...w,
                isMaximized: false,
                x: w.prevX ?? 100,
                y: w.prevY ?? 50,
                width: w.prevWidth ?? 800,
                height: w.prevHeight ?? 600,
                prevX: undefined,
                prevY: undefined,
                prevWidth: undefined,
                prevHeight: undefined,
              }
            : w
        ),
      };
    } else {
      // Запоминаем текущие размеры и разворачиваем на весь экран
      const { x, y, width, height } = win;
      // Используем глобальный window
      const screenWidth = globalThis.window?.innerWidth ?? 1920;
      const screenHeight = globalThis.window?.innerHeight ?? 1080;
      return {
        windows: state.windows.map((w) =>
          w.id === id
            ? {
                ...w,
                isMaximized: true,
                prevX: x,
                prevY: y,
                prevWidth: width,
                prevHeight: height,
                x: 0,
                y: 0,
                width: screenWidth,
                height: screenHeight,
              }
            : w
        ),
      };
    }
  });
},
  
  focusWindow: (id) => {
    set((state) => ({
      windows: state.windows.map((w) =>
        w.id === id ? { ...w, zIndex: ++maxZIndex } : w
      ),
    }));
  },
}));