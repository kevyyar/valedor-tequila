import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import imageminPlugin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [
    react(),
    imageminPlugin({
      // You can configure the plugin options here, e.g.:
      gifsicle: {
        optimizationLevel: 7,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 7,
      },
      mozjpeg: {
        quality: 20,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: "removeViewBox",
            active: false,
          },
          {
            name: "removeDimensions",
            active: true,
          },
        ],
      },
    }),
  ],
});
