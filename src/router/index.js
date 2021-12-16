import { createRouter, createWebHashHistory } from 'vue-router'

import Layout from '@/views/Layout.vue'
import Home from '@/views/Home/index.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      paths: '/',
      component: Layout,
      // 添加嵌套路由，用于渲染首页
      children: [
        {
          path: '/home',
          component: Home
        }
      ]
    }
  ]
})

export default router
