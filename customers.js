/*
 * @Descripttion: 
 * @version: 
 * 
 * @Date: 2023-06-26 11:11:00
 
 * @LastEditTime: 2023-06-28 09:43:57
 */
/*
 供应商
 */
import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'

export function getList(query) {
  return request({
    url: '/api/MES/Supplier/GetSupplierListForPaged',
    method: 'get',
    params: transformAbpListQuery(query)
  })
}
export function getAllSupplierList(params = {}) {
  // /api/MES/Supplier/GetSupplier
  return request({
    url: '/api/MES/Supplier/GetSupplier',
    method: 'get',
    // params: {
    //   maxResultCount: 999,
    //   skipCount: 0, 
    //   ...params
    // }
  }).then(res=>res.items?res.items:res)
}
//更新
export function edit(params, payload) {
  return request({
    url: `/api/MES/Supplier/UpdateSupplier`,
    method: 'put',
    data: payload,
    params
  })
}

export function getDetail(params) {
  return request({
    url: `/api/MES/Supplier/GetSupplierById`,
    method: 'get',
    params
  })
}

//新增
export function addThat(payload) {
  return request({
    url: '/api/MES/Supplier/CreateSupplier',
    method: 'post',
    data: payload
  })
}

//删除
export function deleteData(params) {
  return request({
    url: `/api/MES/Supplier/DeleteSupplier`,
    method: 'delete',
    params
  })
}


//启用/禁用
export function updateStatus(params) {
  return request({
    url: `/api/MES/Supplier/OnlyUpdateStatus`,
    method: 'put',
    params
  })
}