<template>
  <el-container>
    <el-header>
      <div class="title">
        <span class="headerimg"></span>
        <span class="headerTitle">访客详情信息</span>
      </div>
      <span>
        <el-button type="warning" @click="close">关闭</el-button>
      </span>
    </el-header>
    <el-container style="padding: 3% 5%">
      <!-- 左侧表单 -->
      <el-aside style="width: 35%">
        <p style="margin-bottom: 30px">访客基本信息：</p>
        <div class="leftFormBox">
          <el-form label-width="120px" :model="VisitorDetail" style="max-width: 460px">
            <el-form-item label="访客姓名：" required>
              <el-input v-model="VisitorDetail.name" disabled />
            </el-form-item>
            <el-form-item label=" 联系方式：" required>
              <el-input v-model="VisitorDetail.phone" disabled />
            </el-form-item>
            <el-form-item label="访客性别：" required>
              <el-select style="width: 100%" v-model="VisitorDetail.sex" disabled>
                <el-option label="男" value="male" />
                <el-option label="女" value="female" />
              </el-select>
            </el-form-item>
            <el-form-item label="访客学历：" required>
              <el-input v-model="VisitorDetail.education" disabled />
            </el-form-item>
            <el-form-item label="绑定微信号：" required>
              <el-input v-model="VisitorDetail.weChat" disabled />
            </el-form-item>
            <el-form-item label="人脸照片" required>
              <img
                src="https://cdn3.axureshop.com/demo/1968221/images/%E7%A7%9F%E6%88%B7%E4%BA%BA%E5%91%98%E8%AF%A6%E6%83%85/u3503.png"
                style=" height:50px">
            </el-form-item>
          </el-form>
        </div>
      </el-aside>
      <!-- 右侧表单 -->
      <el-main style="margin-left: 2%">
        <p style="margin-bottom: 30px">造访单位信息：</p>
        <div class="rightFormBox">
          <el-form :model="VisitorDetail" label-width="120px" :inline="true" required>
            <el-row>
              <el-col :span="11">
                <el-form-item label="造访类型：" required>
                  <el-select v-model="VisitorDetail.type" disabled>
                    <el-option label="企业" value="enterprise" />
                    <el-option label="租户" value="apartment" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="13">
                <el-form-item label="单位名称：" required>
                  <el-input v-model="VisitorDetail.company" disabled />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="11">
                <el-form-item label="负责人姓名：" required>
                  <el-input v-model="VisitorDetail.director" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="13">
                <el-form-item label="联系方式：" prop="phone" required>
                  <el-input v-model="VisitorDetail.directorPhone" disabled />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="11">
                <el-form-item label="所属楼宇：" required>
                  <el-input v-model="VisitorDetail.Building" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="13">
                <el-form-item label="房间名称：" required>
                  <el-input v-model="VisitorDetail.roomNun" disabled />
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="造访时间：" required>
              <el-date-picker v-model="value2" type="datetimerange" start-placeholder="请选择造访开始时间"
                end-placeholder="请选择造访结束时间" disabled />

            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
    <el-row justify="center" class="buttonBox">
      <el-col :span=" 2">
        <el-button type="primary" size="large">保存</el-button>
      </el-col>
      <el-col :span="2">
        <el-button size="large" @click="close">取消</el-button>
      </el-col>
    </el-row>

  </el-container>
</template>

<script setup>
import { reactive, ref, toRaw } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import { ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
import { useRoute } from "vue-router";

//引入useStore
import { useStore } from 'vuex'
const store = useStore()
const route = useRoute();

const $router = useRouter();
// onMounted(() => {
//字符串转换为对象
// console.log("能获取到吗?", JSON.parse(route.params.rowData));
// 获取点击详情传过来的id
let id = JSON.parse(route.params.rowData)
// 传给vuex的 查询数据的方法
store.dispatch('property/visitorDetail', id)
console.log('vueX的详情数据', toRaw(store.state.property.VisitorDetail[0][0]));

// vueX的对象
const FormData = reactive(toRaw(store.state.property.VisitorDetail[0][0]))

// 页面需要的其他默认参数
const FormOtherData = {
  director: '张小强',
  directorPhone: '18767234658',
  roomNun: '502',
  Building: 'A1幢'
}
// 合并对象
const VisitorDetail = Object.assign(FormData, FormOtherData);









// });

// const VisitorDetail = reactive({
//   userName: "",
//   phone: "",
//   sex: "",
//   Education: "",
//   WeChat: "lxw19920211",
//   photo: "",
//   type: "",
//   companyName: "",
//   principal: "张小强",
//   phone: "18767234658",
//   Building: "A1幢",
//   roomNum: "502",
// });





// 时间相关的属性
let value2 = [
  new Date(VisitorDetail.time),
  new Date(VisitorDetail.endTime),
]


// 点击关闭按钮的处理事件
const close = () => {
  ElMessageBox.confirm("您确认关闭此页面吗？", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      // 点击确定
      $router.push("/property/VisitorInfo");
    })
    .catch(() => { });
};
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

.el-main {
  margin: 0;
  padding: 0;
}

// 左侧表单盒子
.leftFormBox {
  border: 1px solid #000;
  width: 100%;
  height: 85%;
  border-radius: 10px;
  padding: 5%;
  font-size: 20px;
}

// 右侧表单盒子
.rightFormBox {
  padding: 5%;
  width: 100%;
  height: 85%;
  border-radius: 10px;

  border: 1px solid #000;
}

.buttonBox {
  bottom: 5%;
}
</style>


