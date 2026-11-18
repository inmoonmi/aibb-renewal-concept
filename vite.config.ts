import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // GitHub Pages 주소(https://아이디.github.io/레포이름/)에 맞춰 레포 이름을 적습니다.
  // 레포 이름을 바꾸면 이 한 줄만 함께 바꾸면 됩니다.
  base: '/aibb-renewal-concept/',
  resolve: { alias: { '@': path.resolve(import.meta.dirname, 'client', 'src') } },
  root: path.resolve(import.meta.dirname, 'client'),
  publicDir: path.resolve(import.meta.dirname, 'client', 'public'),
  build: { outDir: path.resolve(import.meta.dirname, 'dist/public'), emptyOutDir: true },
  server: {
    host: true,
    allowedHosts: ['.manuspre.computer', '.manus.computer', '.manus-asia.computer', '.manuscomputer.ai', '.manusvm.computer', 'localhost', '127.0.0.1'],
    fs: { strict: true, deny: ['**/.*'] },
  },
});
