/*
 * @Author:Friedrich 123456
 * @Date: 2023-08-08 10:20:37
 * @LastEditors: wangkaiyue 123456
 * @LastEditTime: 2023-08-08 15:50:53
 * @FilePath: \mes-frontend\src\api\andengCall\index.js
 * @Description: 安灯呼叫接口
 */
import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'

//安灯设置
//查询
export function getList(query) {
    return request({
        url: '/api/MES/AndonConfig/GetAndonConfigListForPaged',
        method: 'get',
        params: transformAbpListQuery(query)
    })
}

//更新
export function edit(params, payload) {
    return request({
        url: `/api/MES/AndonConfig/UpdateAndonConfig`,
        method: 'put',
        data: payload,
        params
    })
}

//获取详情
export function getDetail(code) {
    return request({
        url: `/api/MES/AndonConfig/GetAndonConfigById`,
        method: 'get',
        params: code
    })
}

//添加
export function addThat(payload) {
    return request({
        url: '/api/MES/AndonConfig/CreateAndonConfig',
        method: 'post',
        data: payload
    })
}

//删除
export function deleteData(params) {
    return request({
        url: `/api/MES/AndonConfig/DeleteAndonConfig`,
        method: 'delete',
        params
    })
}

//获取角色
export function getRoles(params) {
    return request({
        url: `/api/identity/roles/all`,
        method: 'get',
        params
    })
}



//安灯呼叫记录
//查询
export function getRecordList(query) {
    return request({
        url: '/api/MES/AndonRecord/GetAndonRecordListForPaged',
        method: 'get',
        params: transformAbpListQuery(query)
    })
}

//删除
export function deleteRecordData(params) {
    return request({
        url: `/api/MES/AndonRecord/DeleteAndonRecord`,
        method: 'delete',
        params
    })
}

//获取确认详情
export function getRecordDetail(code) {
    return request({
        url: `/api/MES/AndonRecord/GetAndonRecordById`,
        method: 'get',
        params: code
    })
}

//确认
export function editRecord(params, payload) {
    return request({
        url: `/api/MES/AndonRecord/UpdateReasonById`,
        method: 'post',
        data: payload,
        params
    })
}



