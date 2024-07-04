import '@/assets/main.css';
import '@/assets/iconfont/iconfont.css';

import { createApp } from 'vue';
import App from './App.vue';

import router from './router';

import pinia from './store/pinia';
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(router);

app.use(pinia);

app.use(ElementPlus);
app.mount('#app');
