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
        url: `/api/MES/SystemMessage/PageGetSystemMessage`,
        method: 'get',
        params: transformAbpListQuery(query)
    })
}
export function getDetail(id) {
    return request({
        url: `/api/MES/SystemMessage/GetSystemMessageById`,
        method: 'get',
        params: {id}
    })
}

