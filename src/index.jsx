import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // Appコンポーネントをインポート
import './index.css';   // 必要に応じて追加

// ReactアプリケーションをブラウザのDOMにレンダリング
const root = ReactDOM.createRoot(document.getElementById('root')); // public/index.html内のroot要素
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
  );
