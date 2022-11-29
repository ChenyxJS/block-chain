import { createApp } from 'vue'
import '@/style/style.css'
import App from './App.vue'
import '@/utils/flexible'

import SvgIcon from "@/components/SvgIcon.vue";

const app = createApp(App)
app.component('svg-icon',SvgIcon)
app.mount('#app')
