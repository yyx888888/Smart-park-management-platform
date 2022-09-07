// 物业管理页面相关的路由
export default [
  // 物业总览
  {
    path: '/totalProperty',
    component: () => import('../views/property/totalProperty.vue')
  },
  // 访客管理
  {
    path: '/VisitorInfo',
    component: () => import('../views/property/Visitor/VisitorInfo.vue')
  },
  {
    path: '/VisitorComeGo',
    component: () => import('../views/property/Visitor/VisitorComeGo.vue')
  },
  {
    path: '/addVisitor',
    component: () => import('../views/property/Visitor/addVisitor.vue')

  },
  // 车辆管理
  {
    path: '/CarInfo',
    component: () => import('../views/property/Car/CarInfo.vue')
  },
  {
    path: '/CarComeGo',
    component: () => import('../views/property/Car/CarComeGo.vue')
  },
  // 设备管理
  {
    path: '/accessControl',
    redirect: '/DeviceList',
    component: () => import('../views/property/device/accessControl.vue'),

    children: [
      // 设备管理下面3个子页面的路由
      {
        path: '/DeviceList',
        component: () => import('../views/property/device/Submenu/DeviceList.vue')
      },
      {
        path: '/AlarmRecord',
        component: () => import('../views/property/device/Submenu/AlarmRecord.vue')
      },
      {
        path: '/Operations',
        component: () => import('../views/property/device/Submenu/Operations.vue')
      }
    ]
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

