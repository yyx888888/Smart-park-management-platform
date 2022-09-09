<!--能源消耗分析-->
<template>
  <div class="energyBox">
<!--    左侧可视框-->
    <div class="column" >
<!--      绿色能源-->
      <div class="columnItem">
        <div class="title">绿色能源</div>
        <div class="greenEnergy">
          <div class="energyItem">
            <img src="../../../public/images/energylogo.svg" alt="">
            <div class="energyItemCont">
              <div>充电桩数量</div>
              <div>102个</div>
            </div>
          </div>
          <div class="energyItem energyItemTwo">
            <img src="../../../public/images/energylogo.svg" alt="">
            <div class="energyItemCont">
              <div>光伏发电量</div>
              <div>102kWh</div>
            </div>
          </div>
          <div class="energyItem">
            <img src="../../../public/images/energylogo.svg" alt="">
            <div class="energyItemCont">
              <div>储能装机量</div>
              <div>102MW</div>
            </div>
          </div>
        </div>
        <div class="myChart1" ref="myChart1"></div>
      </div>
<!--      能源类型-->
      <div class="columnItem">
        <el-table
            :data="energyData"
            style="width: 90%"
            height="200"
            class="tableData"
            :header-cell-style="{border:'none',backgroundColor:'#162a41',color:'#b9eef8'}"
            :row-style="{color:'#b9eef8',backgroundColor:'rgba(255,255,255,0)'}"
            :cell-style="{borderColor: 'rgba(255,228,0,0)'}"
        >
          <el-table-column prop="type" label="类型" width="100" align="center" border="none"/>
          <el-table-column prop="number" label="数量" width="160" align="center"/>
          <el-table-column prop="proportion" label="占比" width="200" align="center" >
            <el-progress :stroke-width="10" :percentage="energyData[3].proportion" color="#9a03d5"/>
          </el-table-column>
        </el-table>

      </div>
<!--      年度碳排放量趋势-->
      <div class="columnItem">
        <div class="title">年度碳排放量趋势</div>
        <div class="myChart3" ref="myChart3"></div>
      </div>
    </div>
<!--    中间可视框-->
    <div class="column">
<!--      banner-->
      <div class="columnItemTwo"><div class="energyBanner"></div></div>
<!--      园区能耗-->
      <div class="columnItemTwo parkEnergy">
        <div class="title">园区能耗</div>
        <div class="myChart4" ref="myChart4"></div>
      </div>
    </div>
<!--    右侧可视框-->
    <div class="column">
<!--      实时监测-->
      <div class="columnItemThree">
        <div class="title">实时监测</div>
        <div class="myChart5" ref="myChart5"></div>
      </div>
<!--      企业低碳排名-->
      <div class="columnItemThree companyNo">
        <div class="title">企业低碳排名</div>
        <el-table
            :data="tableData"
            style="width: 90%"
            class="tableData"
            :header-cell-style="{border:'none',backgroundColor:'#263750',color:'#fff'}"
            :row-style="{backgroundColor: 'rgba(255,255,255,0)'}"
            :cell-style="{borderColor: 'rgb(160,158,158)'}"
        >
          <el-table-column prop="id" label="排名" width="60" align="center"/>
          <el-table-column prop="name" label="企业名称" width="160" align="center"/>
          <el-table-column prop="address" label="企业地址" width="100" align="center"/>
          <el-table-column prop="total" label="单位产值碳排放" width="150" align="center"/>
        </el-table>

      </div>
    </div>
  </div>

</template>

<script>
import * as echarts from "echarts";

const tableData = [
  {
    id: '1',
    name: '浙江XX科技有限公司',
    address: 'A1幢502室',
    total: '115.30'
  },
  {
    id: '2',
    name: '浙江XX科技有限公司',
    address: 'A1幢502室',
    total: '115.30'
  },
  {
    id: '3',
    name: '浙江XX科技有限公司',
    address: 'A1幢502室',
    total: '115.30'
  },
  {
    id: '4',
    name: '浙江XX科技有限公司',
    address: 'A1幢502室',
    total: '115.30'
  },
  {
    id: '5',
    name: '浙江XX科技有限公司',
    address: 'A1幢502室',
    total: '115.30'
  },
  {
    id: '6',
    name: '浙江XX科技有限公司',
    address: 'A1幢502室',
    total: '115.30'
  },
  {
    id: '7',
    name: '浙江XX科技有限公司',
    address: 'A1幢502室',
    total: '115.30'
  },
  {
    id: '8',
    name: '浙江XX科技有限公司',
    address: 'A1幢502室',
    total: '115.30'
  },
  {
    id: '9',
    name: '浙江XX科技有限公司',
    address: 'A1幢502室',
    total: '115.30'
  },
  {
    id: '10',
    name: '浙江XX科技有限公司',
    address: 'A1幢502室',
    total: '115.30'
  },
];
const energyData=[
  {
    type:'工厂用电',
    number:'1000',
    proportion:98
  },
  {
    type:'工厂用煤',
    number:'950',
    proportion:88
  },
  {
    type:'员工充电',
    number:'850',
    proportion:65
  },
  {
    type:'日常照明',
    number:'750',
    proportion:55
  },
  {
    type:'设备未关',
    number:'650',
    proportion:48
  },
  {
    type:'光伏发电',
    number:'600',
    proportion:40
  }

];
export default {
  data(){
    return{
      tableData,
      energyData,
    }
  },
  mounted() {
    let myChart1=echarts.init(this.$refs.myChart1);
    let myChart3=echarts.init(this.$refs.myChart3);
    let myChart4=echarts.init(this.$refs.myChart4);
    let myChart5=echarts.init(this.$refs.myChart5);
    let option1={
      tooltip: {
        trigger: 'axis'
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '1%',
        top: '4%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          color: '#fff'
        },
        boundaryGap: true,
        data: ['12/15', '12/16', '12/17', '12/18', '12/19', '12/20']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#fff'
        },
        splitLine: {
          lineStyle: {
            // 设置背景横线
            color: '#454545FF'
          }
        },
      },
      series: [
        {
          name: '光伏发电量',
          type: 'line',
          smooth: true,
          stack: 'Total',
          data: [500, 410, 920, 290, 750, 810]
        },
        {
          name: '减排量',
          type: 'line',
          smooth: true,
          stack: 'Total',
          data: [760, 610, 1249, 900, 910, 1000]
        }
      ]

    };
    let option3={

      grid: {
        left: '3%',
        right: '4%',
        bottom: '1%',
        top: '15%',
        containLabel: true
      },
      legend: {
        top: 'center',
        right: 30,
        itemGap: 30,
        textStyle: {
          color: '#fff'
        }
      },
      xAxis: {
        type: 'category',
        axisLabel: {
          color: '#fff'
        },
        boundaryGap: true,
        data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#fff'
        },
        splitLine: {
          lineStyle: {
            // 设置背景横线
            color: '#454545FF'
          }
        },
      },
      series: [
        {
          // name:'2021年',
          data: [200,250,350,450,350,480,410,510,400,450,350,410],
          type: 'line',
          smooth: true,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(
                0, 1, 0, 0,
              [
                {offset: 1, color: '#765ec1'},
                {offset: 0, color: '#04d3d6'}
              ]
            )
          },
          lineStyle: {
            color:'#8868e9'
          }
        }
      ]
    };
    let option4={
      grid: {
        left: '3%',
        right: '4%',
        bottom: '1%',
        top: '15%',
        containLabel: true
      },
      legend: {
        textStyle:{
          color:'#fff'
        }
      },
      tooltip: {},
      dataset: {
        source: [
          ['product', '煤炭消耗', '电力消耗'],
          ['08/01', 800, 550],
          ['08/02', 300, 350],
          ['08/03', 400, 850],
          ['08/04', 750, 650],
          ['08/05', 500, 660],
          ['08/06', 660, 850],
          ['08/07', 500, 830],
          ['08/08', 500, 830],
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
          show:false,//是否展示
        }
      },
      series: [
        { type: 'bar',
          itemStyle:{
            color: '#0ac0d7'
          }
        },
        {
          type: 'bar',
          itemStyle:{
            color: new echarts.graphic.LinearGradient(
                0, 1, 0, 0,
                [
                  {offset: 1, color: '#2277d9'},
                  {offset: 0, color: '#513feb'}
                ]
            )
          }
        },
      ]
    };
    let option5={
      legend: {
        data: ['电力负荷', '实时电压'],
        textStyle:{
          color:'#fff'
        }
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
          axisLabel : {
            color: '#fff'
          },
          boundaryGap: true,
          data: ['18:00', '18:05', '18:10', '18:15', '18:20' ,'18:25']
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel : {
            color: '#fff'
          },
          splitLine: {
            lineStyle: {
              // 设置背景横线
              color: '#454545FF'
            }
          },
        }
      ],
      series: [
        {
          name: '电力负荷',
          type: 'line',
          smooth: true,
          stack: 'Total',
          areaStyle: {
            color:'rgba(60,144,124,0.5)'
          },
          emphasis: {
            focus: 'series'
          },
          data: [1700, 1150, 400, 300, 950, 940]
        },
        {
          name: '实时电压',
          type: 'line',
          smooth:true,
          stack: 'Total',
          label: {
            show: true,
            position: 'top'
          },
          areaStyle: {
            color:'rgba(61,100,173,0.5)'
          },
          emphasis: {
            focus: 'series'
          },
          data: [820, 510, 100, 109, 450, 440]
        }
      ]
    };
    myChart1.setOption(option1);
    myChart3.setOption(option3);
    myChart4.setOption(option4);
    myChart5.setOption(option5);
  }
}

</script>

<style scoped>
  .energyBox{
    width: 100%;
    height: 100%;
    background-color: #19274c;
    display: flex;
    min-width: 1024px;
    max-width: 1920px;
  }
  .column{
    flex: 3.25;
    display: flex;
    flex-direction: column;
  }
  :nth-child(2){
    flex: 3.5;
  }
  .columnItem{
    flex: 3.33;
    background-color: #162a41;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    margin: 10px;
  }
  .columnItemTwo{
    flex: 6.8;
    background-color: #162a41;
    margin: 10px;
  }
  .energyBanner{
    width: 100%;
    height: 100%;
    background-image: url("../../../public/images/energyBanner.png");
  }
  .parkEnergy{
    flex: 3.2;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
  }
  .columnItemThree{
    flex: 3.3;
    background-color: #162a41;
    border: 1px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    margin: 10px;
  }
  .companyNo{
    flex: 6.7;
  }
  .title{
    color: #fff;
    font-size: 20px;
    margin-top: 1.5vh;
    margin-left: 2rem;
  }
  .greenEnergy{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 2vh;
  }
  .energyItem{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  .energyItemTwo{
    margin-left: 4rem;
  }
  .energyItemCont{
    margin-left: 1rem;
    color: #fff;
    font-size: 14px;
  }
  .myChart1{
    height: 14.5vh;
  }
  .myChart3,.myChart4,.myChart5{
    height: 22vh;
  }
  .tableData{
    margin: 1vh auto;
    background-color: rgba(255, 192, 203, 0);
    color: #fff;
  }
</style>