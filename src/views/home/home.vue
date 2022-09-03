<!-- 综合态势 -->
<template>
  <div class="stateBox">
    <div class="column">
      <div>
        <div class="title">当日能耗情况</div>
        <dailyEnergy/>
        <div class="title">企业资质情况</div>
        <qualification/>
        <div class="title">服务统计</div>
        <div class="carService">
          <div>

          </div>
        </div>
      </div>
    </div>
    <div class="column middleBox">
      <img src="../../../public/images/stateBanner.png" alt="">
      <div class="middleBottomBox">
        <VChart class="chart" :option="option"/>
      </div>
    </div>
    <div class="column">
      <div class="title">泊车情况</div>
      <dailyEnergy/>
      <div class="title">实时车辆信息</div>
      <qualification/>
    </div>
  </div>
</template>
<script>
import VChart from "vue-echarts";
import { ref } from "vue";
import dailyEnergy from './DailyEnergy.vue'
import qualification from './Qualification.vue'
export default ({
  data(){
    return {

    }
  },
  components:{
    VChart,
    dailyEnergy,
    qualification
  },
  setup: () => {
    const option = ref({
      xAxis: {
        type: 'category',
        data: ['在营', '已租', '出租', '续签', '新签', '待租', '退租'],
        axisLabel:{
          textStyle:{
            color: '#fff'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel : {
          textStyle: {
            color: '#fff'
          }
        }
      },
      series: [
        {
          data: [810, 280, 310, 480, 450, 800, 620],
          type: 'bar'
        }
      ]
    });
    return { option };
  }
})

</script>

<style scoped>
.stateBox{
  display: flex;
  min-width: 1024px;
  max-width: 1920px;
  padding: 10px;
  background-color: #2b3b5c;
}
.column{
  flex: 2.5;
  background-color: #162a41;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  overflow: hidden;
}
:nth-child(2){
  flex: 5;
}
.title{
  color: white;
  font-size: 20px;
  font-weight: 700;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-left: 20px;
  padding-bottom: 30px;
  border-bottom: 1px solid #027db4;
}
.middleBox{
  border: none;
  background-color: rgba(10, 58, 125, 0);
}
img {
  height: 500px;
  margin-top: -10px;
}
.chart  {
  height: 400px;
}
.middleBottomBox{
  background-color: #162a41;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  margin-top: 20px;
}
</style>


