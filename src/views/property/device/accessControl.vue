<template>
  <el-container>
    <el-header>
      <div class="title">
        <span class="headerimg"></span>
        <span class="headerTitle">智能门禁管理</span>
      </div>
      <!-- 只有页面是设备列表时才展示按钮 -->
      <span v-if="currentPath2 === 'DeviceList'">
        <el-button type="primary">新增</el-button>
        <el-button type="warning">批量删除</el-button>
      </span>
    </el-header>
    <el-main>
      <el-menu
        class="el-menu-demo"
        mode="horizontal"
        router
        :default-active="currentPath"
      >
        <el-menu-item index="DeviceList">设备列表</el-menu-item>
        <el-menu-item index="AlarmRecord">告警记录</el-menu-item>
        <el-menu-item index="Operations">运维记录</el-menu-item>
      </el-menu>

      <!-- 子页面显示的位置 -->
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";
// 使用路由
const route = useRoute();
const $router = useRouter();
//    获取当前的路由路径 并且把前面的/去掉
let currentPath = ref($router.currentRoute.value.path.slice(1));
let currentPath2 = ref("1");

// 监听路径的变化主要是为了隐藏 新增和批量删除按钮
watch(
  () => route.path,
  (newPath) => {
    currentPath2.value = newPath.slice(1);
  },
  // 初始执行一次
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.el-container {
  background-color: #fff;
  .el-header {
    border-bottom: 10px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 55px 0 35px;

    .title {
      height: 100%;
      display: flex;
      align-items: center;

      .headerTitle {
        font-size: 20px;
        font-weight: 700;
        margin-left: 30px;
      }

      .headerimg {
        display: inline-block;
        width: 10px;
        height: 28px;
        background-color: rgba(72, 110, 231, 0.87843137254902);
      }
    }
  }
}
</style>
