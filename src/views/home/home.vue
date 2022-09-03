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
        <div class="service">
          <div class="serviceTitle">
            <div class="subBarOne"></div>
            <div class="subTitleOne">已完结：{{servicedCount}}</div>
            <div class="subBarTwo"></div>
            <div class="subTitleTwo">未完结：{{notServicedCount}}</div>
          </div>
          <div class="demo-progress">
            <el-progress :text-inside="true" :stroke-width="40" :percentage="percentage" />
          </div>
        </div>
      </div>
    </div>
    <div class="column middleBox">
      <img src="../../../public/images/stateBanner.png" alt="">
      <div class="middleBottomBox">
        <div class="flexBox">
          <div class="flexItem">
            <div class="name">园区总面积/m²</div>
            <div class="value">7512</div>
          </div>
          <div class="flexItem">
            <div class="name">园区总产值/万元</div>
            <div class="value">75683</div>
          </div>
          <div class="flexItem">
            <div class="name">入驻企业总数/家</div>
            <div class="value">274</div>
          </div>
        </div>
        <VChart class="chart" :option="option"/>
      </div>
    </div>
    <div class="column rightBox">
      <div class="title">泊车情况</div>
      <div class="parkArea">
        <div class="flexItem">
          <div class="name">园区内总停车位</div>
          <div class="value">2232</div>
        </div>
        <div class="flexItem">
          <div class="name">已使用停车位</div>
          <div class="value valueColor">1028</div>
        </div>
      </div>
      <el-progress class="carChart" type="circle" :percentage="46" width="200" stroke-width="35" color="#ffa041" stroke-linecap="butt">
        <template #default="{ percentage }">
          <span class="percentage-label">已使用</span>
          <span class="percentage-value">{{ percentage }}%</span>
          <span class="percentage-label valueColor">车位分配</span>
        </template>
      </el-progress>
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
      servicedCount: 870,
      notServicedCount: 163,

    }
  },
  computed:{
    percentage(){
      let num=this.servicedCount/(this.servicedCount+this.notServicedCount)*100;
      let result=Math.round((num/100)*10000)/100;
      return  result;
    }
  },
  components:{
    VChart,
    dailyEnergy,
    qualification,
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
.serviceTitle{
  display: flex;
  justify-content: space-around;
  font-size: 18px;
  font-weight: 1000;
  padding-left: 20px;
  padding-right: 20px;
}
.subBarOne{
  width: 20px;
  height: 20px;
  background-color: #02a7f0;
}
.subTitleOne{
  color: #02a7f0;
  margin-left: 10px;
}
.subTitleTwo{
  color: #fff;
  margin-left: 10px;
}
.subBarTwo{
  width: 20px;
  height: 20px;
  background-color: #fff;
}
.demo-progress{
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
}
.middleBox{
  border: none;
  background-color: rgba(10, 58, 125, 0);
}
img {
  height: 550px;
  margin-top: -10px;
  margin-left: -10px;
}
.chart  {
  height: 400px;
}
.middleBottomBox{
  background-color: #162a41;
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 10px;
  margin: 20px -10px -10px -10px;
}
.flexBox{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  margin: 0 auto;
  width: 90%;
  height: 100px;
}
.name{
  font-size: 20px;
  font-weight: 400;
  color: #fff;
  margin-top: 30px;
}
.value{
  font-size: 30px;
  font-weight: 800;
  color: #02a7f0;
  margin-top: 20px;
}
.valueColor,.percentage-value{
  color: #ffa041;
}
.parkArea .flexItem{
  margin-left: 20px;
}
.percentage-value {
  display: block;
  margin-top: 10px;
  font-size: 28px;
}
.percentage-label {
  display: block;
  margin-top: 10px;
  font-size: 12px;
}
.carChart{
  margin-top: -300px;
  margin-left: 220px;
}
.el-progress ::v-deep(path:first-child){
  stroke: #5080de;
}
</style>


