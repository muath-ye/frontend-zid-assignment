import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import router from './router/web'
import './tailwind.css'

createApp(App).use(router).mount('#app')
