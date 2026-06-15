import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// User/organization GitHub Pages site (rexardiente.github.io) is served from the
// domain root, so base stays '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
});
