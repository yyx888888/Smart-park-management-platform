<!-- 数据可视 -->
<template>
  <!-- 整体布局 -->
  <el-container>
      <!-- 左侧侧边栏 -->
      <el-aside width="200px">
        <el-menu
            class="el-menu-vertical-demo"
            background-color="#415c85"
            text-color="#fff"
            active-text-color="#FFFAF0"
            default-active="ParkCockpit"
            unique-opened
            router
        >
          <el-menu-item index="ParkCockpit">
            <template #title>
              <el-icon><Operation /></el-icon>
              <span>园区驾驶舱</span>
            </template>
          </el-menu-item>
          <el-menu-item index="AttractionAnalysis">
            <template #title>
              <el-icon><WarnTriangleFilled /></el-icon>
              <span>园区招商分析</span>
            </template>
          </el-menu-item>
          <el-menu-item index="DeviceManagement">
            <template #title>
              <el-icon><Present /></el-icon>
              <span>园区设备管理</span>
            </template>
          </el-menu-item>
          <el-menu-item index="EnergyConsumption">
            <template #title>
              <el-icon><OfficeBuilding /></el-icon>
              <span>能源消耗分析</span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <!-- 右侧内容 -->
      <el-main>
        <!-- 页面右侧视图 -->
        <router-view></router-view>
      </el-main>
  </el-container>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
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
  background-color: #026d9b;
  color: white;
  font-weight: bold;
}
.el-sub-menu .el-menu-item {
  color: #f2f0f6;
  font-weight: 540;
}
</style>