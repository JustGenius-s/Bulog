import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
      template: {
        compilerOptions: {
          isCustomElement: (tag) => tag.includes('b-'),
        }
      },
    }),
  ],
  build: {
    lib: {
      entry: ['./src/components/app/index.ts'],
      name: 'MD3-Web',
      fileName: 'md3-web',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'vue'
        }
      }
    }
  }
});
