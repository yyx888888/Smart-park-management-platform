<template>
  <el-container>
    <el-header>
      <div class="title">
        <span class="headerimg"></span>
        <span class="headerTitle">车辆进出记录</span>
      </div>
      <span>
        <el-button type="primary">导出</el-button>
        <el-button type="warning">批量删除</el-button>
      </span>
    </el-header>
    <el-main>
      <!-- 搜索表单 -->
      <div class="searchForm">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="车辆号码">
            <el-input placeholder="请输入车辆号码" />
          </el-form-item>
          <el-form-item label="进出时间">
            <el-input placeholder="请输入进出时间" />
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
        <el-table-column prop="carNum" label="车辆号码" />
        <el-table-column prop="carModel" label="车辆型号" />
        <el-table-column prop="name" label="车主姓名" />
        <el-table-column prop="phone" label="联系方式" />
        <el-table-column prop="carType" label="车辆类型" />
        <el-table-column prop="inOut" label="进出方向" />
        <el-table-column prop="date" label="进出时间" />
        <el-table-column label="操作">
          <template #default>
            <el-link :underline="false">删除</el-link>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页组件 -->
      <MyPaginationVue></MyPaginationVue>
    </el-main>
  </el-container>
</template>

<script setup>
import MyPaginationVue from "../../../components/MyPagination.vue";
const tableData = [];

for (let i = 0; i < 8; i++) {
  tableData.push({
    carNum: "浙A12345",
    carModel: "阿斯顿·马丁2012款 6.0L 手自一体",
    name: "张兰",
    phone: 135124563225,
    carType: "车辆类型",
    inOut: "进场",
    date: "2022-02-23",
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
}
.el-form {
  display: flex;
  justify-content: space-between;
}
</style>
