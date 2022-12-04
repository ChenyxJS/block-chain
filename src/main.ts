/*
 * @Author: chenyx
 * @Date: 2022-11-29 15:45:22
 * @LastEditors: Do not edit
 * @LastEditTime: 2022-12-05 02:02:55
 * @FilePath: /block-chain/src/main.ts
 */
import { createApp } from 'vue'
import '@/style/style.css'
import App from './App.vue'
import '@/utils/flexible'
import 'amfe-flexible/index.js'

import SvgIcon from "@/components/SvgIcon.vue";

const app = createApp(App)
app.component('svg-icon',SvgIcon)
app.mount('#app')
