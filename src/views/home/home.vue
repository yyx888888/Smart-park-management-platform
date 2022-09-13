<!-- 综合态势 -->
<template>
  <div class="stateBox">
    <div class="column">
      <div>
        <div class="title">当日能耗情况</div>
        <dailyEnergy/>
        <div class="title">企业资质情况</div>
        <qualification/>
        <div class="title serTitle">服务统计</div>
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
      <div class="myImage">
        <img src="../../../public/images/stateBanner.png" alt="" >
      </div>
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
      <el-progress class="carChart" type="circle" :percentage="46" :width="200" :stroke-width="35" color="#ffa041" stroke-linecap="butt">
        <template #default="{ percentage }">
          <span class="percentage-label">已使用</span>
          <span class="percentage-value">{{ percentage }}%</span>
          <span class="percentage-label valueColor">车位分配</span>
        </template>
      </el-progress>
      <div class="title">实时车辆信息</div>
      <div class="carInfo">
        <div class="carInfo-item">
          <div class="carInfo-status">进场</div>
          <div class="carInfo-number">川A223JK</div>
          <div class="carInfo-time" >{{ this.confirmTime }}</div>
        </div>
        <div class="carInfo-item">
          <div class="carInfo-status">进场</div>
          <div class="carInfo-number">川A223JK</div>
          <div class="carInfo-time" >{{ this.confirmTime }}</div>
        </div>
        <div class="carInfo-item">
          <div class="carInfo-status">进场</div>
          <div class="carInfo-number">川A223JK</div>
          <div class="carInfo-time" >{{ this.confirmTime }}</div>
        </div>
        <div class="carInfo-item">
          <div class="carInfo-status">进场</div>
          <div class="carInfo-number">川A223JK</div>
          <div class="carInfo-time" >{{ this.confirmTime }}</div>
        </div>
        <div class="carInfo-item">
          <div class="carInfo-status">进场</div>
          <div class="carInfo-number">川A223JK</div>
          <div class="carInfo-time" >{{ this.confirmTime }}</div>
        </div>
        <div class="carInfo-item">
          <div class="carInfo-status">进场</div>
          <div class="carInfo-number">川A223JK</div>
          <div class="carInfo-time" >{{ this.confirmTime }}</div>
        </div>
      </div>
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
      nowDate(){
        let nowDate=new Date();
        let date={
          hour:nowDate.getHours(),
          min:nowDate.getMinutes()
        };
        this.confirmTime='今天'+date.hour+'：'+date.min
      }
    }
  },
  created() {
    this.nowDate();
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
          color: '#fff'
        }
      },
      yAxis: {
        type: 'value',
        axisLabel : {
          color: '#fff'
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
  margin-top: 10px;
  margin-bottom: 10px;
  padding-left: 20px;
  padding-bottom: 10px;
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
  margin-top: 20px;
  margin-left: 20px;
  margin-right: 20px;
}
.middleBox{
  border: none;
  background-color: rgba(10, 58, 125, 0);
}
.myImage{
  width: 100%;
  height: 410px;
  margin-top: -10px;
}
img {
  width: 100%;
  height: 100%;
}
.chart  {
  height: 260px;
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
  margin-top: -50%;
  margin-left: 50%;
}
.el-progress ::v-deep(path:first-child){
  stroke: #5080de;
}
.carInfo {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.carInfo-item{
  margin: 18px auto;
  width: 90%;
  display: flex;
  justify-content: space-evenly;
}
.carInfo-status{
  border: 2px solid #bfbf47;
  border-radius: 5px;
  color: #bfbf47;
  width: 60px;
  height: 30px;
  font-size: 18px;
  text-align: center;
  line-height: 30px;
}
.carInfo-number{
  padding-left: 22%;
  font-size: 20px;
  color: #fff;
}
.carInfo-time{
  color: #ccc;
}
</style>


