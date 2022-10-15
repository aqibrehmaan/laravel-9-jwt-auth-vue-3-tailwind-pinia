import axios from 'axios';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router';

import './style.css'
import App from './App.vue'

axios.defaults.baseURL = "http://127.0.0.1:8000";

const pinia = createPinia()
const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');
