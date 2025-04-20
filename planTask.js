/*
 * @Descripttion: 
 * @version: 
 * 
 * @Date: 2022-11-07 14:42:49
 
 * @LastEditTime: 2023-06-25 10:51:29
 */
import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'
export function add(data) {
  return request({
    url: '/api/MES/ScheduledTasks/CreateScheduledTasks',
    method: 'post',
    data
  })
}
export function getList(payload) {
    return request({
      url: '/api/MES/ScheduledTasks/GetScheduledTasksListForPaged',
      method: 'get',
      params: transformAbpListQuery(payload)
    })
  }
  
  export function del(id) {
    return request({
      url: `/api/MES/ScheduledTasks/DeleteScheduledTasks?id=${id}`,
      method: 'delete',
    })
  }
  
  export function edit( payload,id) {
    return request({
      url: `/api/MES/ScheduledTasks/UpdateScheduledTasks?id=${id}`,
      method: 'put',
      data: payload
    })
  }
  export function getDetail(id) {
    return request({
      url: `/api/MES/ScheduledTasks/GetScheduledTasksById?id=${id}`,
      method: 'get',
    })
  }
  export function UpdateEnableState(id) {
    return request({
      url: `/api/MES/ScheduledTasks/UpdateEnableState?id=${id}`,
      method: 'get',
    })
  }

