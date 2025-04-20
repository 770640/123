/*
 * @Descripttion: 
 * @version: 
 * 
 * @Date: 2023-06-27 11:32:09
 
 * @LastEditTime: 2023-06-27 11:37:14
 */
 
import request from '@/utils/request'
import { method } from 'lodash'
import { transformAbpListQuery } from '@/utils/abp'





//查询词典
export function getDataList(query) {
    return request({
        url: `/api/MES/Bom/GetBomListForPaged`,
        method: 'get',
        params:  transformAbpListQuery(query)
    })
}
///api/MES/BOMDetail/GetBOMDetailNoPageListAsync
export function GetBOMDetailNoPageListAsync(query) {
    return request({
        url: `/api/MES/BOMDetail/GetBOMDetailNoPageListAsync`,
        method: 'get',
        params:  query
    })
}
export function getDetail(id) {
    return request({
        url: `/api/MES/Bom/GetBomById`,
        method: 'get',
        params: {id}
    })
}
export function del(params) {
    return request({
        url: `/api/MES/Bom/DeleteBom`,
        method: 'DELETE',
        params
    })
}
export function DeleteBOMDetail(params) {
    return request({
        url: `/api/MES/BOMDetail/DeleteBOMDetail`,
        method: 'DELETE',
        params
    })
}
// /api/MES/Alternative/GetAlternativeListForPaged
// /api/MES/BOMDetail/DeleteBOMDetail
export function add(data) {
    let str=!data.id?'CreateDraftAsync':'UpdateBomInfoAsync?id='+data.id,
    method=data.id?'put':'post';
    return request({
        url: `/api/MES/Bom/${str}`,
        method,
        data
    })
}
export function UpdateBOMDetail(data) {
    return request({
        url: '/api/MES/BOMDetail/UpdateBOMDetail?id='+data.id,
        method:'put',
        data
    })
}
export function UpdateStatesAsync({id}) {
    return request({
        url: '/api/MES/BOM/UpdateStatesAsync?id='+id,
        method:'get',
       
    })
}
// /api/MES/BOMDetail/GetBomMaterialTreeAsync
export function GetBomMaterialTreeAsync(id) {
    return request({
        url: '/api/MES/BOMDetail/GetBomMaterialTreeAsync?bomid='+id,
        method:'get'})
}
export function GetHistoryListAsync(params) {
    return request({
        url: '/api/MES/BOM/GetHistoryListAsync',
        method:'get',params})
}
// /api/MES/BOM/GetHistoryListAsync
export function AddUpgradeAsync(id) {
    return request({
        url: '/api/MES/BOM/AddUpgradeAsync?bomid='+id,
        method:'get'})
}

export function DeleteAlternative(params) {
    return request({
        url: `/api/MES/Alternative/DeleteAlternative`,
        method: 'DELETE',
        params
    })
}

export function GetAlternativeListForPaged(query) {
    return request({
        url: `/api/MES/Alternative/GetAlternativeListForPaged`,
        method: 'get',
        params:  transformAbpListQuery(query)
    })
}

export function CreateManyDraftAsync(data) {
    return request({
      url: '/api/MES/BOMDetail/CreateManyDraftAsync',
      method: 'post',
      data
    })
  }
  export function AlternativeCreateManyDraftAsync(data) {
    return request({
      url: '/api/MES/Alternative/CreateManyDraftAsync',
      method: 'post',
      data
    })
  }
 
  export function PublicDraftAsync(id) {
    return request({
      url: '/api/MES/BOM/PublicDraftAsync?id='+id,
      method: 'get',
    //   params: transformAbpListQuery(query)
    })
  }
export function GetMaterialInformationListForPaged(query) {
  return request({
    url: '/api/MES/MaterialInformation/GetMaterialInformationListForPaged',
    method: 'get',
    params: transformAbpListQuery(query)
  })
}
// /