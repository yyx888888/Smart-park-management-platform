<!-- 数据可视 -->
<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="2" class="el-menu-vertical-demo" >
          <el-menu-item index="1" >
            <el-icon><location /></el-icon>
            <span>园区驾驶舱</span>
          </el-menu-item>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>园区招商分析</span>
          </el-menu-item>
          <el-menu-item index="3" >
            <el-icon><document /></el-icon>
            <span>园区设备管理</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>能源消耗分析</span>
          </el-menu-item>
        </el-menu></el-aside>
      <el-main >

      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import {Document,Menu as IconMenu,Location,Setting} from '@element-plus/icons-vue'
</script>

<style scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 800px;
  background-color: rgb(65, 92, 133);
}
</style>