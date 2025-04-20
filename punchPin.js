/*
 * @Descripttion: 
 * @version: 
 * 
 * @Date: 2023-06-27 11:32:09
 
 * @LastEditTime: 2023-06-27 11:37:14
 */
 
import request from '@/utils/request'

//查询词典
export function getDicData(query) {
    return request({
        url: `/api/app/Dictionary/GetOptionList`,
        method: 'get',
        params: query
    })
}