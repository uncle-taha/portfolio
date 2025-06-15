import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      // Add these Babel options for better JSX handling
      babel: {
        plugins: [
          ["@babel/plugin-transform-react-jsx", { runtime: "automatic" }],
        ],
      },
    }),
  ],
  build: {
    sourcemap: true, // Good for debugging
    minify: "terser", // Explicitly set minifier
    cssMinify: true, // Minify CSS
    target: "esnext", // Modern browser targeting
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name]-[hash][extname]", // Better asset handling
      },
    },
  },
  css: {
    postcss: {
      plugins: [
        require("postcss-100vh-fix"), // Fixes mobile viewport issues
        require("postcss-viewport-height-correction"), // Helps with vh units
      ],
    },
  },
  server: {
    host: true, // Allow network access
    port: 3000,
  },
  preview: {
    host: true,
    port: 3000,
  },
});
