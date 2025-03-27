import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import VitePluginSitemap from "vite-plugin-sitemap";

export default defineConfig({
  plugins: [
    react(),
    VitePluginSitemap({
      hostname: "https://www.jpradiology.com",
    }),
  ],
  base: "/",
});
