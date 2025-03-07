import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import eslint from "vite-plugin-eslint"; // Import the plugin
import process from "node:process"; // Import process module

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), eslint()],
  define: {
    "process.env": process.env,
  },
  build: {
    outDir: "dist", // ✅ Ensures build files go inside "dist"
    emptyOutDir: true, // ✅ Cleans "dist" before building
  },
});
