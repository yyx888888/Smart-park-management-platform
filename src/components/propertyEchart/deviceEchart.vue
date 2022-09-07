<template>
  <!-- 设备分类占比饼形图 -->
  <div class="echart" ref="chart"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "vue";
// echarts
//1.通过vue3.x中的refs标签用法，获取到container容器实例
const chart = ref(null);
//2.定义在本vue实例中的echarts实例
let myEcharts = reactive({});
//4.定义好echarts的配置数据
let option = {
  tooltip: {
    trigger: "item",
  },
  legend: {
    top: "5%",
    left: "center",
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      label: {
        normal: {
          show: true,
          position: "center",
          color: "#4c4a4a",
          formatter: () => `<h1>设备总数</h1>`,
          rich: {
            total: {
              fontSize: 35,
              fontFamily: "微软雅黑",
              color: "#454c5c",
            },
          },
        },
      },
      data: [
        { value: 1048, name: "人脸面板" },
        { value: 735, name: "车辆道闸" },
        { value: 580, name: "智能电表" },
        { value: 484, name: "视频监控" },
      ],
    },
  ],
};
//onMounted钩子函数
onMounted(() => {
  //初始化echarts
  init();
});

//初始化echarts实例方法
const init = () => {
  //3.初始化container容器
  myEcharts = echarts.init(chart.value);
  //5.传入数据
  myEcharts.setOption(option);
  //additional：图表大小自适应窗口大小变化
  window.onresize = () => {
    myEcharts.resize();
  };
};
</script>

<style scoped>
.echart {
  box-sizing: border-box;
  height: 260px;
  margin: 0 auto;
}
</style>
