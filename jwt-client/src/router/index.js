
import { createRouter, createWebHistory } from 'vue-router';

import Welcome from '../pages/welcome.vue';
import Login from '../pages/auth/login.vue';
import Register from '../pages/auth/register.vue';
import Logout from '../pages/auth/logout.vue';
import Dashboard from '../pages/dashboard.vue';

const routes = [
    { path: '/', name: 'welcome', component: Welcome },
    { path: '/login', name: 'login', component: Login },
    { path: '/register', name: 'register', component: Register },
    { path: '/logout', name: 'logout', component: Logout },
    { path: '/dashboard', name: 'dashboard', component: Dashboard }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router