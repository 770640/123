/*
 * @Descripttion: 
 * @version: 
 * @Author: wangying
 * @Date: 2023-03-07 17:33:13
 
 * @LastEditTime: 2023-07-20 11:37:29
 */
import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'
export function getList(query) {
  return request({
    url: '/api/MES/PlanOrder/GetListForPage',
    method: 'get',
    params: transformAbpListQuery(query)
  })
}

export function getWorkshopsByProductCode(query) {
    return request({
      url: '/api/MES/Workshop/GetWorkshopsByProductCode',
      method: 'get',
      params: query
    })
  }
  export function getLineListByFormuProductCode(query) {
    return request({
      url: '/api/MES/WorkOrder/GetLineListByFormuProductCode',
      method: 'get',
      params: query
    })
  }
  
//更新
export function edit(params, payload) {
    return request({
      url: `/api/MES/PlanOrder/Update`,
      method: 'put',
      data: payload,
      params
    })
  }

  export function getDetail(id) {
    return request({
      url: `/api/MES/PlanOrder/GetById`,
      method: 'get',
      params:id
    })
  }
  export function addThat(payload) {
    return request({
      url: '/api/MES/PlanOrder/Create',
      method: 'post',
      data: payload
    })
  }
 
  export function deleteData(params){
    return request({
      url:`/api/MES/PlanOrder/Delete`,
      method:'delete',
      params
    })
  }
 
  export function setState(params) {
    return request({
      url: `/api/MES/PlanSheet/SetState`,
      method: 'post',
      params
    })
  }
  export function getWorkOrderCode(code) {
    return request({
      url: `/api/MES/WorkOrder/GetWorkOrderCode`,
      method: 'get',
      params:code
    })
  }
  export function getLineListByPlanSheet(code) {
    return request({
      url: `/api/MES/PlanSheet/GetLineListByPlanSheet`,
      method: 'get',
      params:code
    })
  }
  export function getListByPlanSheetCode(code) {
    return request({
      url: `/api/MES/WorkOrder/GetListByPlanSheetCode`,
      method: 'get',
      params:code
    })
  }
  
  
  export function createWorkOrder(params) {
    return request({
      url: `/api/MES/PlanSheet/CreateWorkOrder`,
      method: 'post',
      params
    })
  }
  export function getSortByLineAndDate(code) {
    return request({
      url: `/api/MES/WorkOrder/GetSortByLineAndDate`,
      method: 'get',
      params:code
    })
  }
  
  export function splitPlanSheetToWorkOrder(params,data) {
    return request({
      url: `/api/MES/PlanSheet/SplitPlanSheetToWorkOrder`,
      method: 'post',
      params,
      data
    })
  }
 
  export function importAnalysis(data) {
    return request({
      url: '/api/MES/PlanSheet/ImportAnalysis',
      headers: { 'Content-Type': 'multipart/form-data' },
      method: 'post',
      data
    })
  }

  export function createPlanSheets(data) {
    return request({
      url: `/api/MES/PlanSheet/CreatePlanSheets`,
      method: 'post',
      data
    })
  }


  export function deleteData2(params){
    return request({
      url:`/api/MES/WorkOrder/DeleteWorkOrder`,
      method:'delete',
      params
    })
  }
  

  export function downloadImportTemplate(params) {
    return request({
      url: '/api/MES/PlanSheet/DownloadImportTemplate',
      method: 'get',
      responseType: 'blob',
      params
    })
  }