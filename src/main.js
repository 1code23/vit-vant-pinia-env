import 'vant/es/toast/style';
import 'vant/es/dialog/style';

import './assets/main.css'
import './assets/iconfont/iconfont.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
const app = createApp(App)

// 使用piniaPluginPersistedstate持久化存储pinia数据
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)

// app.use(createPinia())
app.use(router)

app.mount('#app')
