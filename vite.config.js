import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "build",
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: "v8",
      reporter: ["text", "html"],
      exclude: [
        "**/*.css",
        "src/constants/**",
        "src/components/common/animations.jsx", // Animations are visual and hard to test coverage for
        "src/main.jsx", // Root entry point
      ],
    },
  },
});
