import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes("b-"),
        },
      },
    }),
    Unocss({
      mode: 'shadow-dom'
    }),
  ],
  build: {
    lib: {
      entry: ["./src/components/app/index.ts"],
      name: "MD3-Web",
      fileName: "md3-web",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "vue",
        },
      },
    },
  },
});
