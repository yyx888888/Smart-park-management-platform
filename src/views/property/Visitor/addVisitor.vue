<template>
  <el-container style="padding: ; border: 1px solid #000">
    <el-header>
      <div class="title">
        <span class="headerimg"></span>
        <span class="headerTitle">访客信息新增</span>
      </div>
      <span>
        <el-button type="warning">关闭</el-button>
      </span>
    </el-header>
    <el-container style="padding: 30px">
      <!-- 左侧表单 -->
      <el-aside style="border: 1px solid #000; width: 35%">
        <p>访客基本信息：</p>
        <div class="leftFormBox">
          <el-form
            label-width="120px"
            :model="lefrFormData"
            style="max-width: 460px"
            :rules="rules"
          >
            <el-form-item label="访客姓名：" prop="userName">
              <el-input
                v-model="lefrFormData.name"
                placeholder="请输入访客姓名"
              />
            </el-form-item>
            <el-form-item label="联系方式：" prop="phone">
              <el-input
                oninput="value=value.replace(/[^\d.]/g,'')"
                v-model="lefrFormData.phone"
                placeholder="请输入联系方式"
              />
            </el-form-item>
            <el-form-item label="访客性别：" prop="sex">
              <el-select
                style="width: 100%"
                v-model="lefrFormData.sex"
                clearable
              >
                <el-option label="男" value="male" />
                <el-option label="女" value="female" />
              </el-select>
            </el-form-item>
            <el-form-item label="访客学历：">
              <el-input v-model="lefrFormData.type" />
            </el-form-item>
            <el-form-item label="绑定微信号：">
              <el-input v-model="lefrFormData.WeChat" disabled />
            </el-form-item>
            <el-form-item label="人脸照片：" prop="photo">
              <el-input v-model="lefrFormData.type" />
            </el-form-item>
          </el-form>
        </div>
      </el-aside>
      <!-- 右侧表单 -->
      <el-main style="border: 1px solid #000; margin-left: 2%">
        <p>造访单位信息：</p>
        <div class="rightFormBox">
          <el-form :model="rightFormData" label-width="120px" :inline="true">
            <el-form-item label="造访类型：" prop="hello">
              <el-input v-model="lefrFormData.type" />
            </el-form-item>
            <el-form-item label="单位名称:">
              <el-input v-model="rightFormData.companyName" />
            </el-form-item>
            <br />
            <el-form-item label="负责人姓名:">
              <el-input v-model="rightFormData.companyName" />
            </el-form-item>
            <el-form-item label="联系方式:">
              <el-input v-model="rightFormData.companyName" />
            </el-form-item>
            <br />
            <el-form-item label="所属楼宇:">
              <el-input v-model="rightFormData.companyName" />
            </el-form-item>
            <el-form-item label="房间名称:">
              <el-input v-model="rightFormData.companyName" />
            </el-form-item>
            <el-form-item label="造访时间:">
              <el-date-picker
                v-model="value2"
                type="datetimerange"
                start-placeholder="Start Date"
                end-placeholder="End Date"
                :default-time="defaultTime2"
              />
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
    <el-footer style="text-align: center">Footer</el-footer>
  </el-container>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";

const lefrFormData = reactive({
  userName: "",
  phone: "",
  sex: "",
  Education: "",
  WeChat: "lxw19920211",
  photo: "",
});
// 表单验证规则
const rules = {
  userName: [
    {
      required: true,
      message: "请输入用户名",
      trigger: "blur",
    },
  ],
  phone: { required: true, message: "请输入联系方式", trigger: "blur" },
  sex: { required: true, message: "请选择性别", trigger: "blur" },
  WeChat: { required: true, message: "请输入绑定微信", trigger: "blur" },
  photo: { required: true, message: "请上传人脸照片", trigger: "blur" },
};

// 来访单位信息 表单数据
const rightFormData = reactive({
  type: "",
  companyName: "",
  principal: "",
  phone: "",
  Building: "A1幢",
  roomNum: "502",
});

// 时间相关的属性
let value2 = ref("");
const defaultTime2 = [
  new Date(2000, 1, 1, 12, 0, 0),
  new Date(2000, 2, 1, 8, 0, 0),
]; // '12:00:00', '08:00:00'
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
  border: 1px solid pink;
  width: 490px;
  height: 648px;
  border-radius: 10px;
}
// 右侧表单盒子
.rightFormBox {
  width: 1027px;
  height: 647px;
  border-radius: 10px;
  border: 1px solid blue;
}
</style>
