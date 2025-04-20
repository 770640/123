import request from '@/utils/request'

import { transformAbpListQuery } from '@/utils/abp'
//查询词典
export function getList(query,url) {
   
    return request({
        url,
        method: 'get',
        params: transformAbpListQuery(query)
    })
}
export function getOptionList(params) {
    return request({
      url: `/api/app/Dictionary/GetOptionList`,
      method: 'get',
      params
    })
  }
export function postData(data,url,headers={}) {
    return request({
        url,
        headers,
        method: 'post',
        data
    })
}
export function getDetail(id,url) {
    return request({
        url,
        method: 'get',
        params: {id}
    })
}
export function getData(params,url) {
    return request({
        url,
        method: 'get',
        params
    })
}
export function del(params,url) {
    return request({
        url,
        method: 'DELETE',
        params
    })
}
export function addOrUpdate(url,data,method='post') {
    return request({
        url,
        method,
        data
    })
}