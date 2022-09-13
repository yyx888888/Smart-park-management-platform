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
          <el-form label-width="120px" :model="formData" style="max-width: 460px" :rules="rules" ref="ruleFormRef">
            <el-form-item label="访客姓名：" prop="userName">
              <el-input v-model="formData.userName" placeholder="请输入访客姓名" />
            </el-form-item>
            <el-form-item label="联系方式：" prop="phone">
              <el-input oninput="value=value.replace(/[^\d.]/g,'')" v-model="formData.phone" placeholder="请输入联系方式" />
            </el-form-item>
            <el-form-item label="访客性别：" prop="sex">
              <el-select style="width: 100%" v-model="formData.sex" clearable>
                <el-option label="男" value="男" />
                <el-option label="女" value="女" />
              </el-select>
            </el-form-item>
            <el-form-item label="是否驾车：" prop="drive">
              <el-select style="width: 100%" v-model="formData.drive" clearable>
                <el-option label="是" value="是" />
                <el-option label="否" value="否" />
              </el-select>

            </el-form-item>
            <el-form-item label="车牌号码：" v-if="formData.drive === '是'">
              <el-input v-model="formData.carNum" placeholder="请输入车牌号码" />
            </el-form-item>
            <el-form-item label="访客学历：">
              <el-input v-model="formData.Education" />
            </el-form-item>
            <el-form-item label="绑定微信号：" prop="WeChat">
              <el-input v-model="formData.WeChat" disabled />
            </el-form-item>
            <el-form-item label="人脸照片：" required="">
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
          <el-form :model="formData" label-width="120px" :inline="true" :rules="rules" ref="ruleFormRef2">
            <el-row>
              <el-col :span="12">
                <el-form-item label="造访类型：" prop="type">
                  <el-select v-model="formData.type">
                    <el-option label="企业" value="企业" />
                    <el-option label="租户" value="租户" />
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="单位名称:" prop="companyName">
                  <el-input v-model="formData.companyName" />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="负责人姓名:" prop="principal">
                  <el-input v-model="formData.principal" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="联系方式:" prop="phone">
                  <el-input v-model="formData.companyPhone" disabled />
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="所属楼宇:" prop="Building">
                  <el-input v-model="formData.Building" disabled />
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="房间名称:" prop="roomNum">
                  <el-input v-model="formData.roomNum" disabled />
                </el-form-item>
              </el-col>
            </el-row>
            <el-form-item label="造访时间:">
              <el-date-picker v-model="timeData" type="datetimerange" start-placeholder="请选择造访开始时间"
                end-placeholder="请选择造访结束时间" format="YYYY/MM/DD hh:mm:ss" value-format="YYYY-MM-DD hh:mm:ss " />
            </el-form-item>
          </el-form>
        </div>
      </el-main>
    </el-container>
    <el-row justify="center" class="buttonBox">
      <el-col :span=" 2">
        <!--提交的事件 -->
        <el-button type="primary" size="large" @click="submit">保存</el-button>
      </el-col>
      <el-col :span="2">
        <el-button size="large" @click="close">取消</el-button>
      </el-col>
    </el-row>
  </el-container>
</template>

<script setup>
import { reactive, ref } from "@vue/reactivity";
import { ElMessageBox, ElMessage } from "element-plus";
import { useRouter } from "vue-router";
// 接口
import { addVisitor } from '../../../api/property.js'

// 路由
const $router = useRouter();



// vueX结束

// 获取表单
const ruleFormRef = ref(null);
const ruleFormRef2 = ref(null);



// 时间相关的属性
let timeData = ref([])


const formData = reactive({
  userName: "",
  phone: "",
  sex: "",
  Education: "",
  WeChat: "lxw19920211",
  photo: "",
  type: "",
  companyName: "",
  principal: "张小强",
  phone: "",
  Building: "A1幢",
  roomNum: "502",
  drive: '',
  carNum: '',
  companyPhone: '187290232125'
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
      $router.back(-1);
      log
    })
    // 点击取消
    .catch(() => { });
};

const submit = () => {
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
  // 效验两个表单的规则  两个表单全部效验全部通过就会执行then后的代码
  Promise.all([p1, p2]).then(() => {
    // 发送后台的参数
    const parms = {
      name: formData.userName,
      education: formData.type,
      weChat: formData.WeChat,
      type: formData.phone,
      time: timeData.value[0],
      phone: formData.phone,
      sex: formData.sex,
      endTime: timeData.value[1],
      drive: formData.drive,
      carNum: formData.carNum,
      company: formData.companyName
    }
    console.log('新增访客发送后台的参数', parms);
    // 发送请求携带参数 之后用then拿后台响应回来的结果
    addVisitor(parms).then(result => {
      // 后台返回的是true 代表添加成功
      if (result.data === true) {
        // 提示消息
        ElMessage({
          message: '添加成功',
          type: 'success',
        })
        // 跳转回访客信息页面
        $router.back();
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

// 表单验证规则
const rules = {
  userName: {
    required: true,
    message: "请输入用户名",
    trigger: "blur",
  },

  phone: { required: true, message: "请输入联系方式", trigger: "blur" },
  sex: { required: true, message: "请选择性别", trigger: "blur" },
  WeChat: { required: true, message: "请输入绑定微信", trigger: "blur" },
  photo: { required: true, message: "请上传人脸照片", trigger: "blur" },
  type: { required: true, message: "请选择造访类型", trigger: "blur" },
  companyName: { required: true, message: "请输入单位名称", trigger: "blur" },
  principal: { required: true, message: "请输入负责人姓名", trigger: "blur" },
  Building: { required: true },
  roomNum: { required: true },
  WeChat: { required: true },
  drive: { required: true, message: "请选择是否驾车" }
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
  height: 82%;
  border-radius: 10px;
  padding: 5%;
  font-size: 20px;
}

// 右侧表单盒子
.rightFormBox {
  padding: 5%;
  width: 100%;
  height: 82%;
  border-radius: 10px;
  border: 1px solid #000;
}
</style>
