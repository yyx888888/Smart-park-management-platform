
import { ElMessage } from 'element-plus'

import axios from "axios";
const service = axios.create({
  baseURL: 'http://132.232.110.185/phaseFourProject-1.0-SNAPSHOT/',
  timeout: 5000
})




// // 响应拦截器
// service.interceptors.response.use(
//   (response) => {
//     console.log('响应回来的数据', response);
//     const { data: meta } = response.data

//     console.log('meta', meta);

//     if (meta.status === 200 || meta.status === 201) {
//       return data
//     } else {
//       ElMessage.error(meta.msg)
//       // 返回出一个错误信息
//       return Promise.reject(new Error(meta.msg))
//     }
//   },
//   // 当没有请求响应的时候
//   (error) => {
//     console.log(error.response)
//     error.response && ElMessage.error(error.response.data)
//     return Promise.reject(new Error(error.response.data))
//   }
// )

// 导出供外界使用
export default service