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
        url: `/api/MES/ProductInformation/GetProductInformationListForPaged`,
        method: 'get',
        params: transformAbpListQuery(query)
    })
}
export function getDetail(id) {
    return request({
        url: `/api/MES/ProductInformation/GetProductInformationById`,
        method: 'get',
        params: {id}
    })
}
export function del(params) {
    return request({
        url: `/api/MES/ProductInformation/DeleteProductInformation`,
        method: 'DELETE',
        params
    })
}
export function add(data) {
    let str=!data.id?'CreateProductInformation':'UpdateProductInformation?id='+data.id,
    method=data.id?'put':'post';
    return request({
        url: `/api/MES/ProductInformation/${str}`,
        method,
        data
    })
}
// export function getDataList(query) {
//     return request({
//         url: `/api/MES/ProductInformation/GetProductInformationListForPaged`,
//         method: 'get',
//         params: query
//     })
// }

export function updateStatus(params) {
    return request({
        url: `/api/MES/ProductInformation/UpdateEnableStatus`,
        method:'post',
        params
    })
}
