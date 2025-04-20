import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'
//查询词典
export function getDataList(query) {
    return request({
        url: `/api/MES/CarModel/GetCarModelListForPaged`,
        method: 'get',
        params: transformAbpListQuery(query)
    })
}
export function getDetail(id) {
    return request({
        url: `/api/MES/CarModel/GetCarModelById`,
        method: 'get',
        params: {id}
    })
}
export function del(params) {
    return request({
        url: `/api/MES/CarModel/DeleteCarModel`,
        method: 'DELETE',
        params
    })
}
export function add(data) {
    let str=!data.id?'CreateCarModel':'UpdateCarModel?id='+data.id,
    method=data.id?'put':'post';
    return request({
        url: `/api/MES/CarModel/${str}`,
        method,
        data
    })
}