import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  define: {
    "process.env": {},
  },
  build: {
    outDir: 'dist',  // The directory to output the build files
    assetsDir: 'assets',  // Directory where assets will go
  },
});
