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
        url: `/api/MES/CheckSheet/GetCheckSheetListForPaged`,
        method: 'get',
        params: transformAbpListQuery(query)
    })
}

export function getDetail(id) {
    return request({
        url: `/api/MES/CheckSheet/GetCheckSheet`,
        method: 'get',
        params: {id}
    })
}

