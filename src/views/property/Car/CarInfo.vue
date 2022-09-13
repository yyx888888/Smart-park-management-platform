<template>
  <el-container>
    <el-header>
      <div class="title">
        <span class="headerimg"></span>
        <span class="headerTitle">车辆信息管理</span>
      </div>
      <span>
        <el-button type="primary" @click="addCar()">新增</el-button>
        <el-button type="warning">批量删除</el-button>
      </span>
    </el-header>
    <el-main>
      <!-- 搜索表单 -->
      <div class="searchForm">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="车牌号码：">
            <el-input placeholder="请输入车牌号码：" />
          </el-form-item>
          <el-form-item label="联系方式">
            <el-input placeholder="请输入联系方式" />
          </el-form-item>
          <el-form-item label="车辆类型">
            <el-select>
              <el-option label="临时车" value="tempCar" />
              <el-option label="包月车" value="monthlyCar" />
              <el-option label="园区车" value="parkCar" />
            </el-select>
          </el-form-item>


          <el-form-item>
            <el-button type="primary" @click="serch">查询</el-button>
            <el-button type="info">重置</el-button>
          </el-form-item>
        </el-form>
      </div>

      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%" border>
        <!-- 多选框 -->
        <el-table-column type="selection" />
        <el-table-column prop="ownerName" label="车主姓名" />
        <el-table-column prop="ownerPhone" label="联系方式" />
        <el-table-column prop="carNumber" label="车牌号码" />
        <el-table-column prop="carVersion" label="车辆型号" />
        <el-table-column prop="carType" label="车辆类型" />
        <el-table-column prop="startTime" label="开始时间" />
        <el-table-column prop="endTime" label="结束时间" />
        <el-table-column label="操作">
          <template v-slot="scope">
            <el-link :underline="false" @click="open(scope.row)">详情</el-link>
            <!--  @confirm 点击确定的处理程序  携带这一行的信息-->
            <el-popconfirm confirm-button-text="确定" cancel-button-text="取消" title="您要删除此条信息吗?"
              @confirm="deleteCarHandler(scope.row)">
              <template #reference>
                <el-link :underline="false" style="margin-left: 50px">删除</el-link>
              </template>
            </el-popconfirm>

            <!-- <el-link :underline="false" style="margin-left: 50px" @click="deleteCarHandler(scope.row)">删除</el-link> -->
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页组件 -->
      <MyPaginationVue :total="count"></MyPaginationVue>
    </el-main>
  </el-container>
</template>

<script setup>
import { useRouter } from "vue-router";
import { onMounted, reactive, ref } from "vue";
import MyPaginationVue from "../../../components/MyPagination.vue";
import { ElMessage } from 'element-plus'
// 接口
import { getCar, deleteCar } from "../../../api/property";

//引入useStore
import { useStore } from 'vuex'
//执行useStore函数
const store = useStore();


// 使用路由
const $router = useRouter();


// 车辆列表数据
let tableData = reactive([])

// 车辆列表总数
let count = ref(0)


// 获取汽车列表数据需要的参数
let Parms = {
  page: '1',   // 获取第几页的数据
  limit: '50'   // 获取几条数据
}

// 获取车辆的异步函数
async function getCarData() {
  // 发送请求 接受请求回来的数据 并且重命名为 res  传入参数
  const { data: res } = await getCar(Parms)
  // 返回的数据展开 push到数组中
  tableData.push(...res.data)
  // 总数重新赋值
  count.value = res.count
  // 保存到vueX
  store.commit('property/saveCarInfo', res.data);
  // console.log('vueX保存的Car数据', store.state.property.CarInfo);
}

// 调用车辆的函数
getCarData()


//添加汽车的方法
function addCar() {
  // 跳转页面
  $router.push({ path: "/property/addCar" });
}
//点击删除的处理函数 接收当前行的数据
const deleteCarHandler = async (row) => {
  // 发送请求 把这一行的id传过去
  let res = await deleteCar(row.ownerId)
  if (res.data === true) {
    ElMessage({
      showClose: true,
      message: '删除成功',
      type: 'success',
    })
    // 列表数据清空
    tableData.splice(0, tableData.length)
    // 重新获取数据
    getCarData()
  }
}





// 打开详情页 接收传过来的参数
function open(row) {
  console.log("这一行的信息", row);
  $router.push({
    name: "carDetails",
    // 参数传过去
    params: {
      //  转换为字符串
      rowData: JSON.stringify(row),
    },
  });
}


</script>

<style lang="scss" scoped>
.el-container {
  background-color: #fff;

  .el-header {
    border-bottom: 10px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 55px 0 35px;

    .title {
      height: 100%;
      display: flex;
      align-items: center;

      .headerTitle {
        font-size: 20px;
        font-weight: 700;
        margin-left: 30px;
      }

      .headerimg {
        display: inline-block;
        width: 10px;
        height: 28px;
        background-color: rgba(72, 110, 231, 0.87843137254902);
      }
    }
  }
}

.searchForm {
  border: 1px solid #000;
  padding: 20px 30px 0;
  border-radius: 10px;
  margin-bottom: 20px;
}

.el-form {
  display: flex;
  justify-content: space-between;
}
</style>
