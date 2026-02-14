import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
        impressum: path.resolve(__dirname, 'impressum.html'),
        datenschutz: path.resolve(__dirname, 'datenschutz.html'),
        jobs: path.resolve(__dirname, 'jobs.html'),
      },
    },
  },
});
