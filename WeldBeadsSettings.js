import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'
//查询词典
export function getDataList(query) {
    return request({
        url: `/api/MES/WeldBeadsSettings/GetWeldBeadsSettingsListForPaged`,
        method: 'get',
        params: transformAbpListQuery(query)
    })
}
export function getDetail(id) {
    return request({
        url: `/api/MES/WeldBeadsSettings/GetWeldBeadsSettingsById`,
        method: 'get',
        params: {id}
    })
}
export function del(params) {
    return request({
        url: `/api/MES/WeldBeadsSettings/DeleteWeldBeadsSettings`,
        method: 'DELETE',
        params
    })
}
export function add(data) {
    let str=!data.id?'CreateWeldBeadsSettings':'UpdateWeldBeadsSettings?id='+data.id,
    method=data.id?'put':'post';
    return request({
        url: `/api/MES/WeldBeadsSettings/${str}`,
        method,
        data
    })
}