import { defineConfig } from "vite";

export default defineConfig({
  server: {
    open: "/src/index.html",
    watch: {
      ignored: ["!**/node_modules/**"],
    },
    port: 3030,
  },
});
