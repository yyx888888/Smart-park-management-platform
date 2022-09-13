<template>
  <el-card class="box-card">
    <!-- 第一行 -->
    <el-row class="dataBox" :gutter="20">
      <el-col :span="6" v-for="item in data" :key="item.id">
        <div>
          <p>{{ item.title }}</p>
          <p class="text">
            <span class="total">
              <!-- 正则替换千位加逗号 -->
              {{ item.total.replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}
            </span>
            <el-link type="primary" :underline="false">查看></el-link>
          </p>
        </div>
      </el-col>
    </el-row>
    <!-- 第二行 两个echart -->
    <el-row class="secondRow" :gutter="20">
      <el-col :span="6">
        <el-container>
          <el-header>设备分类占比</el-header>
          <el-main style="padding: 20px;">
            <!-- 设备分类占比饼形图 -->
            <deviceEchartVue />
          </el-main>
        </el-container>
      </el-col>
      <el-col :span="18">
        <el-container>
          <el-header>
            <el-row justify="space-between">
              <el-col :span="17">
                <el-menu default-active="1" class="el-menu-demo" mode="horizontal" style="width:100%">
                  <el-menu-item index="1">物业缴费</el-menu-item>
                  <el-menu-item index="2">公共资源</el-menu-item>
                  <el-menu-item index="3">车辆缴费</el-menu-item>
                  <el-menu-item index="4">水电缴费</el-menu-item>
                </el-menu>
              </el-col>
              <span>统计频度： </span>
              <el-col :span="4">
                <el-select class="m-2" v-model="select" style="width: 100%">
                  <el-option label="年度" value="year" />
                  <el-option label="月度" value="monthly" />
                  <el-option label="季度" value="quarter" />
                </el-select>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <!-- 缴费 柱状图 -->
            <pagarEchart />
          </el-main>
        </el-container>
      </el-col>
    </el-row>
    <!-- 第三行 -->
    <el-row class="secondRow" :gutter="20">
      <el-col :span="10">
        <el-container>
          <el-header>设备报错原因分析</el-header>
          <el-main>
            <!-- 设备报错原因分析 -->
            <errorEchart />
          </el-main>
        </el-container>
      </el-col>
      <el-col :span="14">
        <el-container>
          <el-header>
            <el-row justify="space-between">
              <el-col :span="15">设备报错次数统计 </el-col>
              <span>统计频度： </span>
              <el-col :span="5">
                <el-select class="m-2" v-model="select" style="width: 100%">
                  <el-option label="年度" value="year" />
                  <el-option label="月度" value="monthly" />
                  <el-option label="季度" value="quarter" />
                </el-select>
              </el-col>
            </el-row>
          </el-header>
          <el-main>
            <!-- 设备报错次数统计 -->
            <statistics />
          </el-main>
        </el-container>
      </el-col>
    </el-row>
  </el-card>
</template>
<script setup>
import { reactive, ref } from "@vue/reactivity";
import deviceEchartVue from "../../components/propertyEchart/deviceEchart.vue";
import pagarEchart from "../../components/propertyEchart/pagarEchart.vue";
import errorEchart from "../../components/propertyEchart/errorEchart.vue";
import statistics from "../../components/propertyEchart/statistics.vue";
import { onMounted } from "vue";



const data = reactive([
  {
    id: 1,
    title: "正常运行设备（台）",
    total: "1354",
  },
  {
    id: 2,
    title: "年度累计缴费（元）",
    total: "638945.43",
  },
  {
    id: 3,
    title: "今日进出人数（人）",
    total: "5388",
  },
  {
    id: 4,
    title: "今日进出车辆（辆）",
    total: "469",
  },
]);
let select = ref("");
</script>

<style lang="scss" scoped>
.box-card {
  .dataBox {
    .el-col {
      div {
        border: 1px solid rgba(215, 215, 215, 1);
        height: 100px;
        padding: 10px 10px 50px 10px;

        .total {
          font-weight: 500;
          font-style: normal;
          font-size: 30px;
        }

        .text {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
        }
      }
    }
  }

  .secondRow {
    margin-top: 10px;

    .el-container {
      border: 1px solid rgba(215, 215, 215, 1);

      .el-header {
        border-bottom: 1px solid rgba(215, 215, 215, 1);
        height: 60px;
        line-height: 60px;
        font-size: 14px;

        .el-menu--horizontal {
          border-bottom: none;
        }
      }
    }
  }
}
</style>
