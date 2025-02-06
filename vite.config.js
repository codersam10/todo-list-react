import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: [
        "favicon.ico",
        "favicon-32x32.png",
        "favicon-16x16.png",
        "apple-touch-icon.png",
        "android-chrome-192x192.png",
        "android-chrome-512x512.png",
        "android-chrome-192x192-square.png",
        "android-chrome-512x512-square.png",
        "",
      ],
      manifest: {
        name: "Offline ToDoList",
        short_name: "Tasks",
        description: "A todo list webapp with offline support",
        theme_color: "hsl(248, 100%, 68%)",
        display_override: ["standalone", "minimal-ui", "browser"],
        display: "standalone",
        id: "/todo-list-react/",
        start_url: "/todo-list-react/",
        background_color: "hsl(0, 0%, 85%)",
        scope: "/todo-list-react/",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "android-chrome-192x192-square.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "maskable",
          },
          {
            src: "android-chrome-512x512-square.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
        screenshots: [
          {
            src: "screenshot-wide.png",
            sizes: "2880x1406",
            type: "image/png",
            platform: "web",
            form_factor: "wide",
          },
          {
            src: "screenshot-mobile.png",
            sizes: "850x1405",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  base: "/todo-list-react/",
});
