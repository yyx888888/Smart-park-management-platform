import { createRouter, createWebHashHistory } from 'vue-router'
import visualizationRouter from './visualization'
const manageroutes = [
   {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login.vue'),
   },
    {
        path: '/',
        name: '/',
        component: () => import('../layout/index.vue'),
        children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('../views/home/home.vue'),
      },
      {
         path: '/configuration',
         name: 'configuration',
         component: () => import('../views/configuration.vue'),
      },
      {
         path: '/operation',
         name: 'operation',
         component: () => import('../views/operation.vue')
      }, 
      {
         path: '/property',
         name: 'property',
         component: () => import('../views/property.vue')
      },
      {
         path: '/visualization',
         name: 'visualization',
         redirect: '/ParkCockpit',
         component: () => import('../views/visualization/visualization.vue'),
          children:[
              ...visualizationRouter
          ]
      },
 ]},
]

// 哈希路由
const router = createRouter({
   // 路由模式
 history: createWebHashHistory(),
 routes: manageroutes,
}) 
/**

- 输出对象
   */
  export default router;