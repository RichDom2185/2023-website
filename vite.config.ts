import yaml from "@rollup/plugin-yaml";
import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

export default defineConfig({
  plugins: [solidPlugin(), yaml()],
  server: {
    port: 3000,
  },
  optimizeDeps: {
    include: ["micromark", "unified"],
  },
  build: {
    target: "esnext",
  },
});
