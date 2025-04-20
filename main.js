/*
 * @Descripttion: 
 * @version: 
 * 
 * @Date: 2023-06-19 10:25:28
 * @LastEditors: wangkaiyue 123456
 * @LastEditTime: 2023-08-10 10:00:25
 */
import Vue from 'vue'

import Cookies from 'js-cookie'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets

import Element from 'element-ui'
import './styles/element-variables.scss'

import '@/styles/index.scss' // global css

import App from './App'
import store from './store'
import router from './router'

import i18n from './lang' // internationalization
import './assets/icons' // icon
import './permission' // permission control
import './utils/error-log' // error log
import './utils/filter' // global filter
import ToLeadonlyfile from './components/ToLeadonlyfile'
import ToLead from './components/ToLead'
import * as filters from './filters' // global filters
import { channelInputLimit, parseTime,getTimes } from "@/utils/index";
import 'diagram-js-minimap/assets/diagram-js-minimap.css'
import elDragDialog from "@/directive/el-drag-dialog/index.js";
import downloadBtn from '@/components/downloadBtn'
import importBtn from '@/components/importBtn'
Vue.use(elDragDialog)
import dict from '@/utils/Dict'// 数据字典
Vue.use(dict)
import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts
import CommonTable from '@/components/CommonTable/index.vue'
import CommonForm from '@/components/CommonForm/index.vue'
import CommonDetail from '@/components/CommonDetail/index.vue'
import stationComp from '@/components/stationComp'
import uploadFile from '@/components/uploadFile'
import { gantt } from 'dhtmlx-gantt'  // 组件插件
import 'dhtmlx-gantt/codebase/dhtmlxgantt.css' // 组件样式

// 字典标签组件
import DictTag from '@/components/DictTag'
import empty from '@/components/Empty'
import warningInfo from '@/components/warningInfo'
import dictSelect from '@/components/dictSelect'
import allSupplierList from '@/components/allSupplierList'
import factoryTree from '@/components/factoryTree'
import user from '@/components/user'
import userSelect from '@/components/userSelect'
import commonTitle from '@/components/commonTitle'
import timeRangePicker from '@/components/timeRangePicker'
import {Button} from 'element-ui'
import buttonDebounce from './mixins/buttonDebounce'
import {getList,getDetail,del,addOrUpdate } from '@/api/CRUD'
Vue.prototype.$getList=getList
Vue.prototype.$getDetail=getDetail
Vue.prototype.$del=del
Vue.prototype.$addOrUpdate=addOrUpdate
Vue.component("ElButton",Button).mixin(buttonDebounce)
Vue.component('timeRangePicker', timeRangePicker)
Vue.component('warningInfo',warningInfo)
Vue.component('factoryTree', factoryTree)
Vue.component('commonTitle',commonTitle)
Vue.component('userSelect', userSelect)
Vue.component('user', user)//根据id或工号获取名称
Vue.component('dictSelect', dictSelect)//dict选择
Vue.component('allSupplierList', allSupplierList)//供应商选择，包含禁用项
Vue.component('stationComp', stationComp)//线体、工位联动选择
Vue.component('uploadFile', uploadFile)
Vue.component('importBtn', importBtn) //导入组件
Vue.component('elEmpty', empty) //无数据状态显示组件
Vue.component('downloadBtn', downloadBtn)//导出组件
Vue.component('CommonTable', CommonTable)
Vue.component('CommonForm', CommonForm)
Vue.component('CommonDetail', CommonDetail)
Vue.component('DictTag', DictTag)
import stateTag from '@/components/stateTag'
Vue.component('stateTag', stateTag)
Vue.directive('draggable', {
  bind(el, binding, vnode) {
    let dragging = false;
    let startX, startY, offsetX, offsetY;
 
    el.style.position = 'absolute';
 
    el.addEventListener('mousedown', function(e) {
      dragging = true;
      startX = e.clientX;
      startY = e.clientY;
      offsetX = el.offsetLeft;
      offsetY = el.offsetTop;
 
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    });
 
    function mouseMoveHandler(e) {
      if (dragging) {
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        el.style.left = offsetX + dx + 'px';
        el.style.top = offsetY + dy + 'px';
      }
    }
 
    function mouseUpHandler() {
      dragging = false;
      document.removeEventListener('mousemove', mouseMoveHandler);
      document.removeEventListener('mouseup', mouseUpHandler);
    }
  }
});
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
Vue.prototype.$getUserName=(data)=>{
  return `${data.surname||''}${data.name||''}(${data.userName})`
}
Vue.prototype.$projectNo=process.env.VUE_APP_PRO_NAME
Vue.use(dataV)
/**
 * If you don't want to use mock-server
 * you want to use MockJs for mock api
 * you can execute: mockXHR()
 *
 * Currently MockJs will be used in the production environment,
 * please remove it before going online ! ! !
 */
if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}
import preventReClick from "./utils/throttle"
import directive from './directive' // directive
Vue.use(directive)
Vue.use(Element, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})
Vue.prototype.channelInputLimit = channelInputLimit
Vue.prototype.parseTime = parseTime
Vue.prototype.getTimes = getTimes
Vue.prototype.$success = (text) => {
  Element.Message.success(text || '操作成功')
}
Vue.prototype.$error = (text) => {
  Element.Message.error(text || '操作失败')
}
// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
Vue.component('ToLeadonlyfile', ToLeadonlyfile)
Vue.component('ToLead', ToLead)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})
