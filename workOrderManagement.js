/*
 * @Descripttion: 
 * @version: 
 * @Author: wangying
 * @Date: 2023-03-07 17:33:13
 
 * @LastEditTime: 2023-08-29 17:17:53
 */
import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'
export function getList(query) {
  return request({
    url: '/api/MES/WorkOrder/GetWorkOrderListForPaged',
    method: 'get',
    params: transformAbpListQuery(query)
  })
}

export function ManualWorkOrderInput(data) {
  return request({
    url: '/api/MES/WorkOrder/ManualWorkOrderInput',
    method: 'post',
   data
  })
}

//更新
export function edit(params, payload) {
    return request({
      url: `/api/MES/WorkOrder/UpdateWorkOrder`,
      method: 'put',
      data: payload,
      params
    })
  }

  export function getDetail(code) {
    return request({
      url: `/api/MES/WorkOrder/GetWorkOrderById`,
      method: 'get',
      params:code
    })
  }
  export function addThat(payload) {
    return request({
      url: '/api/MES/WorkOrder/CreateWorkOrder',
      method: 'post',
      data: payload
    })
  }
  export function PushDataUpdateDatetimeToMomAsync(params) {
    return request({
      url: '/api/MES/WorkOrderItemPlcRecord/PushDataUpdateDatetimeToMomAsync',
      method: 'get',
      params
    })
  }
  export function deleteData(params){
    return request({
      url:`/api/MES/WorkOrder/DeleteWorkOrder`,
      method:'delete',
      params
    })
  }

  
  export function getOptionList(code) {
    return request({
      url: `/api/app/Dictionary/GetOptionList`,
      method: 'get',
      params:code
    })
  }
  export function getLineListByFormuProductCode(query) {
    return request({
      url: '/api/MES/WorkOrder/GetLineListByFormuProductCode',
      method: 'get',
      params: query
    })
  }
  export function updateFreezeStates(code) {
    return request({
      url: `/api/MES/WorkOrder/UpdateFreezeStates`,
      method: 'get',
      params:code
    })
  }
  export function updateManualStates(code) {
    return request({
      url: `/api/MES/WorkOrder/UpdateManualStates`,
      method: 'get',
      params:code
    })
  }
  
  export function getSNRulesByProduct(params) {
    return request({
      url: `/api/MES/SNRules/GetSNRulesByProduct`,
      method: 'get',
      params
    })
  }
  
  export function createBySNnRule(params) {
    return request({
      url: '/api/MES/WorkOrderItem/CreateBySNnRule',
      method: 'post',
      params,
      timeout:5*60*1000
    })
  }
  export function createBySN(params) {
    return request({
      url: '/api/MES/WorkOrderItem/CreateBySN',
      method: 'post',
      params
    })
  }
  
  export function getWorkOrderItemsByWorkOrder(params) {
    return request({
      url: `/api/MES/WorkOrderItem/GetWorkOrderItemListForPaged`,
      method: 'get',
      params:transformAbpListQuery(params)
    })
  }
  export function deleteWorkOrderItem(params){
    return request({
      url:`/api/MES/WorkOrderItem/DeleteWorkOrderItem`,
      method:'delete',
      params
    })
  }
  export function downloadImportTemplate() {
    return request({
      url: '/api/MES/WorkOrder/ExportCheckItemConfigTemplate',
      method: 'post',
      responseType: 'blob'
    })
  }