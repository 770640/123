/*
 * @Descripttion: 
 * @version: 
 * 
 * @Date: 2023-07-07 13:51:24
 
 * @LastEditTime: 2023-07-07 16:20:00
 */
/*
 * @Description: 流程
 */
import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'


export function getList(query) {
  return request({
    url: '/api/MES/WorkStepTemplate/GetAllListByWorkStepType',
    method: 'get',
    params: query
  })
}


//更新
export function edit(params, payload) {
  return request({
    url: `/api/MES/TechnologicalProcess/UpdateTechnologicalProcess`,
    method: 'put',
    data: payload,
    params
  })
}

export function getDetail(params) {
  return request({
    url: `/api/MES/TechnologicalProcess/GetTechnologicalProcessById`,
    method: 'get',
    params
  })
}
export function addThat(payload) {
  return request({
    url: '/api/MES/WorkStepTemplate/CreateWorkStepTemplate',
    method: 'post',
    data: payload
  })
}

 
export function deleteData(params){
  return request({
    url:`/api/MES/WorkStepTemplate/DeleteWorkStepTemplate`,
    method:'delete',
    params
  })
}

export function checkDataItem(query) {
  return request({
    url: '/api/MES/WorkStepTemplate/CheckDataItem',
    method: 'get',
    params: query
  })
}

export function sortAsync(payload) {
  return request({
    url: '/api/MES/WorkStepTemplate/SortAsync',
    method: 'post',
    data: payload
  })
}
