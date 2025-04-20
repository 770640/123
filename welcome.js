/*
 * @Descripttion: 
 * @version: 
 * @Author: wangying
 * @Date: 2023-03-07 17:33:13
 
 * @LastEditTime: 2023-08-15 10:21:12
 */
import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'
 
export function commonMenuGetListByUserId(params) {
    return request({
        url: '/api/MES/CommonMenu/GetListByUserId',
        method: 'get',
        params
    })
} 

export function createCommonMenu(data) {
    return request({
        url: '/api/MES/CommonMenu/CreateCommonMenu',
        method: 'post',
        data
    })
} 

export function systemNotifyGetListByUserId(params) {
    return request({
        url: '/api/MES/SystemNotify/GetListByUserId',
        method: 'get',
        params
    })
} 

export function getSystemNotifyListForPaged(params) {
    return request({
        url: '/api/MES/SystemNotify/GetSystemNotifyListForPaged',
        method: 'get',
        params:transformAbpListQuery(params)
    })
} 

export function readSystemNotify(params) {
    return request({
        url: '/api/MES/SystemNotify/ReadSystemNotify',
        method: 'get',
        params
    })
} 

export function getWorkOrderCompletionRate(params) {
    return request({
        url: '/api/MES/WorkOrder/GetWorkOrderCompletionRate',
        method: 'get',
        params
    })
}
export function getWorkOrderTodayCompletionRank(params) {
    return request({
        url: '/api/MES/WorkOrder/GetWorkOrderTodayCompletionRank',
        method: 'get',
        params
    })
}

export function getLastUserSecurityLog(params) {
    return request({
        url: '/api/identity/users/GetLastUserSecurityLog',
        method: 'get',
        params
    })
}

export function updateCommonMenus(data) {
    return request({
        url: '/api/MES/CommonMenu/UpdateCommonMenus',
        method: 'put',
        data
    })
} 

export function updateSystemNotify(params,data) {
    return request({
        url: '/api/MES/SystemNotify/UpdateSystemNotify',
        method: 'put',
        params,
        data
    })
} 
export function createSystemNotify(data) {
    return request({
        url: '/api/MES/SystemNotify/CreateSystemNotify',
        method: 'post',
        data
    })
} 
export function getSystemNotifyById(params) {
    return request({
        url: '/api/MES/SystemNotify/GetSystemNotifyById',
        method: 'get',
        params,
    })
} 

export function deleteSystemNotify(params) {
    return request({
        url: '/api/MES/SystemNotify/DeleteSystemNotify',
        method: 'delete',
        params,
    })
} 

