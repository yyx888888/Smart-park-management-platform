<!-- 物业整体页面 -->
<template>
  <!-- 整体布局 -->
  <el-container>
    <el-container>
      <!-- 左侧侧边栏 -->
      <el-aside width="200px">
        <el-menu
          class="el-menu-vertical-demo"
          background-color="#415c85"
          text-color="#fff"
          active-text-color="#FFFAF0"
          :default-active="activePath"
          unique-opened
          router
        >
          <!-- 物业总览一级菜单 -->
          <el-menu-item
            index="/property/totalProperty"
            @click="savNavState('/property/totalProperty')"
          >
            <template #title>
              <el-icon>
                <HomeFilled />
              </el-icon>
              <span>物业总览 </span>
            </template>
          </el-menu-item>
          <!--  循环带子菜单的一级菜单 -->

          <el-sub-menu
            :index="item.id.toString()"
            v-for="(item, index) in menuData"
            :key="item.id"
          >
            <template #title>
              <el-icon>
                <!-- 动态渲染图标 -->
                <component :is="iconList[index]"></component>
              </el-icon>
              <!-- 一级菜单文本 -->
              <span>{{ item.authName }} </span>
            </template>
            <!-- 二级菜单 循环二级菜单 -->
            <!--  添加点击事件  把路径传过去 -->
            <el-menu-item
              :index="'/property/' + childrenItem.path"
              v-for="childrenItem in item.children"
              :key="childrenItem.id"
              text-color="#fff"
              @click="savNavState('/property/' + childrenItem.path)"
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
import { reactive, ref } from "@vue/reactivity";

// 被激活的链接  从本地存储中获取
let activePath = ref(
  // 如果本地存储没有值 展示的就是物业总览页面
  window.sessionStorage.getItem("activePath") || "/property/totalProperty"
);

// 字体图标数组
// "HomeFilled"
const iconList = reactive(["Reading", "Switch", "Printer"]);

// 页面左侧菜单数据
const menuData = reactive([
  {
    id: 2,
    authName: "访客管理",
    children: [
      { id: 201, authName: "访客信息登记", path: "VisitorInfo" },
      { id: 202, authName: "访客进出记录", path: "VisitorComeGo" },
    ],
  },
  {
    id: 3,
    authName: "车辆管理",
    children: [
      { id: 301, authName: "车辆信息管理", path: "CarInfo" },
      { id: 302, authName: "车辆进出记录", path: "CarComeGo" },
    ],
  },
  {
    id: 4,
    authName: "设备管理",
    children: [
      { id: 401, authName: "智能门禁管理", path: "accessControl" },
      { id: 402, authName: "车辆道闸管理", path: "vehicleBarrier" },
      { id: 403, authName: "智能水表管理", path: "waterMeter" },
      { id: 405, authName: "充电桩管理", path: "chargingPile" },
      { id: 406, authName: "安防监控管理", path: "securityMonitor" },
      { id: 407, authName: "智能梯控管理", path: "elevatorControl" },
      { id: 408, authName: "智能消防管理", path: "fire" },
      { id: 408, authName: "源网核储管理", path: "sourceNetStorage" },
    ],
  },
]);
// 保存路径到session中 接受传过来的路径
function savNavState(activePath) {
  //传来的路径保存到本地存储
  window.sessionStorage.setItem("activePath", activePath);
  // 点击的路径赋值激活的链接
  activePath = activePath;
}
</script>

<style scoped>
.el-container {
  height: 100%;
}

.el-aside {
  background-color: #415c85;
  color: white;
}
.el-main {
  background-color: #eee;
}
.el-menu-item.is-active,
.el-sub-menu .el-menu-item.is-active {
  background-color: #026d9b !important;
  color: white;
  font-weight: bold;
}

.el-sub-menu .el-menu-item {
  color: #f2f0f6;
  font-weight: 540;
}
</style>
