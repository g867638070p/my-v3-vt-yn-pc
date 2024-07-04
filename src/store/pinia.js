import { createPinia } from 'pinia';
// import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import persist from 'pinia-plugin-persist';

// 其他store...

const pinia = createPinia();
pinia.use(persist);
// 安装其他store...

export default pinia;
