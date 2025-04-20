/*
 * @Author:Friedrich 123456
 * @Date: 2023-08-18 14:00:28
 * @LastEditors: wangkaiyue 123456
 * @LastEditTime: 2023-08-24 09:32:30
 * @FilePath: \mes-frontend\src\api\traceability\materialTracing.js
 * @Description: 物料追溯
 */
import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'

//查询
export function getProcessprodurceRecordByMateCode(query) {
    return request({
        url: '/api/MES/OrderTrack/GetProcessprodurceRecordByMateCode',
        method: 'get',
        params: transformAbpListQuery(query)
    })
}