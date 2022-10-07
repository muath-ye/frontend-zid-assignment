import { createRouter, createWebHistory } from 'vue-router'
import Profile from '../views/Profile.vue'
import CreditCard from '../views/CreditCard.vue'

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

export default router