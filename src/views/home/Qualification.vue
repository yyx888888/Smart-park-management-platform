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
      legend: {
        textStyle:{
          color:'#fff'
        }
      },
      tooltip: {},
      dataset: {
        source: [
          ['product', '科技企业', '高新企业'],
          ['2015', 800, 550],
          ['2016', 300, 350],
          ['2017', 400, 850],
          ['2018', 750, 650],
          ['2019', 500, 660],
          ['2020', 660, 850],
          ['2021', 500, 830],
        ]
      },
      xAxis: {
        type: 'category' ,
        axisLabel : {
          color: '#fff'
        }
      },
      yAxis: {
        axisLabel : {
          color: '#fff'
        },
        splitLine:{ //修改背景线条样式
          show:true,//是否展示
          lineStyle:{
            color:"rgb(15,19,35,0.2)",//线条颜色
          }
        }
      },
      series: [
        { type: 'bar' },
        {
          type: 'bar',
          itemStyle:{
            color: '#ffa041'
          }
        },
      ]
    });
    return { option };
  }
})
</script>

<style scoped>
.chart{
  height: 250px;
}
</style>