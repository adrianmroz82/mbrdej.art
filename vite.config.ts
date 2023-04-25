import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// import path from "path";

//todo: fix alias imports

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  resolve: {
    alias: {
      // "@animations": path.resolve(__dirname, "src/animations"),
      // "@global": path.resolve(__dirname, "src/global/"),
      // @utils
      //@assets
    },
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@import "./src/global/variables.scss";`,
  //     },
  //   },
  // },
});
