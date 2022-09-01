<!-- 物业整体页面 -->
<template>
  <!-- 整体布局 -->
  <el-container>
    <el-container>
      <!-- 左侧侧边栏 -->
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#415c85"
          text-color="#fff"
          active-text-color="#FFFAF0"
          unique-opened
          router
        >
          <!-- 一级菜单  循环一级菜单 -->
          <el-sub-menu
            :index="item.id.toString()"
            v-for="(item, index) in menuData"
            :key="item.id"
          >
            <template #title>
              <!-- 一级菜单图标 -->
              <svg class="icon" aria-hidden="true">
                <!-- 动态绑定自菜单图标的类 -->
                <use :xlink:href="iconClasss[index]"></use>
              </svg>

              <!-- 一级菜单文本 -->
              <span>{{ item.authName }} </span>
            </template>
            <!-- 二级菜单 循环二级菜单 -->
            <el-menu-item
              :index="childrenItem.path"
              v-for="childrenItem in item.children"
              :key="childrenItem.id"
            >
              <span>{{ childrenItem.authName }}</span>
            </el-menu-item>
          </el-sub-menu>
        </el-menu>
      </el-aside>
      <!-- 右侧内容 -->
      <el-main>
        <!-- 页面右侧视图 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { reactive } from "@vue/reactivity";

// 左侧菜单图标
const iconClasss = reactive([
  "#icon-home",
  "#icon-book",
  "#icon-iconfontqiche",
  "#icon-xinhao-02",
]);

// 页面左侧菜单数据
const menuData = reactive([
  {
    id: 1,
    authName: "物业总览",
  },
  {
    id: 2,
    authName: "访客管理",
    children: [
      { id: 201, authName: "访客信息登记", path: "/VisitorInfo" },
      { id: 202, authName: "访客进出记录", path: "/VisitorComeGo" },
    ],
  },
  {
    id: 3,
    authName: "车辆管理",
    children: [
      { id: 301, authName: "车辆信息管理", path: "/CarInfo" },
      { id: 302, authName: "车辆进出记录", path: "/CarComeGo" },
    ],
  },
  {
    id: 4,
    authName: "设备管理",
    children: [
      { id: 401, authName: "智能门禁管理", path: "/accessControl" },
      { id: 402, authName: "车辆道闸管理", path: "/vehicleBarrier" },
      { id: 403, authName: "智能水表管理", path: "/waterMeter" },
      { id: 405, authName: "充电桩管理", path: "/chargingPile" },
      { id: 406, authName: "安防监控管理", path: "/securityMonitor" },
      { id: 407, authName: "智能梯控管理", path: "/elevatorControl" },
      { id: 408, authName: "智能消防管理", path: "/fire" },
      { id: 408, authName: "源网核储管理", path: "/sourceNetStorage" },
    ],
  },
]);
</script>

<style scoped>
.icon {
  width: 3em;
  height: 1.4em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.el-container {
  height: 100%;
}

.el-aside {
  background-color: #415c85;
  color: white;
}
.el-main {
  margin: 0;
  padding: 0;
  background-color: #eee;
}
</style>
