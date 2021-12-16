import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/'
import 'normalize.css'
import './assets/styles/common.less'

// use：让当前项目使用路由模块进行路由管理
createApp(App).use(router).mount('#app')
