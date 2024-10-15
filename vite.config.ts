import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/readmore-toggle-reactjs/", // YOUR REPO NAME HERE
  plugins: [react()],

  // Use a Local Proxy: If you don’t control the server, you can set up a local proxy to handle the CORS issue. In your vite.config.js, you can configure a proxy:
  // server: {
  //   proxy: {
  //     "/api": {
  //       target: "https://course-api.com",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
});
