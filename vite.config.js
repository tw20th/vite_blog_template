import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';

export default defineConfig({
  plugins: [preact()],
  server: {
    open: true, // サーバー起動時に自動的にブラウザが開く
  },
});
