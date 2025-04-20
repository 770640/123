/*
 * @Descripttion: 
 * @version: 
 * 
 * @Date: 2023-07-07 13:51:24
 
 * @LastEditTime: 2023-07-13 14:02:26
 */
import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'


export function getList(query) {
  return request({
    url: '/api/MES/SNRules/GetSNRulesListForPaged',
    method: 'get',
    params:transformAbpListQuery(query)
  })
}


//更新
export function edit(params, payload) {
  return request({
    url: `/api/MES/SNRules/UpdateSNRules`,
    method: 'put',
    data: payload,
    params
  })
}

export function getDetail(params) {
  return request({
    url: `/api/MES/SNRules/GetSNRulesById`,
    method: 'get',
    params
  })
}
// 按产品类别查询产品
export function getProductListByProductTypeCode(params) {
  return request({
    url: `/api/MES/ProductInformation/GetProductListByProductTypeCode`,
    method: 'get',
    params
  })
}

export function addThat(payload) {
  return request({
    url: '/api/MES/SNRules/CreateSNRules',
    method: 'post',
    data: payload
  })
}

 
export function deleteData(params){
  return request({
    url:`/api/MES/SNRules/DeleteSNRules`,
    method:'delete',
    params
  })
}

export function getSeparatorList(params) {
  return request({
    url: `/api/MES/SNRules/GetSeparatorList`,
    method: 'get',
    params
  })
}

export function getTypeList(params) {
  return request({
    url: `/api/MES/SNRules/GetTypeList`,
    method: 'get',
    params
  })
}

export function getDynamicTypeList(params) {
  return request({
    url: `/api/MES/SNRules/GetDynamicTypeList`,
    method: 'get',
    params
  })
}

export function getDateTimeFormatList(params) {
  return request({
    url: `/api/MES/SNRules/GetDateTimeFormatList`,
    method: 'get',
    params
  })
}

export function setState(params) {
  return request({
    url: `/api/MES/SNRules/SetState`,
    method: 'get',
    params
  })
}
