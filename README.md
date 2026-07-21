# React Auth Boilerplate

Минимальный шаблон для React-приложения с готовой аутентификацией.

## Стек

- React 19 + TypeScript  
- Vite (быстрая сборка)  
- Redux Toolkit (управление состоянием, хранение токена)  
- React Router v6 (маршрутизация, приватные страницы)  
- Ant Design (UI-компоненты)  
- CSS Modules (изолированные стили)

## Возможности

- ✅ Страница входа с валидацией  
- ✅ Приватный маршрут (доступ только после входа)  
- ✅ Хранение токена и пользователя в localStorage  
- ✅ Автоматический редирект на логин при отсутствии токена  
- ✅ Красивый интерфейс на Ant Design  

## Установка и запуск

```bash
# Клонируйте репозиторий
git clone https://github.com/wklipach/ReactFrontendLoginPassword.git

# Перейдите в папку проекта
cd ReactFrontendLoginPassword

# Установите зависимости
npm install

# Запустите в режиме разработки
npm run dev

Приложение будет доступно по адресу: http://localhost:5173
Тестовые данные

Для входа используйте:

    Логин: admin

    Пароль: admin

Структура проекта
text

src/
├── pages/
│   ├── Login.tsx
│   └── Dashboard.tsx
├── store/
│   ├── store.ts
│   └── authSlice.ts
├── styles/
│   └── global.css
├── App.tsx
└── main.tsx

Лицензия

MIT — свободно используйте в своих проектах.