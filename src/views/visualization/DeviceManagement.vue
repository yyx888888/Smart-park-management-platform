<!--园区设备管理-->
<template>
  <div class="deviceBox">
<!--    左侧可视区-->
    <div class="column">
<!--      设备资产数量-->
      <div>
        <div class="title">设备资产数量</div>
        <div class="allCount">
          <div class="deviceCount">1500</div>
          <div class="subTitle">设备数量总数（件）</div>
        </div>
        <div class="myChart1" ref="myChart1"></div>
      </div>
<!--      供配电设备运行状态-->
        <div class="title">供配电设备运行状态</div>
        <div class="myChart2" ref="myChart2"></div>
<!--      夜间照明-->
        <div class="title lightBox">夜间照明</div>
        <div class="turnLight">
          <div class="turnLightItem">
            <img src="../../../public/images/light.png" alt="">
            <div class="turnLightItemTitle">景灯1</div>
            <el-switch
                @change="test" size="large" on-value="1" off-value="0" v-model="value1" style="--el-switch-on-color: #ffe400">
            </el-switch>
          </div>
          <div class="turnLightItem">
            <img src="../../../public/images/light.png" alt="">
            <div class="turnLightItemTitle">景灯2</div>
            <el-switch
                @change="test" size="large" on-value="1" off-value="0" v-model="value2" style="--el-switch-on-color: #ffe400">
            </el-switch>
          </div>
          <div class="turnLightItem">
            <img src="../../../public/images/light.png" alt="">
            <div class="turnLightItemTitle">景灯3</div>
            <el-switch
                @change="test" size="large" on-value="1" off-value="0" v-model="value3" style="--el-switch-on-color: #ffe400">
            </el-switch>
          </div>
          <div class="turnLightItem">
            <img src="../../../public/images/light.png" alt="">
            <div class="turnLightItemTitle">景灯4</div>
            <el-switch
                @change="test" size="large" on-value="1" off-value="0" v-model="value4" style="--el-switch-on-color: #ffe400">
            </el-switch>
          </div>
        </div>
    </div>
<!--    右侧可视区-->
    <div class="column columnTwo">
      <div class="titleBox">
<!--        供水系统-->
        <div class="title">供水系统</div>
        <div class="waterSupply">
          <div class="waterSupplyItem">
            <div class="itemTitle">生活水池</div>
            <div class="itemNo">3.1</div>
          </div>
          <div class="waterSupplyItem">
            <div class="itemTitle">消防水池</div>
            <div class="itemNo">2.6</div>
          </div>
          <div class="waterSupplyItem">
            <div class="itemTitle">高位水箱</div>
            <div class="itemNo">4.5</div>
          </div>

        </div>
<!--        供水系统滚动显示屏-->
        <div class="waterRoll">
          <div class="waterRollTitle">
            <div>设备名称</div>
            <div>储水量</div>
            <div>发生时间</div>
          </div>
          <div @mousemove="mmove" @mouseleave="mend" >
            <div id="infiniteScroll" style="height: 150px;overflow: hidden">
              <div class="infiniteScrollItem">
                <div>东南区域</div>
                <div>12300</div>
                <div>09/22</div>
              </div>
              <div class="infiniteScrollItem">
                <div>西南区域</div>
                <div>12000</div>
                <div>09/22</div>
              </div>
              <div class="infiniteScrollItem">
                <div>西北区域</div>
                <div>11100</div>
                <div>09/22</div>
              </div>
              <div class="infiniteScrollItem">
                <div>东北区域</div>
                <div>12100</div>
                <div>09/22</div>
              </div>
              <div class="infiniteScrollItem">
                <div>华北区域</div>
                <div>10000</div>
                <div>09/22</div>
              </div>
              <div class="infiniteScrollItem">
                <div>华南区域</div>
                <div>11000</div>
                <div>09/22</div>
              </div>
              <div class="infiniteScrollItem">
                <div>苏皖区域</div>
                <div>12000</div>
                <div>09/22</div>
              </div>
              <div class="infiniteScrollItem">
                <div>东北区域</div>
                <div>12000</div>
                <div>09/22</div>
              </div>
              <div class="infiniteScrollItem">
                <div>西南区域</div>
                <div>10200</div>
                <div>09/22</div>
              </div>
            </div>
          </div>

        </div>
<!--        监控系统-->
        <div class="title">监控系统</div>
        <div class="monitor"></div>
<!--        供暖系统-->
        <div class="title">供暖系统</div>
        <div class="circleBox">
          <div class="circleImg">
            <img src="../../../public/images/circle.svg" alt="" class="circle">
            <img src="../../../public/images/circle5.svg" alt="" class="circle5">
            <img src="../../../public/images/circle4.svg" alt="" class="circle4">
            <img src="../../../public/images/circle3.svg" alt="" class="circle3">
            <img src="../../../public/images/circle2.svg" alt="" class="circle2">
            <img src="../../../public/images/circle1.svg" alt="" class="circle1">
          </div>
          <div class="circlePer">45%</div>
          <div class="circleTitle">供暖压力</div>
        </div>
        <el-table
            :data="tableData"
            style="width: 48%"
            class="tableData"
            :header-cell-style="{backgroundColor:'rgba(0,0,0,0.9)',color:'#ffe400',border:'none'}"
            :row-style="{backgroundColor: 'rgba(255,255,255,0)'}"
            :cell-style="{borderColor: 'rgba(255,228,0,0)'}"
        >
          <el-table-column prop="name" label="设备名称" width="115" align="center"/>
          <el-table-column prop="status" label="设备状态" width="90" align="center"/>
        </el-table>

      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from 'echarts'

const tableData = [
  {
    name:'A1楼地暖设备',
    status:'正常'
  },
  {
    name:'A2楼地暖设备',
    status:'正常'
  },
  {
    name:'A3楼地暖设备',
    status:'正常'
  }
]

export default {
  data(){
    return{
      value1:'1',
      value2:'1',
      value3:'1',
      value4:'1',
      tableData,
      shishi: null
    }
  },
  mounted() {
    let myChart1=echarts.init(this.$refs.myChart1);
    let myChart2=echarts.init(this.$refs.myChart2);
    let option1 = {
      title: {
        text:'1,500',//主标题文本
        subtext:'正常运行设备',//副标题文本
        left:'32%',
        top:'36%',
        textStyle:{
          fontSize: 16,
          color:'#ffe400',
          align:'center'
        },
        subtextStyle:{
          fontFamily : "微软雅黑",
          fontSize: 10,
          color:'#fafafa',
          align:'center'
        }
      },
      legend: {
        orient: 'vertical',
        top: 'center',
        right: 30,
        itemGap: 30,
        textStyle: {
          color: '#fff'
        }
      },
      series: [
        {
          type: 'pie',
          radius: ['40%', '70%'],
          center: ['40%','50%'],
          avoidLabelOverlap: true,

          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '20',
              fontWeight: 'bold'
            }
          },
          data: [
            { value: 1048, name: '供配电' ,itemStyle:{color: '#073574'}},
            { value: 735, name: '给排水' ,itemStyle:{color: '#166872'}},
            { value: 580, name: '暖通' ,itemStyle:{color: '#227a3d'}},
            { value: 484, name: '供热' ,itemStyle:{color: '#953345'}},
          ]
        }
      ]
    };
    let option2 = {
      xAxis: {
        type: 'category',
        data: ['11/20', '11/22', '11/24', '11/26', '11/28'],
        axisLabel: {
          color: '#0159d5'
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'solid',
            color: '#807f7f'
          }
        }
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          color: '#0159d5'
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'solid',
            color: '#807f7f'
          }
        }
      },
      series: [
        {
          data: [100, 650, 810, 108, 300],
          type: 'line',
          smooth: true
        }
      ]
    };
    myChart1.setOption(option1);
    myChart2.setOption(option2);
  },

  beforeDestroy() {
    //清除定时器
    clearInterval(this.shishi)
  },
  destroyed() {
    //清除定时器
    clearInterval(this.shishi)
  },
  created() {
    //启动定时器
    this.start()
  },
  methods: {
    test (val) {
      // console.log(val)
    },
    //鼠标移动事件
    mmove() {
      clearTimeout(this.shishi)
    },
    //鼠标移出事件
    mend() {
      this.start()
    },
    start() {
      //清除定时器
      clearTimeout(this.shishi)
      //定时器触发周期
      let speed = 75
      this.shishi = setInterval(this.MarqueeTest, speed)
    },
    MarqueeTest() {
      let that =this;
      let test1 = document.getElementById('infiniteScroll')
      //判断组件是否渲染完成
      if (test1.offsetHeight == 0) {
        test1 = document.getElementById('infiniteScroll')
      } else {
        //如果列表数量过少不进行滚动
        if(test1.childNodes.length<6){
          clearTimeout(that.shishi)
          return;
        }
        //组件进行滚动
        test1.scrollTop += 1
        //判断滚动条是否滚动到底部
        if (test1.scrollTop == (test1.scrollHeight - test1.clientHeight)) {
          //获取组件第一个节点
          let a = test1.childNodes[0]
          //删除节点
          test1.removeChild(a)
          //将该节点拼接到组件最后
          test1.append(a)
        }
      }
    }
  }
}

</script>

<style scoped>
.deviceBox{
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background: url("../../../public/images/deviceManagementBanner.png");
  background-size: cover;
}
.column{
  width: 25%;
  height: 100%;
  background: url("../../../public/images/deviceBackgroundimage1.svg");
}
.columnTwo{
  transform: rotateY(180deg);
}
.titleBox{
  transform: rotateY(180deg);
}
.title{
  color: #fff;
  font-size: 20px;
  margin-left: 2rem;
  margin-right: 2rem;
  margin-top: 2vh;
  border-bottom: 1px solid wheat;
  padding-bottom: 1vh;
}
.allCount{
  width: 100%;
  height: 5vh;
  text-align: center;
}
.deviceCount{
  margin: 5px auto;
  width: 25%;
  font-size: 26px;
  font-weight: 1000;
  color: #ffe400;
  border-bottom: 1px solid gray;
}
.subTitle{
  font-size: 14px;
  color: #d9d7d7;
}
.myChart1{
  height: 20vh;
}
.myChart2{
  height: 30vh;
}
.lightBox{
  margin-top: -4vh;
}
.turnLight{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 2vh;
}
.turnLightItem{
  display: flex;
  /*flex-wrap: wrap;*/
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.turnLightItemTitle{
  font-size: 20px;
  color: #ffe400;
}
.waterSupply{
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
}
.itemTitle{
  width: 6rem;
  height: 4vh;
  line-height: 4vh;
  background-image: linear-gradient(to right,#0b0f23,#0099ff,#0b0f23);
  color: #fff;
  border-right:2px solid  #0099ff;
  border-left:2px solid  #0099ff;
  margin-top: 1vh;
}
.itemNo{
  font-size: 26px;
  font-weight: 1000;
  color: #ffe400;
}
.waterRollTitle{
  display: flex;
  justify-content: space-around;
  color: #0099ff;
  margin-left: 2rem;
  margin-right: 2rem;
  padding-bottom: 1vh;
  border-bottom: 1px solid #0099ff;
}
.monitor{
  height: 15vh;
  background: url("../../../public/images/monitor.png") no-repeat;
  margin-left: 1.6rem;
  margin-top: 1vh;
}
.circle{
  position: absolute;
  bottom: 0;
}
.circle1,.circle2,.circle3,.circle4,.circle5{
  position: absolute;
  bottom: 5px;
  left: 5px;
}
.circleBox{
  width: 180px;
  height: 180px;
  position: relative;
  margin-top: 2vh;
  margin-left: 0.5rem;
}
.circlePer{
  color: #fff;
  font-size: 26px;
  font-weight: 800;
  position: absolute;
  left: 3.8rem;
  top: 2.2vh;
}
.circleTitle{
  color: #fff;
  font-size: 18px;
  position: absolute;
  bottom: 4vh;
  left: 3.3rem;
}
.tableData{
  background-image: linear-gradient(to right,#0b0f23,#0099ff,#0b0f23);
  color: #fff;
  border-right:2px solid  #0099ff;
  border-left:2px solid  #0099ff;
  position: absolute;
  bottom: 1vh;
  left: 12.5rem;
}
.infiniteScrollItem{
  display: flex;
  color: #fff;
  justify-content: space-around;
  margin-left: 1.4rem;
  margin-right: 2rem;
  padding-bottom: 1vh;
}
</style>