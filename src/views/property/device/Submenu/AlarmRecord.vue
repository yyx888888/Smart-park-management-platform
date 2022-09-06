<template>
  <!-- 搜索表单 -->
  <div class="searchForm">
    <el-form :inline="true" class="demo-form-inline">
      <el-form-item label="设备名称">
        <el-input placeholder="请输入设备名称" />
      </el-form-item>
      <el-form-item label="设备编号：">
        <el-input placeholder="请输入设备编号" />
      </el-form-item>
      <el-form-item label="告警类型：">
        <el-select>
          <el-option label="设备故障" value="enterprise" />
          <el-option label="告警事件" value="apartment" />
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary">查询</el-button>
        <el-button>重置</el-button>
      </el-form-item>
    </el-form>
  </div>

  <!-- 表格 -->
  <el-table :data="tableData" style="width: 100%" border>
    <!-- 多选框 -->
    <el-table-column type="selection" />
    <el-table-column prop="name" label="设备名称" />
    <el-table-column prop="num" label="设备编号" />
    <el-table-column prop="location" label="告警位置" />
    <el-table-column prop="alarmContent" label="告警内容" />
    <el-table-column prop="alertType" label="告警类型" />
    <el-table-column prop="dispositionStatus" label="处置状态" />
    <el-table-column prop="alarmTime" label="告警时间" />
    <el-table-column label="操作">
      <template #default>
        <el-link :underline="false">详情</el-link>
        <el-link :underline="false" style="float: right">派单or删除</el-link>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页组件 -->
  <MyPaginationVue></MyPaginationVue>
</template>

<script setup>
import MyPaginationVue from "../../../../components/MyPagination.vue";
const tableData = [];
for (let i = 0; i < 8; i++) {
  tableData.push({
    name: "围墙门禁",
    num: "ISIS-MJ-400",
    location: "A1幢右边地面围墙",
    alarmContent: "体温38.5℃，超阈值",
    alertType: "设备故障",
    dispositionStatus: "已派单",
    alarmTime: "2022-02-23",
  });
}
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

.searchForm {
  border: 1px solid #000;
  padding: 20px 30px 0;
  border-radius: 10px;
  margin-bottom: 20px;
  margin-top: 1%;
}
.el-form {
  display: flex;
  justify-content: space-between;
}
</style>
