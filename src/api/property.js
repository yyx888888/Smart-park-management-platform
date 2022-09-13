import request from './request'

// 获取访客的接口
export const getVisitor = (params) => {
  return request({
    url: '/visitor/show',
    method: 'post',
    data: params,
  })
}