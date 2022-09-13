<template>
  <el-container>
    <el-header>
      <div class="title">
        <span class="headerimg"></span>
        <span class="headerTitle">车辆信息新增</span>
      </div>
      <span>
        <el-button type="warning" @click="close">关闭</el-button>
      </span>
    </el-header>
    <el-container style="padding: 3% 5%">
      <!-- 左侧表单 -->
      <el-aside style="width: 40%">
        <p style="margin-bottom: 30px">车主基本信息：</p>
        <div class="leftFormBox">
          <el-form label-width="120px" :model="addCarInfo" style="max-width: 460px" :rules="rules" ref="ruleFormRef">
            <el-form-item label="车主姓名：" prop="name">
              <el-input v-model="addCarInfo.name" placeholder="请输入车主姓名" />
            </el-form-item>
            <el-form-item label="联系方式：" prop="phone">
              <el-input oninput="value=value.replace(/[^\d.]/g,'')" v-model="addCarInfo.phone" disabled
                placeholder="请输入联系方式" />
            </el-form-item>
            <el-form-item label="人员性别：" prop="sex">
              <el-select style="width: 100%" v-model="addCarInfo.sex" clearable disabled>
                <el-option label="男" value="male" />
                <el-option label="女" value="female" />
              </el-select>
            </el-form-item>
            <el-form-item label="单位名称：" prop="companyName">
              <el-input v-model="addCarInfo.companyName" disabled />
            </el-form-item>
            <el-form-item label="所属楼宇：" prop="Building">
              <el-input v-model="addCarInfo.Building" disabled />
            </el-form-item>
            <el-form-item label="房间名称：" prop="roomNum">
              <el-input v-model="addCarInfo.roomNum" disabled />
            </el-form-item>
            <el-form-item label="人脸照片：" prop="roomNum">
              <img
                src="https://cdn3.axureshop.com/demo/1968221/images/%E7%A7%9F%E6%88%B7%E4%BA%BA%E5%91%98%E8%AF%A6%E6%83%85/u3503.png"
                style=" height:50px">
            </el-form-item>
          </el-form>
        </div>
      </el-aside>
      <!-- 右侧表单 -->
      <el-main style="margin-left: 2%">
        <p style="margin-bottom: 30px">车辆基本信息：</p>
        <div class="rightFormBox">
          <el-form :model="addCarInfo" label-width="120px" :inline="true" :rules="rules" ref="ruleFormRef2">
            <el-row>
              <el-col :span="12">
                <el-form-item label="车辆类型：" prop="companyName">
                  <el-select v-model="addCarInfo.carType" clea>
                    <el-option label="临时车" value="临时车" />
                    <el-option label="包月车" value="包月车" />
                    <el-option label="园区车" value="园区车" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车牌号码：" prop="carNum">
                  <el-input v-model="addCarInfo.carNum" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="车辆品牌：" prop="carBrands">
                  <el-input v-model="addCarInfo.carBrands" />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车辆型号：" prop="carModel">
                  <el-input v-model="addCarInfo.carModel" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="停车时间：">
              <el-date-picker v-model="formData" type="datetimerange" start-placeholder="请选择开始时间"
                end-placeholder="请选择结束时间" format="YYYY/MM/DD hh:mm:ss" value-format="YYYY-MM-DD hh:mm:ss " clea />
            </el-form-item>
            {{formData[1]}}
          </el-form>
          {{}}
        </div>
      </el-main>
    </el-container>
    <el-row justify="center" class="buttonBox">
      <el-col :span=" 2">
        <!-- 添加点击事件  -->
        <el-button type="primary" size="large" @click="submit">保存</el-button>
      </el-col>
      <el-col :span="2">
        <el-button size="large" @click="close">取消</el-button>
      </el-col>
    </el-row>


    <!-- <el-footer
      style="
        margin: 0 50% 0 37%
        display: flex;
        justify-content: space-between;
      "
    >
      <el-button type="primary" size="large">保存</el-button>
      <el-button size="large" @click="close">取消</el-button>
    </el-footer> -->
  </el-container>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { ElMessageBox, ElMessage } from "element-plus";
import { useRouter } from "vue-router";


// 引入添加车辆的接口
import { addCar } from '../../../api/property.js'

const $router = useRouter();

// 获取表单
const ruleFormRef = ref(null)
const ruleFormRef2 = ref(null)


// 时间相关的属性
let formData = ref([])

// 汽车表单的所有数据
const addCarInfo = reactive({
  name: "",
  phone: "18767234658",
  sex: '男',
  principal: "张小强",
  companyName: '杭州久拓咨询有限公司',
  Building: "A1幢",
  roomNum: "502",
  carType: '',
  carNum: '',
  carBrands: '',
  carModel: '',
  beginTime: formData[0],
  overTime: formData[1],
  ruleFormRef: ''
});



// // 发送后台的参数
// const parms = {
//   carNumber: addCarInfo.carNum,
//   carType: addCarInfo.carType,
//   carVersio: addCarInfo.carModel,
//   endTime: formData[1],
//   ownerBuilding: addCarInfo.Building,
//   ownerCompany: addCarInfo.companyName,
//   ownerName: addCarInfo.name,
//   ownerPhone: addCarInfo.phone,
//   ownerRoomName: addCarInfo.roomNum,
//   startTime: formData[0]
// }

// 表单验证规则
const rules = {
  name: { required: true, message: "请输入用户名", trigger: "blur", },
  phone: { required: true, message: "请输入联系方式", trigger: "blur" },
  sex: { required: true, message: "请选择性别", trigger: "blur" },
  photo: { required: true, message: "请上传人脸照片", trigger: "blur" },
  companyName: [{ required: true, message: "请输入单位名称", trigger: "blur" }],
  overTime: { required: true, message: "请输入结束时间", trigger: "blur" },
  beginTime: { required: true, message: "请输入结束时间", trigger: "blur" },
  carTime: { required: true, message: "请选择停车区间", trigger: "blur" },
  carBrands: { required: true, message: "请输入车牌号码", trigger: "blur" },
  roomNum: { required: true, message: "请输入房间号码", trigger: "blur" },
  Building: { required: true, message: "请输入所在楼宇", trigger: "blur" },
  carNum: { required: true, message: "请输入车牌号码", trigger: "blur" },
  carBrands: { required: true, message: "请输入车辆品牌", trigger: "blur" },
};


// 点击保存按钮的处理函数
const submit = () => {
  // ruleFormRef.value.validate((valid) => {
  //   console.log(valid);
  // })

  // 第一个效验规则
  const p1 = new Promise((resolve, reject) => {
    ruleFormRef.value.validate(valid => {
      if (valid) {
        resolve()
      }
    })
  })
  // 第二个效验规则
  const p2 = new Promise((resolve, reject) => {
    ruleFormRef2.value.validate(valid => {
      if (valid) {
        resolve()
      }
    })
  })
  // 表单效验通过
  Promise.all([p1, p2]).then(() => {
    // 发送后台的参数
    const parms = {
      carNumber: addCarInfo.carNum,
      carType: addCarInfo.carType,
      carVersion: addCarInfo.carModel,
      endTime: formData.value[1],
      ownerBuilding: addCarInfo.Building,
      ownerCompany: addCarInfo.companyName,
      ownerName: addCarInfo.name,
      ownerPhone: addCarInfo.phone,
      ownerRoomName: addCarInfo.roomNum,
      startTime: formData.value[0]
    }
    console.log('发送后台的参数', parms);
    //发送到服务器
    addCar(parms)
      // 获取到服务器返回的结果
      .then(result => {
        // 后台返回的是true 代表添加成功
        if (result.data === true) {
          // 提示消息
          ElMessage({
            message: '添加成功',
            type: 'success',
          })
          // 跳转回汽车信息页面
          $router.back()
        } else {
          // 提示消息
          ElMessage({
            message: '添加失败',
            type: 'error',
          })
        }
      })
  })
}


// 点击关闭按钮的处理事件
const close = () => {
  ElMessageBox.confirm("您确认关闭此页面吗？", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      // 点击确定
      // $router.push("/property/CarInfo");
      $router.back()
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
