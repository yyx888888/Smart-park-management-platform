<template>
  <el-container>
    <el-header>
      <div class="title">
        <span class="headerimg"></span>
        <span class="headerTitle">车辆信息详情</span>
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
          <el-form label-width="120px" :model="FormData" style="max-width: 460px" :rules="rules">
            <el-form-item label="车主姓名：" prop="name">
              <el-input v-model="FormData.ownerName" disabled />
            </el-form-item>
            <el-form-item label="联系方式：" prop="phone">
              <el-input oninput="value=value.replace(/[^\d.]/g,'')" v-model="FormData.ownerPhone" disabled
                placeholder="请输入联系方式" />
            </el-form-item>
            <el-form-item label="人员性别：" prop="sex">
              <el-select style="width: 100%" v-model="FormData.sex" clearable disabled>
                <el-option label="男" value="male" />
                <el-option label="女" value="female" />
              </el-select>
            </el-form-item>
            <el-form-item label="单位名称" prop="companyName">
              <el-input v-model="FormData.ownerCompany" disabled />
            </el-form-item>
            <el-form-item label="所属楼宇" prop="Building">
              <el-input v-model="FormData.ownerBuilding" disabled />
            </el-form-item>
            <el-form-item label="房间名称" prop="roomNum">
              <el-input v-model="FormData.ownerRoomName" disabled />
            </el-form-item>
            <el-form-item label="人脸照片" prop="roomNum">
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
          <el-form :model="FormData" label-width="120px" :inline="true" :rules="rules">
            <el-row>
              <el-col :span="12">
                <el-form-item label="车辆类型： ">
                  <el-select v-model="FormData.carType" clea>
                    <el-option label="临时车" value="temp" />
                    <el-option label="包月车" value="month" />
                    <el-option label="园区车" value="park" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车牌号码：" prop="companyName">
                  <el-input v-model="FormData.carNumber" disabled />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="车辆品牌：" prop="carBrands">
                  <el-input v-model="FormData.carBrands" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="车辆型号：" prop="carModel">
                  <el-input v-model="FormData.carModel" disabled />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="开始时间：" prop="beginTime">
                  <el-input v-model="FormData.startTime" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="结束时间：" prop="overTime">
                  <el-input v-model="FormData.endTime" disabled />
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
import { onMounted } from "@vue/runtime-core";

import { reactive, ref } from "@vue/reactivity";
import { ElMessageBox } from "element-plus";
import { useRouter, useRoute } from "vue-router";
import { toRaw } from '@vue/reactivity'
const $router = useRouter();
const route = useRoute();

// 表单数据
let FormData = {};

//字符串转换为对象
console.log("能获取到吗?", JSON.parse(route.params.rowData));
// 获取到传过来的参数
let row = JSON.parse(route.params.rowData)
// 赋值给表单 
FormData = row
// 

console.log('有数据吗', FormData);



// 点击关闭按钮的处理事件
const close = () => {
  ElMessageBox.confirm("您确认关闭此页面吗？", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(() => {
      // 点击确定
      $router.push("/property/CarInfo");
    })
    .catch(() => { });
};
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
  photo: { required: true, message: "请上传人脸照片", trigger: "blur" },
  companyName: { required: true, message: "请输入单位名称", trigger: "blur" },
  overTime: { required: true, message: "请输入结束时间", trigger: "blur" },
  beginTime: { required: true, message: "请输入结束时间", trigger: "blur" },
  carModel: { required: true, message: "请输入车辆型号", trigger: "blur" },
  carBrands: { required: true, message: "请输入车牌号码", trigger: "blur" },
  Building: { required: true },
  roomNum: { required: true }
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
