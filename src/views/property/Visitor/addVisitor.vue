<template>
  <el-container>
    <el-header>
      <div class="title">
        <span class="headerimg"></span>
        <span class="headerTitle">访客信息新增</span>
      </div>
      <span>
        <el-button type="warning" @click="close">关闭</el-button>
      </span>
    </el-header>
    <el-container style="padding: 3% 5%">
      <!-- 左侧表单 -->
      <el-aside style="width: 40%">
        <p style="margin-bottom: 30px">访客基本信息：</p>
        <div class="leftFormBox">
          <el-form
            label-width="120px"
            :model="leftFormData"
            style="max-width: 460px"
            :rules="rules"
          >
            <el-form-item label="访客姓名：" prop="userName">
              <el-input
                v-model="leftFormData.name"
                placeholder="请输入访客姓名"
              />
            </el-form-item>
            <el-form-item label="联系方式：" prop="phone">
              <el-input
                oninput="value=value.replace(/[^\d.]/g,'')"
                v-model="leftFormData.phone"
                placeholder="请输入联系方式"
              />
            </el-form-item>
            <el-form-item label="访客性别：" prop="sex">
              <el-select
                style="width: 100%"
                v-model="leftFormData.sex"
                clearable
              >
                <el-option label="男" value="male" />
                <el-option label="女" value="female" />
              </el-select>
            </el-form-item>
            <el-form-item label="访客学历：">
              <el-input v-model="leftFormData.type" />
            </el-form-item>
            <el-form-item label="绑定微信号：">
              <el-input v-model="leftFormData.WeChat" disabled />
            </el-form-item>
            <el-form-item label="人脸照片：" prop="photo">
              <el-input v-model="leftFormData.type" />
            </el-form-item>
          </el-form>
        </div>
      </el-aside>
      <!-- 右侧表单 -->
      <el-main style="margin-left: 2%">
        <p style="margin-bottom: 30px">造访单位信息：</p>
        <div class="rightFormBox">
          <el-form
            :model="rightFormData"
            label-width="120px"
            :inline="true"
            :rules="rules"
          >
            <el-row>
              <el-col :span="12">
                <el-form-item label="造访类型：" prop="type">
                  <el-select>
                    <el-option label="企业" value="enterprise" />
                    <el-option label="租户" value="apartment" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位名称:" prop="companyName">
                  <el-input v-model="rightFormData.companyName" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="负责人姓名:" prop="principal">
                  <el-input v-model="rightFormData.principal" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系方式:" prop="phone">
                  <el-input v-model="rightFormData.phone" disabled />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="所属楼宇:" prop="Building">
                  <el-input v-model="rightFormData.Building" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="房间名称:" prop="roomNum">
                  <el-input v-model="rightFormData.roomNum" disabled />
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="造访时间:">
              <el-date-picker
                v-model="value2"
                type="datetimerange"
                start-placeholder="请选择造访开始时间"
                end-placeholder="请选择造访结束时间"
                :default-time="defaultTime2"
              />
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
    <!-- <el-row justify="center">
      <el-col :span="2">
        <el-button type="primary" size="large">保存</el-button>
      </el-col>
      <el-col :span="2">
        <el-button size="large" @click="close">取消</el-button>
      </el-col>
    </el-row> -->
    <el-footer
      style="
        margin: 0 50% 2% 37%;
        display: flex;
        justify-content: space-between;
      "
    >
      <el-button type="primary" size="large">保存</el-button>
      <el-button size="large" @click="close">取消</el-button>
    </el-footer>
  </el-container>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { ElMessageBox } from "element-plus";
import { useRouter } from "vue-router";
const $router = useRouter();

const leftFormData = reactive({
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
  type: { required: true, message: "请选择造访类型", trigger: "blur" },
  companyName: { required: true, message: "请输入单位名称", trigger: "blur" },
  principal: { required: true, message: "请输入负责人姓名", trigger: "blur" },
  Building: { required: true },
};

// 来访单位信息 表单数据
const rightFormData = reactive({
  type: "",
  companyName: "",
  principal: "张小强",
  phone: "18767234658",
  Building: "A1幢",
  roomNum: "502",
});

// 时间相关的属性
let value2 = ref("");
const defaultTime2 = [
  new Date(2000, 1, 1, 12, 0, 0),
  new Date(2000, 2, 1, 8, 0, 0),
]; // '12:00:00', '08:00:00'

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
    .catch(() => {});
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
  height: 70%;
  border-radius: 10px;
  padding: 5%;
  font-size: 20px;
}
// 右侧表单盒子
.rightFormBox {
  padding: 5%;
  width: 100%;
  height: 70%;
  border-radius: 10px;

  border: 1px solid #000;
}
</style>
