<template>
  <el-menu
    :default-active="activeIndex"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
    @select="handleSelect"
  >
    <el-menu-item index="0" @click="open('home')">智慧园区管理平台</el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1" @click="open('home')">综合态势</el-menu-item>
    <el-menu-item index="2" @click="open('operation')">运营管理</el-menu-item>
    <el-menu-item index="3" @click="open('property')">物业管理</el-menu-item>
    <el-menu-item index="4" @click="open('visualization')">数据可视</el-menu-item>
    <el-menu-item index="5" @click="open('configuration')">配置中心</el-menu-item>
  </el-menu>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router';

const router = useRouter();
const activeIndex = ref('1')
// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath)
// }

// 点击事件，路由跳转
let open = name => {
  router.push({name})
}


</script>

<style>
.flex-grow {
  flex-grow: 0.3;
}
</style>
