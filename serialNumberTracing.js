/*
 * @Description: 流程
 */
import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'
//根据线体查询工位并按照工段进行划分
// 序列号追溯	/api/MES/OrderTrack/GetBasicData	string sNCode	HttpGet	自动带出的数据
// 	/api/MES/OrderTrack/GetWorkOrderItemPlcRecordDtoBySN	string sNCode	HttpGet	过站信息
// 	/api/MES/OrderTrack/GetCheckSheetCheckItemBySN	string sNCode	HttpGet	质检信息
// 	/api/MES/OrderTrack/GetCheckSheetDefectItemBySN	string sNCode	HttpGet	缺陷信息
// 	/api/MES/OrderTrack/GetDataAcquisitionBySN	string sNCode, GetEquipmentManagementInputDto input	HttpGet	数据采集
// 智慧屏E28	/api/MES/LargeScreenManagement/GetEquipmentAlarmRecord		HttpGet	设备报警

export function GetBasicData(params) {
  return request({
    url: '/api/MES/OrderTrack/GetBasicData',
    method: 'get',
    params
  })
}
export function GetWorkOrderItemPlcRecordDtoBySN(params) {
  return request({
    url: '/api/MES/OrderTrack/GetWorkOrderItemPlcRecordDtoBySN',
    method: 'get',
    params
  })
}
export function GetCheckSheetCheckItemBySN(params) {
  return request({
    url: '/api/MES/OrderTrack/GetCheckSheetCheckItemBySN',
    method: 'get',
    params
  })
}
export function GetCheckSheetDefectItemBySN(params) {
  return request({
    url: '/api/MES/OrderTrack/GetCheckSheetDefectItemBySN',
    method: 'get',
    params
  })
}



export function GetDataAcquisitionBySN(params) {
  return request({
    url: '/api/MES/OrderTrack/GetDataAcquisitionBySN',
    method: 'get',
    params
  })
}

export function getWorkOrderBySN(params) {
  return request({
    url: '/api/MES/OrderTrack/GetWorkOrderBySN',
    method: 'get',
    params
  })
}
export function getOrderItemProcessProceduresBySN(params) {
  return request({
    url: '/api/MES/OrderTrack/GetOrderItemProcessProceduresBySN',
    method: 'get',
    params
  })
}

export function getProcessStationRecords(params) {
  return request({
    url: '/api/MES/OrderTrack/GetProcessStationRecords',
    method: 'get',
    params
  })
}
export function getWorkOrderMaterial(params) {
  return request({
    url: '/api/MES/OrderTrack/GetWorkOrderMaterial',
    method: 'get',
    params
  })
}
export function getPlanInfoForSNTrack(params) {
  return request({
    url: '/api/MES/OrderTrack/GetPlanInfoForSNTrack',
    method: 'get',
    params:transformAbpListQuery(params)
  })
}

export function getListByPlanSheetCode(params) {
  return request({
    url: '/api/MES/WorkOrder/GetListByPlanSheetCode',
    method: 'get',
    params
  })
} 