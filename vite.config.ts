import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/readmore-toggle-reactjs/", // YOUR REPO NAME
  plugins: [react()],
});
