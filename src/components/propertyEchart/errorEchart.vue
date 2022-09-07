<template>
  <!-- 设备分类占比饼形图 -->
  <div class="echart" ref="chart"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "vue";
var data = [220, 182, 191, 234, 290, 120, 65, 444];
var barWidth = 20;
var maxNum = 0;
for (var i = 0; i < data.length; i++) {
  if (data[i] > maxNum) {
    maxNum = data[i];
  }
}
// echarts
//1.通过vue3.x中的refs标签用法，获取到container容器实例
const chart = ref(null);
//2.定义在本vue实例中的echarts实例
let myEcharts = reactive({});
//4.定义好echarts的配置数据
let option = {
  grid: {
    top: "10%",
    left: "20%",
    right: "10%",
    bottom: "0%",
  },

  xAxis: {
    show: false,
  },
  yAxis: {
    data: data.map((item, index) => `data ${index}`),
    splitLine: {
      show: false,
    },
    axisLabel: {
      textStyle: { fontSize: "80%", color: "#02afff" },
    },
    axisLine: {
      show: false,
    },
    axisTick: false,
  },
  series: [
    {
      type: "bar",
      barWidth: barWidth,
      zlevel: 2,
      data: data.map(function (item) {
        return {
          value: item,
          maxNum: maxNum,
        };
      }),
      label: {
        show: true,
        position: "inside",
        // distance: 80,
        align: "center",
        formatter: function (params) {
          // return params.data.realValue;
          var percent =
            Number((params.data.value / params.data.maxNum) * 100).toFixed(2) +
            "%";
          return percent;
        },
        color: "#fff",
        fontSize: 12,
      },
      itemStyle: {
        borderRadius: 10,
        color: new echarts.graphic.LinearGradient(0, 1, 1, 1, [
          { offset: 0, color: "#395CFE" },
          { offset: 1, color: "#2EC7CF" },
        ]),
      },
    },
    {
      type: "bar",
      barWidth: barWidth,
      barGap: "-100%",
      data: data.map(function (item) {
        return {
          realValue: item,
          value: maxNum,
        };
      }),
      label: {
        show: true,
        position: "right",
        distance: 80,
        align: "right",
        formatter: function (params) {
          return params.data.realValue + " 件";
        },
        color: "#02afff",
        fontSize: 18,
      },
      itemStyle: {
        borderRadius: 10,
        color: "rgba(3,169,244, 0.5)",
      },
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
