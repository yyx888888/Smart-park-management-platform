<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import Header from "../components/header.vue";
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.common-layout,
.el-container {
  width: 100%;
  height: 100%;
}
</style>
