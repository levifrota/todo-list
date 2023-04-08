import { createApp } from 'vue'
import App from './App.vue'
import 'spectre.css/dist/spectre.css'
import 'spectre.css/dist/spectre-icons.min.css'
import router from './router'

createApp(App).use(router).mount('#app')
