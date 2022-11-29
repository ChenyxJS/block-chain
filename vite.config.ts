import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { svgBuilder } from "./src/utils/svgBuilder"
import path from 'path'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),svgBuilder('./src/assets/svg/')],
  resolve:{
    alias:{
      '@': path.resolve(__dirname,'src')
    }
  }
})
