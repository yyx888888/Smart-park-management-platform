import axios from 'axios';

const service = axios.create({
  baseURL: `http://132.232.110.185/phaseFourProject-1.0-SNAPSHOT`,
  timeout: 5000,
  // headers 请求头的数据类型
  headers: {
    "Content-type": "application/json;chartset=utf-8"
  }
})


// // 请求拦截器
// service.interceptors.request.use(
//   (config) => {
//     // 请求格式是json格式
//     config.headers['Content-Type'] = "application/json";
//     // 转换为json字符串
//     config.data = JSON.stringify(config.data);
//     return config;
//   }
// )

// service.interceptors.response.use(
//   (config) => {
//     config.headers['Content-Type'] = "application/json";
//     config.data = JSON.stringify(config.data);
//     return config;
//   }
// )





//响应拦截器
service.interceptors.response.use(
  (response) => {
    console.log('',response, );
    const { data: meta } = response.data
    if (meta.status === 200 || meta.status === 201) {
      return data
    } else {
      ElMessage.error(meta.msg)
      // 返回出一个错误信息
      return Promise.reject(new Error(meta.msg))
    }
  },
  // 当没有请求响应的时候
  // (error) => {
  //   console.log(error.response)
  //   error.response && ElMessage.error(error.response.data)
  //   return Promise.reject(new Error(error.response.data))
  // }
)

// 导出供外界使用
export default service