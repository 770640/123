/*
 * @Descripttion: 
 * @version: 
 * 
 * @Date: 2022-10-28 13:19:42
 
 * @LastEditTime: 2023-06-21 16:36:01
 */
import request from '@/utils/request'

export function getPermissions(query) {
  return request({
    url: '/api/permission-management/permissions',
    method: 'get',
    params: query
  })
}
export function getPermissionsNew(query) {
  return request({
    url: '/api/identity/roles/get-role-menu',
    method: 'post',
    params: query
  })
}

export function getuserPermissionsNew(query) {
  return request({
    url: '/api/identity/roles/get-user-role-menu',
    method: 'post',
    params: query
  })
}


export function updatePermissions(query, payload) {
  return request({
    url: `/api/permission-management/permissions`,
    method: 'put',
    params: query,
    data: payload
  })
}

export function saveRoleMenu(query, payload) {
  return request({
    url: `/api/identity/roles/save-role-menu`,
    method: 'put',
    params: query,
    data: payload
  })
}
