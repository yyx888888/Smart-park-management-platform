<template>
  <el-container>
    <el-header>
      <div class="title">
        <span class="headerimg"></span>
        <span class="headerTitle">访客信息登记</span>
      </div>
      <span>
        <el-button type="primary" @click="toAdd">新增 </el-button>
        <el-button type="warning">批量删除</el-button>
      </span>
    </el-header>
    <el-main>
      <!-- 搜索表单 -->
      <div class="searchForm">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="访客姓名：">
            <el-input placeholder="请输入访客姓名" />
          </el-form-item>
          <el-form-item label="访客类型">
            <el-select>
              <el-option label="企业" value="enterprise" />
              <el-option label="公寓" value="apartment" />
              <el-option label="其他" value="other" />
            </el-select>
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input placeholder="请输入联系方式" />
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
        <el-table-column prop="name" label="访客姓名" />
        <el-table-column prop="phone" label="联系方式" />
        <el-table-column prop="type" label="造访类型" />
        <el-table-column prop="company" label="造访单位" />
        <el-table-column prop="driveCar" label="是否驾车" />
        <el-table-column prop="carNum" label="车牌号码" />
        <el-table-column prop="date" label="造访结束时间" />
        <el-table-column label="操作">
          <template v-slot="scope">
            <!--        把父标签的内容传递到方法内 -->
            <el-link :underline="false" @click="open(scope.row)">详情</el-link>
            <el-link :underline="false" style="margin-left: 50px">删除</el-link>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页组件 -->
      <MyPaginationVue></MyPaginationVue>
    </el-main>
  </el-container>
</template>

<script setup>
import { useRouter } from "vue-router";
import MyPaginationVue from "../../../components/MyPagination.vue";
// 使用路由
const $router = useRouter();
function toAdd() {
  $router.replace({ path: "/property/VisitorInfo/addVisitor" });
}
const tableData = [
  {
    name: "张旭",
    phone: 18767256412,
    type: "企业",
    company: "杭州久碳科技有限公司",
    driveCar: "是",
    carNum: "陕G12345",
    date: "2022-01-23",
  },
  {
    name: "张兰",
    phone: 135124563225,
    type: "个人",
    company: "杭州阿里巴巴有限公司",
    driveCar: "是",
    carNum: "浙A12345",
    date: "2022-02-23",
  },
];
let i;
for (i = 0; i < 8; i++) {
  tableData.push({
    name: "张兰",
    phone: 135124563225,
    type: "个人",
    company: "杭州阿里巴巴有限公司",
    driveCar: "是",
    carNum: "浙A12345",
    date: "2022-02-23",
  });
}
// 打开详情页 接收传过来的参数
function open(row) {
  console.log("这一行的信息", row);
  $router.push({
    name: "VisitorDetails",
    // 参数传过去
    params: {
      //  独享转换为字符串
      rowData: JSON.stringify(row),
    },
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
