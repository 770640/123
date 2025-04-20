import request from '@/utils/request'
import { method } from 'lodash'
import { transformAbpListQuery } from '@/utils/abp'

export function mesGetOptionList(key) {
    return request({
      url: '/api/app/Dictionary/GetOptionList?key='+key,
      method: 'get'
    })
  }
  export function allUsers(params) {
    return request({
      url: '/api/identity/users/all-users',
      method: 'get',
      params
    })
  }
  //导出
  export function exportList(params,url) {
    return request({
        url,
        method: 'post',
        responseType: 'blob',
        params: transformAbpListQuery(params)
    })
  }
  //导入
  export function ImportList(params,url) {
    return request({
        url,
        method: 'get',
        params
    })
}
export function getNormalList(url,params) {
  return request({
      url,
      method: 'get',
      params
  })
}