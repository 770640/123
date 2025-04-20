/*
 * @Description: 流程
 */
import request from '@/utils/request'
import { transformAbpListQuery } from '@/utils/abp'
//根据线体查询工位并按照工段进行划分
export function getWorkStationInfoByLineAndWorkSection(params) {
  return request({
    url: '/api/MES/Workstation/GetWorkStationInfoByLineAndWorkSection',
    method: 'get',
    params
  })
}

export function getMaintenanceWorkStationInfo(params) {
  return request({
    url: '/api/MES/Workstation/GetMaintenanceWorkStationInfo',
    method: 'get',
    params
  })
}


export function getList(query) {
  return request({
    url: '/api/MES/TechnologicalProcess/GetTechnologicalProcessListForPaged',
    method: 'get',
    params: transformAbpListQuery(query)
  })
}


//更新
export function edit(params, payload) {
  return request({
    url: `/api/MES/TechnologicalProcess/UpdateTechnologicalProcess`,
    method: 'put',
    data: payload,
    params
  })
}

export function GetDataByWorkInstructionsId(params) {
  return request({
    url: `/api/MES/ScreenFilePicPoint/GetDataByWorkInstructionsId`,
    method: 'get',
    params
  })
}
export function UpdateFilePicPoint(data) {
  return request({
    url: '/api/MES/ScreenFilePicPoint/UpdateFilePicPoint',
    method: 'post',
    data
  })
}
export function getDetail(params) {
  return request({
    url: `/api/MES/TechnologicalProcess/GetTechnologicalProcessById`,
    method: 'get',
    params
  })
}
export function addThat(payload) {
  return request({
    url: '/api/MES/TechnologicalProcess/CreateTechnologicalProcess',
    method: 'post',
    data: payload
  })
}


export function deleteData(params) {
  return request({
    url: `/api/MES/TechnologicalProcess/DeleteTechnologicalProcess`,
    method: 'delete',
    params
  })
}





//修改过站	修改 
export function updateWorkPassStation(params, payload) {
  return request({
    url: `/api/MES/ProcessProcedures/OperateProduresWorkPassStation`,
    method: 'put',
    data: payload,
    params
  })
}

//获取过站		 id
export function getWorkPassStationById(params) {
  return request({
    url: `/api/MES/ProcessProcedures/GetProduresWorkPassStation`,
    method: 'get',
    params
  })
}

export function deleteWorkPassStationById(params) {
  return request({
    url: `/api/MES/ProcessProcedures/DeleteProduresWorkPassStation`,
    method: 'delete',
    params
  })
}

// 获取过站	 processWorkstationId
export function getMoldByProcessWorkstationId(params) {
  return request({
    url: `/api/MES/WorkPassStation/GetWorkStation`,
    method: 'get',
    params
  })
}
// 获取过站	列表
export function workPassStationgetListNoPageAsync(params) {
  return request({
    url: `/api/MES/WorkPassStation/GetListNoPageAsync`,
    method: 'get',
    params
  })
}
export function getModelByInputAsync(params) {
  return request({
    url: `/api/MES/WorkPassStation/GetModelByInputAsync`,
    method: 'get',
    params
  })
}
//新增过站	新增	  
export function createWorkPassStation(payload) {
  return request({
    url: '/api/MES/ProcessProcedures/OperateProduresWorkPassStation',
    method: 'post',
    data: payload
  })
}
export function WorkPassStationcreateWorkPassStation(payload) {
  return request({
    url: '/api/MES/WorkPassStation/CreateWorkPassStation',
    method: 'post',
    data: payload
  })
}
export function WorkPassStationUpdateWorkPassStation(params, payload) {
  return request({
    url: `/api/MES/WorkPassStation/UpdateWorkPassStation`,
    method: 'put',
    data: payload,
    params
  })
}

export function workPassStationSortIndex(payload) {
  return request({
    url: '/api/MES/ProcessProcedures/SortIndex',
    method: 'post',
    data: payload
  })
}

export function workStepSortIndex(payload) {
  return request({
    url: '/api/MES/WorkStep/SortIndex',
    method: 'post',
    data: payload
  })
}


// 获取工艺流程图XML
export function getProcessFlowCharXMLFile(params) {
  return request({
    url: `/api/MES/ProcessFlowChart/GetProcessFlowChartXMLFile`,
    method: 'get',
    params
  })
}
//保存工艺流程图
export function createProcessFlowChart(payload) {
  return request({
    url: '/api/MES/ProcessFlowChart/CreateProcessFlowChart',
    method: 'post',
    data: payload
  })
}
//发布流程
export function publishTechnologicalProcess(payload) {
  return request({
    url: '/api/MES/TechnologicalProcess/PublishTechnologicalProcess',
    method: 'post',
    params: payload
  })
}
//工艺流程升版
export function upgradeVersion(payload) {
  return request({
    url: '/api/MES/TechnologicalProcess/UpgradeVersion',
    method: 'post',
    params: payload
  })
}
//工艺流程 启用 / 禁用
export function updateStatus(payload) {
  return request({
    url: '/api/MES/TechnologicalProcess/UpdateStatus',
    method: 'post',
    params: payload
  })
}

// 查询历史版本
export function getHistoryVersion(params) {
  return request({
    url: `/api/MES/TechnologicalProcess/GetHistoryVersion`,
    method: 'get',
    params
  })
}
// 复制确认
export function copyProcessFlow(params) {
  return request({
    url: `/api/MES/ProcessFlowChart/CopyProcessFlow`,
    method: 'post',
    params
  })
}
// 获取作业指导书 列表
export function getListNoPageAsync(params) {
  return request({
    url: '/api/MES/WorkInstructions/GetListNoPageAsync',
    method: 'get',
    params
  })
}

//创建作业指导书 
export function createWorkInstructions(data) {
  return request({
    url: '/api/MES/WorkInstructions/CreateWorkInstructions',
    method: 'post',
    data
  })
}
export function UpdateWorkInstructions(data, id) {
  return request({
    url: '/api/MES/WorkInstructions/UpdateWorkInstructions?id=' + id,
    method: 'put',
    data
  })
}


export function deleteWorkInstructions(params) {
  return request({
    url: `/api/MES/WorkInstructions/DeleteWorkInstructions`,
    method: 'delete',
    params
  })
}

//新增工步	新增	  
export function createWorkStep(payload) {
  return request({
    url: '/api/MES/WorkStep/CreateWorkStep',
    method: 'post',
    data: payload
  })
}

export function getWorkStepById(params) {
  return request({
    url: `/api/MES/WorkStep/GetWorkStepById`,
    method: 'get',
    params
  })
}

export function updateWorkStep(params, payload) {
  return request({
    url: `/api/MES/WorkStep/UpdateWorkStep`,
    method: 'put',
    data: payload,
    params
  })
}

export function deleteWorkStep(params) {
  return request({
    url: `/api/MES/WorkStep/DeleteWorkStep`,
    method: 'delete',
    params
  })
}

export function getWorkStepListNoPageAsync(params) {
  return request({
    url: '/api/MES/WorkStep/GetListNoPageAsync',
    method: 'get',
    params
  })
}



export function getAllListByWorkStepType(query) {
  return request({
    url: '/api/MES/WorkStepTemplate/GetAllListByWorkStepType',
    method: 'get',
    params: query
  })
}

export function checkNextEditStep(query) {
  return request({
    url: '/api/MES/WorkStep/CheckNextEditStep',
    method: 'get',
    params: query
  })
}

export function upateBatch(data) {
  return request({
    url: '/api/MES/WorkStep/UpateBatch',
    method: 'post',
    data
  })
}


export function processProceduresgetListNoPageAsync(query) {
  return request({
    url: '/api/MES/ProcessProcedures/GetListNoPageAsync',
    method: 'get',
    params: query
  })
}


export function getProduresWorkPassStation(query) {
  return request({
    url: '/api/MES/ProcessProcedures/GetProduresWorkPassStation',
    method: 'get',
    params: query
  })
}

