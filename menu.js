/*
 * @Descripttion: 
 * @version: 
 * 
 * @Date: 2022-11-04 15:44:10
 
 * @LastEditTime: 2023-06-21 10:33:39
 */
import request from '@/utils/request'

// 查询菜单列表
export function listMenu(query) {
  return request({
    url: '/api/app/menu',
    method: 'get',
    params: query
  })
}
export function listMenuAll(query) {
  return request({
    url: '/api/app/Menu/GetAllMenuTree',
    method: 'get',
    params: query
  })
}

export function listMenuNavigation(query) {
  return request({
    url: '/api/app/Menu/GetNavigation',
    method: 'get',
    params: query
  })
}

// 查询菜单详细
export function getMenu(params) {
  return request({
    url: '/api/app/Menu/GetMenuById',
    method: 'get',
    params
  })
}

// 查询菜单下拉树结构
export function treeselect() {
  return request({
    url: '/system/menu/treeselect',
    method: 'get'
  })
}

// 根据角色ID查询菜单下拉树结构
export function roleMenuTreeselect(roleId) {
  return request({
    url: '/system/menu/roleMenuTreeselect/' + roleId,
    method: 'get'
  })
}

// 新增菜单
export function addMenu(data) {
  return request({
    url: '/api/app/Menu/CreateMenu',
    method: 'post',
    data: data
  })
}

// 初始化菜单
export function initMenu() {
  return request({
    url: '/api/app/menu/init',
    method: 'post',
   
  })
}


// 修改菜单
export function updateMenu(data,params) {
  return request({
    url: '/api/app/Menu/UpdateMenu',
    method: 'put',
    params,
    data: data
  })
}

// 删除菜单
export function delMenu(params) {
  return request({
    url: '/api/app/Menu/DeleteMenu',
    method: 'delete',
    params
  })
}
 
export function buildMenus() {
  return request({
    url: 'api/menus/build',
    method: 'get'
  })
}