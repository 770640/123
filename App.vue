<!--
 * @Descripttion:
 * @version:
 * 
 * @Date: 2023-06-19 10:25:28
 
 * @LastEditTime: 2023-06-19 11:04:27
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  created(){
   console.warn=()=>{}
   this.$store.dispatch('basicData/deptsListAction')
  }
}
</script>
<style lang="scss">
.head-title{
  padding-bottom: 10px;
  position: relative;
  &::before{
    content: "";
    width: 4px;
    height: 16px;
    background: #165DFF;
    position: relative;
    display: inline-block;
    margin-right: 5px;
    top: 3px;
    border-radius:10px;
  }
}
</style>

