<!-- 访客信息页面 -->
<template>
  <!-- 卡片 -->
  <el-card class="box-card">
    <!-- 头部 -->
    <template #header>
      <div class="card-header">
        <span>访客信息登记</span>
        <el-button type="primary">新增</el-button>
      </div>
    </template>
    <!-- body -->
    <div>
      <el-row :gutter="10">
        <!-- el-col 列  ：span 占几个格  一行24格 -->
        <el-row :span="6">
          <span>访客姓名：</span>
        </el-row>
        <el-col :span="6">
          <el-input placeholder="请输入访客姓名" class="input-with-select" />
        </el-col>
        <!-- <el-col :span="5">
          <el-button type="primary">添加用户</el-button>
        </el-col> -->
      </el-row>
    </div>
  </el-card>
</template>

<script></script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
}
</style>
