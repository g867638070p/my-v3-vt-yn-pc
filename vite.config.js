import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [vue()],
   resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', '.json', '.vue'],
      alias: {
         '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
   },
   css: {
      // 配置 CSS 预处理器
      preprocessorOptions: {
         scss: {
            // 这里添加sass-loader的特定配置
            additionalData: `@import "@/assets/style/global_variables.scss";`,
         },
      },
   },
});
