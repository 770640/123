/*
 * @Descripttion: 
 * @version: 
 * 
 * @Date: 2022-11-07 14:42:49
 
 * @LastEditTime: 2023-06-25 10:51:29
 */
import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'

export function getList(payload) {
  return request({
    url: '/api/app/store',
    method: 'get',
    params: transformAbpListQuery(payload)
  })
}

export function dictionarylist() {
  return request({
    url: '/api/app/dictionary/data-dictionary-list',
    method: 'get',
  })
}



export function getDatationaryDetailList(payload) {
  return request({
    url: '/api/app/dictionary-detail',
    method: 'get',
    params: transformAbpListQuery(payload)
  })
}
export function filesgettemplate(params) {
  return request({
    url: '/api/app/dictionary/export-part-chanage-template',
    method: 'post',
    responseType: 'blob',
    params
  })
}

export function dictionaryimport(name,data) {
  return request({
    url: '/api/app/dictionary/import',
    headers: { 'Content-Type': 'multipart/form-data' },
    method: 'post',
    data,
    params: {filte:name}
  })
}


export function getDatationary(id) {
  return request({
    url: `/api/app/dictionary/${id}`,
    method: 'get'
  })
}
export function deletestore(id) {
  return request({
    url: `/api/app/store/${id}`,
    method: 'delete'
  })
}

export function remove(ids) {
  return request({
    url: `/api/app/store/batch-delete`,
    method: 'post',
    data: ids
  })
}

export function edit(id, payload) {
  return request({
    url: `/api/app/store/${id}`,
    method: 'put',
    data: payload
  })
}
export function getDetail(id) {
  return request({
    url: `/api/app/store/${id}`,
    method: 'get',
  })
}
export function createLocation(payload) {
  return request({
    url: '/api/app/store',
    method: 'post',
    data: payload
  })
}

// details
 

export function getDatationaryDetail(id) {
  return request({
    url: `/api/app/dictionary-detail/${id}`,
    method: 'get'
  })
}
export function deleteDatationaryDetail(id) {
  return request({
    url: `/api/app/dictionary-detail/${id}`,
    method: 'delete'
  })
}

export function deleteDatationariesDetail(ids) {
  let urlIds = '?'
  if (ids && ids.length) {
    for (let index = 0; index < ids.length; index++) {
      urlIds += `ids=${ids[index]}&`
    }
    urlIds = urlIds.substring(0, urlIds.length - 1)
  }
  return request({
    url: `/api/app/dictionary-detail${urlIds}`,
    method: 'delete'
  })
}

export function updateDatationaryDetail(id, payload) {
  return request({
    url: `/api/app/dictionary-detail/${id}`,
    method: 'put',
    data: payload
  })
}

export function createDatadictionaryDetail(payload) {
  return request({
    url: '/api/app/dictionary-detail',
    method: 'post',
    data: payload
  })
}

export function storeimport(data) {
  return request({
    url: '/api/app/dictionary/import',
    headers: { 'Content-Type': 'multipart/form-data' },
    method: 'post',
    data
  })
}

export function partPositionId() {
  return request({
    url: `/api/app/dictionary/part-position-id`,
    method: 'get',
  })
}

