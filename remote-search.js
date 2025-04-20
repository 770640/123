/*
 * @Descripttion: 
 * @version: 
 * 
 * @Date: 2023-06-20 17:38:25
 
 * @LastEditTime: 2023-08-29 13:09:29
 */
import request from '@/utils/request'

export function searchUser(name) {
  return request({
    url: '/vue-element-admin/search/user',
    method: 'get',
    params: { name }
  })
}

export function transactionList(query) {
  return request({
    url: '/vue-element-admin/transaction/list',
    method: 'get',
    params: query
  })
}


export function pureUpload(data) {
  return request({
    url: '/api/app/File/UploadFile',
    headers: { 'Content-Type': 'multipart/form-data' },
    method: 'post',
    data
  })
}

export function filesgetfile(id) {
  return request({
    url: '/api/app/File/GetFile',
    responseType: 'blob',
    read:true,
    params:{id:id},
    method: 'get',
  })
}

// export function filesgetfileById(id) {
//   return request({
//     url: '/api/app/File/GetFile',
//     responseType: 'blob',
//     params:{id:id},
//     method: 'get',
//   })
// }

export function filesgetfileById(params) {
  return request({
      url: `/api/app/File/GetFile`,
      method: 'get',
      responseType: 'blob',
      params: params
  })
}


export function getFileNameList(params) {
  return request({
    url: '/api/app/File/GetFileNameList',
    params,
    method: 'get',
  })
}


export function getFileStream(params) {
  return request({
    url: '/api/app/File/GetFileStream',
    params,
    method: 'get',
  })
}