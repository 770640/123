/*
 * @Author:Friedrich 123456
 * @Date: 2023-08-18 14:04:36
 * @LastEditors: wangkaiyue 123456
 * @LastEditTime: 2023-08-24 11:07:01
 * @FilePath: \mes-frontend\src\api\traceability\stationTracing.js
 * @Description: 
 */
import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'

//查询工位/产品 下拉框
export function getOptionList(query) {
    return request({
        url: '/api/app/Dictionary/GetOptionList',
        method: 'get',
        params: query
    })
}

//根据工位和产品加载工序下拉框
export function getProcessProdurByStation(query) {
    return request({
        url: '/api/MES/OrderTrack/GetProcessProdurByStation',
        method: 'get',
        params: query
    })
}

//查询数量及产出信息
export function getOrderInfoByStation(query) {
    return request({
        url: '/api/MES/OrderTrack/GetOrderInfoByStation',
        method: 'get',
        params: transformAbpListQuery(query)
    })
}

// 展开工位内容
export function getProcedureRecordByStation(query) {
    return request({
        url: '/api/MES/OrderTrack/GetProcedureRecordByStation',
        method: 'get',
        params: query
    })
}

//获取操作员
export function getAllUsers(query) {
    return request({
        url: '/api/identity/users/all-users',
        method: 'get',
        params: query
    })
}

