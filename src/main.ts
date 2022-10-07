import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Profile from './views/Profile.vue'
import CreditCard from './views/CreditCard.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Profile
        },
        {
            path: '/profile',
            component: Profile
        },
        {
            path: '/credit-card',
            component: CreditCard
        }
    ]
})

createApp(App).use(router).mount('#app')
