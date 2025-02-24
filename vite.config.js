import { defineConfig } from "vite"; // Importa defineConfig si no lo estás usando
import react from "@vitejs/plugin-react"; // Si estás usando React
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()], // Agrega los plugins que estés usando
  server: {
    proxy: {
      "/api": {
        target: "https://api.football-data.org/v4",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});