<template>
  <el-container>
    <el-header>
      <div class="title">
        <span class="headerimg"></span>
        <span class="headerTitle">访客信息登记</span>
      </div>
      <span>
        <el-button type="primary" @click="toAdd">新增 </el-button>
        <el-button type="warning">批量删除</el-button>
      </span>
    </el-header>
    <el-main>
      <!-- 搜索表单 -->
      <div class="searchForm">
        <el-form :inline="true" class="demo-form-inline">
          <el-form-item label="访客姓名 :">
            <el-input v-model="serchData.name" placeholder="请输入访客姓名" />
          </el-form-item>
          <el-form-item label="访客类型 :">
            <el-select v-model="serchData.type" clearable>
              <el-option label="企业" value="企业" />
              <el-option label="公寓" value="公寓" />
              <el-option label="其他" value="其他" />
            </el-select>
          </el-form-item>
          <el-form-item label="联系方式 :">
            <el-input v-model="serchData.phone" placeholder="请输入联系方式" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="serch">查询</el-button>
            <el-button @click="clear">重置</el-button>
          </el-form-item>
        </el-form>
      </div>

      <!-- 表格 -->
      <el-table :data="tableData" style="width: 100%" border>
        <!-- 多选框 -->
        <el-table-column type="selection" />
        <el-table-column prop="name" label="访客姓名" />
        <el-table-column prop="phone" label="联系方式" />
        <el-table-column prop="type" label="造访类型" />
        <el-table-column prop="company" label="造访单位" />
        <el-table-column prop="drive" label="是否驾车" />
        <el-table-column prop="carNum" label="车牌号码" />
        <el-table-column prop="endTime" label="造访结束时间" />
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
      <!-- 分页组件 总数传给分页组件   自定义事件 -->
      <MyPaginationVue :total="count" :pageNo="pageNo" @handleSizeChange="handleSizeChange"
        @handleCurrentChange="handleCurrentChange">
      </MyPaginationVue>
    </el-main>
  </el-container>
</template>

<script setup>
import { useRouter } from "vue-router";
import MyPaginationVue from "../../../components/MyPagination.vue";
// 导入接口
import { getVisitor, deleteVisitorInfo } from "../../../api/property";
import { onMounted, reactive, ref, computed } from "vue";
import { ElMessage } from 'element-plus'

//引入useStore
import { useStore } from 'vuex'
//执行useStore函数
const store = useStore();
// console.log('store', store.state.property.VisitorInfo)

// 使用路由
const $router = useRouter();

// 访客列表数据
const tableData = reactive([])
// 访客列表总数
let count = ref(0)
// 分页的页码 
const pageNo = ref(1)

// 搜索查询表单的数据
let serchData = reactive(
  {
    name: '',
    type: '',
    phone: '',
    // 查询的条数，后端没有写全部查询
    limit: '10000',
    // 查询的页数
    page: '1'
  }
)

// ~~~~~~~~~~~~~~~~~~~~~~~~~自定义事件~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 切换每页显示多少条触发自定义事件
const handleSizeChange = (newSize) => {
  getVisitorParms.limit = newSize;  // 改变访客需要的参数
  tableData.splice(0, tableData.length) // 原数据清空
  getVisitorData()  // 重新发送请求
}

// 页面改变的自定义事件
const handleCurrentChange = (newPage) => {
  getVisitorParms.page = newPage  // 改变访客需要的参数
  tableData.splice(0, tableData.length) // 原数据清空
  getVisitorData()   // 重新发送请求
}

// ~~~~~~~~~~~~~~~~~~~~~自定义事件结束~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 获取访客需要的参数
let getVisitorParms = {
  page: '1',   // 获取第几页的数据
  limit: '10'   // 获取几条数据
}

onMounted(() => {
  // 调用获取访客的函数
  getVisitorData()
})


// 获取访客的异步函数
async function getVisitorData() {
  // 发送请求 接受请求回来的数据 并且重命名为 res
  const { data: res } = await getVisitor(getVisitorParms)
  // 返回的数据展开 push到数组中
  tableData.push(...res.data)
  // 总数重新赋值
  count.value = res.count
  // 存到vuex中  触发mutations 中的方法 传入参数
  store.commit('property/saveVisitorInfo', res.data);
  // console.log('这里可以获取到', store.state.property.VisitorInfo);
}




// 点击添加按钮的函数
function toAdd() {
  $router.push({ path: "/property/VisitorInfo/addVisitor" });
}

// 点击查询按钮的函数
async function serch() {
  // console.log('查询发送后台的数据', serchData);
  // 搜索和表单没有值触发的函数
  console.log(serchData.name == '', serchData.type == '', serchData.phone == '');
  if (serchData.name == '' && serchData.type == '' && serchData.phone == '') {
    serchData.limit = getVisitorParms.limit
    console.log('没有值');
  }
  tableData.splice(0, tableData.length) // 原数据清空
  // 发送请求 接受请求回来的数据 并且重命名为 res
  const { data: res } = await getVisitor(serchData)
  tableData.push(...res.data)   // 返回的数据展开 push到数组中
  count.value = res.count   // 总数重新赋值
}

// 点击重置按钮的参数
function clear() {
  // 清空搜索的数据
  Object.keys(serchData).map(key => {
    delete serchData[key]
  })
}


// 打开详情页 接收传过来的参数
function open(row) {
  console.log("这一行的信息", row.id);
  $router.push({
    name: "VisitorDetails",
    // 参数传过去
    params: {
      //  id 传过去 
      rowData: JSON.stringify(row.id),
    },
  });
}

//点击删除的处理函数 接收当前行的数据
const deleteCarHandler = async (row) => {
  // 发送请求 把这一行的id传过去
  let res = await deleteVisitorInfo(row.id)
  if (res.data === true) {
    ElMessage({
      showClose: true,
      message: '删除成功',
      type: 'success',
    })
    // 列表数据清空
    tableData.splice(0, tableData.length)
    // 重新获取数据
    getVisitorData()
  }
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


