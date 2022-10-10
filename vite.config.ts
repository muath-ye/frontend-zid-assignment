import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs';

const hash = Math.floor(Math.random() * 90000) + 10000;
// const host = 'credit-card-challenge.test';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: { // [!tl add]
  //   host, // [!tl add]
  //   hmr: { host }, // [!tl add]
  //   https: { // [!tl add]
  //     key: fs.readFileSync(`C:/Users/Administrator/.config/valet/Certificates/${host}.key`), // [!tl add]
  //     cert: fs.readFileSync(`C:/Users/Administrator/.config/valet/Certificates/${host}.crt`), // [!tl add]
  //   }, // [!tl add]
  // }, // [!tl add]
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `asset/[name]` + hash + `.js`,
        chunkFileNames: `asset/[name]` + hash + `.js`,
        assetFileNames: `asset/[name]` + hash + `.[ext]`
      }
    }
  }
})
