import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ["**/*.pdf"],
  build: {
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@/components": path.resolve(__dirname, "src/components"),
      "@/ui": path.resolve(__dirname, "src/components/ui"),
      "@/lib": path.resolve(__dirname, "src/lib"),
      "@/hooks": path.resolve(__dirname, "src/hooks"),
      "@/pages": path.resolve(__dirname, "src/pages"),
      "@/constants": path.resolve(__dirname, "src/constants"),
      "@/assets": path.resolve(__dirname, "src/assets"),
      "@/utils": path.resolve(__dirname, "src/utils"),
      "@/contexts": path.resolve(__dirname, "src/contexts"),
      "@/apis": path.resolve(__dirname, "src/apis"),
    },
  },
});
