// src/utils/mockData.ts
// src/utils/mockData.ts
import type { DataGridRow } from '../types/table.types';

/**
 * Генерирует массив случайных данных для таблицы
 * @param count - количество строк
 * @returns массив объектов типа DataGridRow
 */
export const generateMockData = (count: number): DataGridRow[] => {
  const names = ['Товар', 'Изделие', 'Продукт', 'Материал', 'Комплект', 'Деталь', 'Узел'];
  const adjectives = ['Основной', 'Дополнительный', 'Стандартный', 'Улучшенный', 'Эксклюзивный', 'Базовый'];
  const comments = [
    'Комментарий для проверки 1',
    'Комментарий для проверки 2',
    'Комментарий для проверки 3',
    'Комментарий для проверки 4',
    'Комментарий для проверки 5',
  ];

  const randomDate = (start: Date, end: Date) => {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  };

  return Array.from({ length: count }, (_, index) => ({
    id: index + 1,
    shortName: `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${names[Math.floor(Math.random() * names.length)]}`,
    fullName: `${adjectives[Math.floor(Math.random() * adjectives.length)]} ${names[Math.floor(Math.random() * names.length)]} ${Math.floor(Math.random() * 100)}`,
    price: Math.round((Math.random() * 1000 + 10) * 100) / 100,
    quantity: Math.floor(Math.random() * 100) + 1,
    date: randomDate(new Date(2020, 0, 1), new Date(2025, 11, 31)),
    comment1: comments[Math.floor(Math.random() * comments.length)],
    comment2: comments[Math.floor(Math.random() * comments.length)],
    comment3: comments[Math.floor(Math.random() * comments.length)],
    comment4: comments[Math.floor(Math.random() * comments.length)],
    comment5: comments[Math.floor(Math.random() * comments.length)],
    comment6: comments[Math.floor(Math.random() * comments.length)],
    comment7: comments[Math.floor(Math.random() * comments.length)],
    comment8: comments[Math.floor(Math.random() * comments.length)],
    comment9: comments[Math.floor(Math.random() * comments.length)],
    comment10: comments[Math.floor(Math.random() * comments.length)],
  }));
};