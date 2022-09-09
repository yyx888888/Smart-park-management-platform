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
      <el-aside style="width: 35%">
        <p style="margin-bottom: 30px">设备基本信息：</p>
        <div class="leftFormBox">
          <el-form label-width="120px" :model="leftFormData" style="max-width: 460px" :rules="rules">
            <el-form-item label="设备信息：" prop="info">
              <el-input v-model="leftFormData.info" />
            </el-form-item>
            <el-form-item label="设备编号：" prop="num">
              <el-input v-model="leftFormData.num" />
            </el-form-item>
            <el-form-item label=" 设备型号：" prop="type">
              <el-select style="width: 100%" v-model="leftFormData.type" clearable>
                <el-option label="ISS20200816" value="1" />
                <el-option label="ISS2345123" value="2" />
              </el-select>
            </el-form-item>
            <el-form-item label="运行时间：" prop="time">
              <el-input v-model="leftFormData.time" />
            </el-form-item>
            <el-form-item label="运行状态：" prop="state">
              <el-select style="width: 100%" v-model="leftFormData.state" clearable>
                <el-option label="正常" value="1" />
                <el-option label="禁用" value="2" />
              </el-select>
            </el-form-item>
            <el-form-item label="跟进人：" prop="follower">
              <el-input v-model="leftFormData.follower" />
            </el-form-item>
            <el-form-item label="联系方式：" prop="phone">
              <el-input v-model="leftFormData.phone" />
            </el-form-item>
          </el-form>
        </div>
      </el-aside>
      <!-- 右侧表单 -->
      <el-main style="margin-left: 0%">
        <p style="margin-bottom: 30px">设备安装位置：</p>
        <div class="rightFormBox">
          <el-form :model="rightFormData" :rules="rules">
            <el-row>
              <el-col :span="14">
                <el-form-item label="安装位置：" prop="phone">
                  <el-input v-model="leftFormData.phone" disabled style="width:90%" />
                </el-form-item>
              </el-col>
              <el-col :span="8">
                <el-form-item label="安装位置：" prop="phone">
                  <el-input v-model="leftFormData.phone" disabled />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="14">
                <img src="https://cdn3.axureshop.com/demo/1968221/images/%E6%A5%BC%E5%AE%87%E6%96%B0%E5%A2%9E/u3769.png"
                  style=" width:92%;">
              </el-col>
              <el-col :span="8">
                <el-form-item label="安装位置：" prop="phone" disf>
                  <el-input v-model="leftFormData.phone" disabled />
                </el-form-item>
              </el-col>
            </el-row>


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
import { ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
const $router = useRouter();

const leftFormData = reactive({
  info: '',
  num: '',
  type: '',
  time: '',
  state: '',
  follower: '',
  phone: ''

});
// 表单验证规则
const rules = {
  info: { required: true, message: "请输入设备信息", trigger: "blur" },
  num: { required: true, message: "请输入设备编号i", trigger: "blur" },
  type: { required: true, message: "请选择设别型号", trigger: "blur" },
  time: { required: true, message: "请输入运行时间", trigger: "blur" },
  state: { required: true, message: "请选择运行状态", trigger: "blur" },
  follower: { required: true, message: "请输入跟进人", trigger: "blur" },
  phone: { required: true, message: "请输入联系方式", trigger: "blur" },
};

// 来访单位信息 表单数据
const rightFormData = reactive({
  carType: '',
  carNum: '豫A00FX2',
  carBrands: '宝马',
  carModel: '2020款 2.5L 无级 尊贵版',
  beginTime: '2022/9/8',
  overTime: '2022/9/10'


});



// 点击关闭按钮的处理事件
const close = () => {
  ElMessageBox.confirm("您确认关闭此页面吗？", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      // 点击确定
      $router.go(-1);
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
  width: 80%;
  height: 85%;
  border-radius: 10px;
  padding: 5% 5% 0% 0%;
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
