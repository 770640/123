 
import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'
export function getList(query) {
  return request({
    url: '/api/MES/WorkOrder/GetWorkOrderListForPaged',
    method: 'get',
    params: transformAbpListQuery(query)
  })
}

export function getProcessListByProcessId(query) {
    return request({
      url: '/api/MES/WorkOrder/GetProcessListByProcessId',
      method: 'get',
      params: query
    })
  }

export function getSnListByWorkOrderCode(query) {
  return request({
    url: '/api/MES/WorkOrder/GetSnListByWorkOrderCode',
    method: 'get',
    params: query
  })
}

export function getFlowChartXmlByWorkOrderCode(query) {
  return request({
    url: '/api/MES/WorkOrder/GetFlowChartXmlByWorkOrderCode',
    method: 'get',
    params: query
  })
}
