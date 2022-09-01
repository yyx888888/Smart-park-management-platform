import { createRouter, createWebHashHistory } from 'vue-router'
// 引入物业管理相关的路由页面
import propertyRouter from './property'
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
        component: () => import('../views/home.vue'),
      },
      {
        path: '/configuration',
        name: 'configuration',
        component: () => import('../views/configuration.vue'),
      },
      {
        path: '/operation',
        name: 'operation',
        component: () => import('../views/operation.vue'),
      },

      {
        path: '/property',
        name: 'property',
        component: () => import('../views/property/property.vue'),
        children: [
          // 访客管理
          {
            path: '/VisitorInfo',
            component: () => import('../views/property/Visitor/VisitorInfo.vue')
          },
          {
            path: '/VisitorComeGo',
            component: () => import('../views/property/Visitor/VisitorComeGo.vue')
          },
          // 车辆管理
          {
            path: '/CarInfo',
            component: () => import('../views/property/Car/CarInfo.vue')
          },
          {
            path: '/CarComeGo',
            component: () => import('../views/property/car/CarComeGo.vue')
          },
          // 设备管理
          {
            path: '/accessControl',
            component: () => import('../views/property/device/accessControl.vue')
          },
          {
            path: '/vehicleBarrier',
            component: () => import('../views/property/device/vehicleBarrier.vue')
          },
          {
            path: '/waterMeter',
            component: () => import('../views/property/device/waterMeter.vue')
          },
          {
            path: '/chargingPile',
            component: () => import('../views/property/device/chargingPile.vue')
          },
          {
            path: '/securityMonitor',
            component: () => import('../views/property/device/securityMonitor.vue')
          },
          {
            path: '/elevatorControl',
            component: () => import('../views/property/device/elevatorControl.vue')
          },
          {
            path: '/fire',
            component: () => import('../views/property/device/fire.vue')
          },
          {
            path: '/sourceNetStorage',
            component: () => import('../views/property/device/sourceNetStorage.vue')
          }
        ]

      },
      {
        path: '/visualization',
        name: 'visualization',
        component: () => import('../views/visualization.vue')
      },

    ]
  },

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