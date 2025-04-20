/*
 * @Descripttion: 
 * @version: 
 * 
 * @Date: 2023-06-27 11:32:09
 
 * @LastEditTime: 2023-06-27 11:37:14
 */
 
import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'
//查询词典
export function getDataList(query) {
   
    return request({
        url: `/api/MES/ApiLog/GetApiLogListForPaged`,
        method: 'get',
        params: transformAbpListQuery(query)
    })
}
  //导出
  export function exportList(params) {
    return request({
        url: `/api/MES/ApiLog/ApiLogExport`,
        method: 'post',
        responseType: 'blob',
        params: transformAbpListQuery(params)
    })
  }
