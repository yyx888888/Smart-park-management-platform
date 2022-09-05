<template>
  <div>
    <VChart class="chart" :option="option"/>
  </div>

</template>

<script>
import VChart from "vue-echarts";
import { ref } from "vue";

export default ({
  components: {
    VChart
  },
  setup: () => {
    const option = ref({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['煤', '气', '油', '电', '热'],
        textStyle:{
          color:'#fff'
        },
        lineHeight: 56
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          boundaryGap: false,
          data: ['0', '4', '8', '12', '18', '24']
        }
      ],
      yAxis: [
        {
          type: 'value',
          splitLine:{ //修改背景线条样式
            show:true,//是否展示
            lineStyle:{
              color:"rgb(15,19,35,0.2)",//线条颜色
            }
          }
        }
      ],

      series: [
        {
          name: '煤',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [120, 132, 101, 134, 90, 230]
        },
        {
          name: '气',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [220, 182, 191, 234, 290, 330]
        },
        {
          name: '油',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [150, 232, 201, 154, 190, 330]
        },
        {
          name: '电',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [320, 332, 301, 334, 390, 330]
        },
        {
          name: '热',
          type: 'line',
          stack: 'Total',
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {},
          emphasis: {
            focus: 'series'
          },
          data: [820, 932, 901, 934, 1290, 1330]
        }
      ]
    });
    return { option };
  }
})
</script>

<style scoped>
.chart {
  height: 250px;

}
</style>