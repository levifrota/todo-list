import { createApp } from 'vue'
import App from './App.vue'
import 'spectre.css/dist/spectre.css'
import 'spectre.css/dist/spectre-icons.min.css'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
