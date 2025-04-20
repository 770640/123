/*
 * @Descripttion: 
 * @version: 
 * 
 * @Date: 2023-06-27 11:32:09
 
 * @LastEditTime: 2023-08-29 17:30:40
 */
 
import request from '@/utils/request'
import { method } from 'lodash'
import { transformAbpListQuery } from '@/utils/abp'
export function GetProcessProgramVersionByFormuIdWorkStationCode(params) {
    return request({
        url: '/api/MES/Formulation/GetProcessProgramVersionByFormuIdWorkStationCode',
        method: 'get',
        params
    })
}
export function UpdateProcessProgramVersion(data, id) {
    return request({
        url: '/api/MES/ProcessProgramVersion/UpdateProcessProgramVersion?id=' + id,
        method: 'put',
        data
    })
}
export function CreateProcessProgramVersion(data) {
    return request({
        url: '/api/MES/ProcessProgramVersion/CreateProcessProgramVersion',
        method: 'post',
        data
    })
}
export function DeleteProcessProgramVersion(params) {
    return request({
        url: `/api/MES/ProcessProgramVersion/DeleteProcessProgramVersion`,
        method: 'DELETE',
        params
    })
}
export function GetFormulaEquipmentParameterListNoPaged(params) {
    return request({
        url: `/api/MES/FormulaEquipmentParameter/GetFormulaEquipmentParameterListNoPaged`,
        method: 'get',
        params
    })
}
export function GetFormulaCheckItemConfigListNoPaged(params) {
    return request({
        url: `/api/MES/FormulaCheckItemConfig/GetFormulaCheckItemConfigListNoPaged`,
        method: 'get',
        params
    })
}
export function GetEquipmentParameterListForPaged(params) {
    return request({
        url: `/api/MES/EquipmentParameter/GetEquipmentParameterListForPaged`,
        method: 'get',
        params
    })
}

export function InserFormulaDefectConfigList(data) {
    return request({
        url: `/api/MES/FormulaCheckItemConfig/InserFormulaDefectConfigList`,
        method: 'post',
        data
    })
}
export function InserFormulaEquipmentParameterList(data) {
    return request({
        url: `/api/MES/FormulaEquipmentParameter/InserFormulaEquipmentParameterList`,
        method: 'post',
        data
    })
}
export function GetFormulaDefectConfigListNoPaged(params) {
    return request({
        url: `/api/MES/FormulaDefectConfig/GetFormulaDefectConfigListNoPaged`,
        method: 'get',
        params
    })
}

export function GetWorkStationInfoByFormulaId(fromulaId) {
    return request({
        url: `/api/MES/Formulation/GetWorkStationInfoByFormulaId`,
        method: 'get',
        params:  {fromulaId}
    })
}
export function GetProduresByFormuId(params) {
    return request({
        url: `/api/MES/ProcessProcedures/GetProduresByFormuId`,
        method: 'get',
        params
    })
}
export function OperateProduresWorkPassStation(data) {
    return request({
        url: `/api/MES/ProcessProcedures/OperateProduresWorkPassStation`,
        method: 'post',
        data
    })
}
export function GetWorkStepByFormuIdWorkStationCode(params) {
    return request({
        url: `/api/MES/Formulation/GetWorkStepByFormuIdWorkStationCode`,
        method: 'get',
        params
    })
}


// 选择产品后加载最新bom
export function GetLastVerBom(query) {
    return request({
        url: `/api/MES/Formulation/GetLastVerBom`,
        method: 'get',
        params:  query
    })
}
// / 流程版本下拉框
export function GetNowProcessList(query={}) {
    return request({
        url: `/api/MES/Formulation/GetNowProcessList`,
        method: 'get',
        params:  query
    })
}
// /api/MES/TechnologicalProcess/GetProcessStationPassTreeAsync  左侧流程树
export function GetProcessStationPassTreeAsync(processId) {
    return request({
        url: `/api/MES/TechnologicalProcess/GetProcessStationPassTreeAsync`,
        method: 'get',
        params:  {processId}
    })
}
export function GetFormulationMaterialListForPaged(params) {
    return request({
        url: `/api/MES/FormulationMaterial/GetFormulationMaterialListForPaged`,
        method: 'get',
        params
    })
}

//查询词典
export function getDataList(query) {
    return request({
        url: `/api/MES/Formulation/GetFormulationListForPaged`,
        method: 'get',
        params:  transformAbpListQuery(query)
    })
}
///api/MES/FormulationDetail/GetFormulationDetailNoPageListAsync
export function GetFormulationDetailNoPageListAsync(query) {
    return request({
        url: `/api/MES/FormulationDetail/GetFormulationDetailNoPageListAsync`,
        method: 'get',
        params:  query
    })
}
export function getDetail(id) {
    return request({
        url: `/api/MES/Formulation/GetFormulationById`,
        method: 'get',
        params: {id}
    })
}
export function del(params) {
    return request({
        url: `/api/MES/Formulation/DeleteFormulation`,
        method: 'DELETE',
        params
    })
}
export function DeleteFormulaCheckItemConfig(params) {
    return request({
        url: `/api/MES/FormulaCheckItemConfig/DeleteFormulaCheckItemConfig`,
        method: 'DELETE',
        params
    })
}
export function DeleteFormulaEquipmentParameter(params) {
    return request({
        url: `/api/MES/FormulaEquipmentParameter/DeleteFormulaEquipmentParameter`,
        method: 'DELETE',
        params
    })
}
// /api/MES/FormulaCheckItemConfig/DeleteFormulaCheckItemConfig
export function DeleteFormulationDetail(params) {
    return request({
        url: `/api/MES/FormulationDetail/DeleteFormulationDetail`,
        method: 'DELETE',
        params
    })
}
// /api/MES/Alternative/GetAlternativeListForPaged
// /api/MES/FormulationDetail/DeleteFormulationDetail
export function add(data) {
    let str=!data.id?'CreateDraftAsync':'UpdateFormulationInfoAsync?id='+data.id,
    method=data.id?'put':'post';
    return request({
        url: `/api/MES/Formulation/${str}`,
        method,
        data
    })
}
export function UpdateFormulationDetail(data) {
    return request({
        url: '/api/MES/FormulationDetail/UpdateFormulationDetail?id='+data.id,
        method:'put',
        data
    })
}
export function UpdateStatesAsync({id}) {
    return request({
        url: '/api/MES/Formulation/UpdateStatesAsync?id='+id,
        method:'get',
       
    })
}
// /api/MES/FormulationDetail/GetFormulationMaterialTreeAsync
export function GetFormulationMaterialTreeAsync(id) {
    return request({
        url: '/api/MES/FormulationDetail/GetFormulationMaterialTreeAsync?Formulationid='+id,
        method:'get'})
}
export function GetHistoryListAsync(params) {
    return request({
        url: '/api/MES/Formulation/GetHistoryListAsync',
        method:'get',params})
}
// /api/MES/Formulation/GetHistoryListAsync
export function AddUpgradeAsync(id) {
    return request({
        url: '/api/MES/Formulation/AddUpgradeAsync?selid='+id,
        method:'get'})
}
export function GetFormulationProcessByProcessId(id) {
    return request({
        url: '/api/MES/FormulationMaterial/GetFormulationProcessByProcessId?selId='+id,
        method:'get'})
}

export function DeleteAlternative(params) {
    return request({
        url: `/api/MES/Alternative/DeleteAlternative`,
        method: 'DELETE',
        params
    })
}
export function DeleteFormulationMaterial(params) {
    return request({
        url: `/api/MES/FormulationMaterial/DeleteFormulationMaterial`,
        method: 'DELETE',
        params
    })
}
// /api/MES/FormulationMaterial/DeleteFormulationMaterial
export function GetAlternativeListForPaged(query) {
    return request({
        url: `/api/MES/Alternative/GetAlternativeListForPaged`,
        method: 'get',
        params:  transformAbpListQuery(query)
    })
}

export function CreateManyDraftAsync(data) {
    return request({
      url: '/api/MES/FormulationDetail/CreateManyDraftAsync',
      method: 'post',
      data
    })
  }
  export function AlternativeCreateManyDraftAsync(data) {
    return request({
      url: '/api/MES/Alternative/CreateManyDraftAsync',
      method: 'post',
      data
    })
  }
  export function UpdateFormulationMaterial(data,id) {
    return request({
      url: '/api/MES/FormulationMaterial/UpdateFormulationMaterial?id='+id,
      method: 'put',
      data
    })
  }
  export function UpdateFormulaCheckItemConfig(data,id) {
    return request({
      url: '/api/MES/FormulaCheckItemConfig/UpdateNumAsync?id='+id,
      method: 'put',
      data
    })
  }
  export function equipmentParameterUpdateNumAsync(data,id) {
    return request({
      url: '/api/MES/FormulaEquipmentParameter/UpdateNumAsync?id='+id,
      method: 'put',
      data
    })
  }

  export function PublicDraftAsync(id) {
    return request({
      url: '/api/MES/Formulation/PublicDraftAsync?id='+id,
      method: 'get',
    //   params: transformAbpListQuery(query)
    })
  }
export function GetMaterialInformationListForPaged(query) {
  return request({
    url: '/api/MES/MaterialInformation/GetMaterialInformationListForPaged',
    method: 'get',
    params: transformAbpListQuery(query)
  })
}
export function FormulationMaterialCreateManyDraftAsync(data) {
    return request({
      url: '/api/MES/FormulationMaterial/CreateManyDraftAsync',
      method: 'post',
      data
    })
  }


  export function getHasMateNumByFormuId(query) {
    return request({
      url: '/api/MES/FormulationMaterial/GetHasMateNumByFormuId',
      method: 'get',
      params: query
    })
  }
  