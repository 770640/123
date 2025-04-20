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
        url: `/api/MES/DefectConfig/GetDefectConfigListForPaged`,
        method: 'get',
        params: transformAbpListQuery(query)
    })
}
export function getDetail(id) {
    return request({
        url: `/api/MES/DefectConfig/GetDefectConfigById`,
        method: 'get',
        params: {id}
    })
}
export function del(params) {
    return request({
        url: `/api/MES/DefectConfig/DeleteDefectConfig`,
        method: 'DELETE',
        params
    })
}
export function add(data) {
    let str=!data.id?'CreateDefectConfig':'UpdateDefectConfig?id='+data.id,
    method=data.id?'put':'post';
    return request({
        url: `/api/MES/DefectConfig/${str}`,
        method,
        data
    })
}
export function ImportProcessDefectConfig(params) {
    return request({
        url: `/api/MES/DefectConfig/ImportProcessDefectConfig`,
        method: 'get',
        params
    })
}
export function DownloadTemplate() {
    return request({
        url: `/api/MES/DefectConfig/DownloadTemplate`,
        method: 'post',
        responseType: 'blob',
        
    })
}
