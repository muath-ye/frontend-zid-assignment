import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import fs from 'fs';

const host = 'credit-card-challenge.test';

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
})
