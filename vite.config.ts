import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PortfolioBruna/', // Coloque o nome do seu repositório aqui
  plugins: [react()],
});
