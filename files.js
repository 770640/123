/*
 * @Descripttion: 
 * @version: 
 * 
 * @Date: 2022-11-10 14:48:47
 
 * @LastEditTime: 2023-06-25 17:10:52
 */
import request from '@/utils/request'
export function uploadFiles(data) {
  return request({
    url: '/api/app/File/UploadFile',
    headers: { 'Content-Type': 'multipart/form-data' },
    method: 'post',
    data
  })
}
 
export function filesgettemplate(params) {
  return request({
    url: '/api/app/File/GetTemplate',
    method: 'get',
    responseType: 'blob',
    params
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
export const getImgSrc=(id)=>{
return process.env.VUE_APP_BASE_API+'/api/app/File/GetFile?id='+id
}

export function getFileStream(params) {
  return request({
    url: '/api/app/File/GetFileStream',
    params,
    method: 'get',
  })
}
