/*
 * @Author:Friedrich 123456
 * @Date: 2023-08-17 14:22:10
 * @LastEditors: wangkaiyue 123456
 * @LastEditTime: 2023-08-17 15:20:35
 * @FilePath: \mes-frontend\src\api\traceability\workOrderTracing.js
 * @Description: 工单追溯
 */

import request from '@/utils/request'


//根据工单号查询工单信息
export function getWorkOrderByOrderCode(query) {
    return request({
        url: '/api/MES/OrderTrack/GetWorkOrderByOrderCode',
        method: 'get',
        params: query
    })
}

//产出信息
export function getOrderItemByWorkOrder(query) {
    return request({
        url: '/api/MES/OrderTrack/GetOrderItemByWorkOrder',
        method: 'get',
        params: query
    })
}

//工单进度
export function getProcedurceProgressByWorkOrder(query) {
    return request({
        url: '/api/MES/OrderTrack/GetProcedurceProgressByWorkOrder',
        method: 'get',
        params: query
    })
}

//查询 工单进度 统计信息
export function getProductionProgressByWorkOrder(query) {
    return request({
        url: '/api/MES/OrderTrack/GetProductionProgressByWorkOrder',
        method: 'get',
        params: query
    })
}
