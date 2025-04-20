/*
 * @Descripttion: 
 * @version: 
 * 
 * @Date: 2023-06-27 11:32:09
 
 * @LastEditTime: 2023-08-21 15:06:50
 */
 
import request from '@/utils/request'
import { method } from 'lodash'
import { transformAbpListQuery } from '@/utils/abp'
// /api/MES/CheckAndDefect/CreateCheckAndDefect（GetProductInspectionRecordsInputDto input）HttpPost
// /api/MES/CheckAndDefect/GetCheckAndDefect（string checkItemCode）HttpGet
// /api/MES/CheckAndDefect/DeleteCheckAndDefect（string checkItemCode,List<string> defectItemCode）HttpDelete

export function CreateCheckAndDefect(data) {
    return request({
        url: `/api/MES/CheckAndDefect/CreateCheckAndDefect`,
        method: 'post',
       data
    })
}
export function GetCheckAndDefect(checkItemCode) {
    return request({
        url: `/api/MES/CheckAndDefect/GetCheckAndDefect`,
        method: 'get',
       params:{checkItemCode}
    })
}
export function DeleteCheckAndDefect(params) {
    return request({
        url: `/api/MES/CheckAndDefect/DeleteCheckAndDefect`,
        method: 'delete',
        params
    })
}

//查询词典
export function getDataList(query) {
    return request({
        url: `/api/MES/CheckItemConfig/GetCheckItemConfigListForPaged`,
        method: 'get',
        params: transformAbpListQuery(query)
    })
}
export function getDetail(id) {
    return request({
        url: `/api/MES/CheckItemConfig/GetCheckItemConfigById`,
        method: 'get',
        params: {id}
    })
}
export function del(params) {
    return request({
        url: `/api/MES/CheckItemConfig/DeleteCheckItemConfig`,
        method: 'DELETE',
        params
    })
}
export function add(data) {
    let str=!data.id?'CreateCheckItemConfig':'UpdateCheckItemConfig?id='+data.id,
    method=data.id?'put':'post';
    return request({
        url: `/api/MES/CheckItemConfig/${str}`,
        method,
        data
    })
}
// CheckItemConfig/CreateCheckItemConfig




  // 下载模板
export function downloadFile(params){
    return request({
        url:`/api/MES/CheckItemConfig/ExportCheckItemConfigTemplate`,
        method:'post',
        responseType:'blob',
        params
    })
}

export function checkItemConfigImport(params) {
    return request({
        url: `/api/MES/CheckItemConfig/CheckItemConfigImport`,
        method: 'get',
        params
    })
}
