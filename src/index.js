import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Найдите ваш корневой элемент
const rootElement = document.getElementById('root');

// Создайте корневой узел с использованием createRoot
const root = ReactDOM.createRoot(rootElement);

// Используйте root.render для рендеринга приложения
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);