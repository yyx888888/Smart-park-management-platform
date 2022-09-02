<!-- 访客信息页面 -->
<template>
  <!-- 卡片 -->
  <el-card class="box-card">
    <!-- 头部 -->
    <!-- <template #header>
      <div class="card-header">
        <span>访客信息登记</span>
        <el-button type="primary">新增</el-button>
      </div>
    </template> -->
    <!-- body -->
    <div>
      <el-row :gutter="10">
        <div></div>
        <!-- el-col 列  ：span 占几个格  一行24格 -->
        <el-col :span="5">
          <el-input
            v-model="input1"
            placeholder="请输入访客姓名"
            class="input-with-select"
          />
        </el-col>
        <span>访客类型：</span>
        <!-- 下拉框 -->
        <!-- <el-select v-model="select" placeholder="请选择" style="width: 115px">
          <el-option label="企业" value="1" />
          <el-option label="公寓" value="2" />
          <el-option label="其他" value="3" />
        </el-select>
        <span>联系方式：</span>
        <el-col :span="5">
          <el-input placeholder="请输入联系方式" class="input-with-select" />
        </el-col> -->
      </el-row>
    </div>
  </el-card>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const select = ref("");
const input1 = ref("访客姓名:");
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
}
.input-with-select .el-input-group__prepend {
  background-color: var(--el-fill-color-blank);
}
.el-row {
  display: flex;
}
</style>
