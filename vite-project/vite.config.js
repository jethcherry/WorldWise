import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

export default defineConfig({
  plugins: [
    react(),
    eslint({
      fix: true,
      extensions: ["js", "jsx", "ts", "tsx"],
      overrideConfig: {
        rules: {
          "react/prop-types": "off",
        },
      },
    }),
  ],
});
