import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'
export function getList(query) {
  return request({
    url: '/api/MES/WorkOrderItemPlcRecord/GetWorkOrderItemPlcRecordListForPaged',
    method: 'get',
    params: transformAbpListQuery(query)
  })
}
export function GetWorkOrderMonitoringPaged(query) {
  return request({
    url: '/api/MES/WorkOrder/GetWorkOrderMonitoringPaged',
    method: 'get',
    params: transformAbpListQuery(query)
  })
}