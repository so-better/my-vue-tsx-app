<template>
  <fieldset>
    <legend>使用Vue模板封装的按钮组件</legend>
    <DefaultButton>按钮</DefaultButton>
    <DefaultButton type="info">按钮</DefaultButton>
    <DefaultButton type="primary">按钮</DefaultButton>
    <DefaultButton type="success">按钮</DefaultButton>
    <DefaultButton type="danger">按钮</DefaultButton>
    <DefaultButton type="warning">按钮</DefaultButton>
  </fieldset>
  <fieldset>
    <legend>使用defineComponent和h函数封装的按钮组件</legend>
    <HButton type="default">按钮</HButton>
    <HButton type="info">按钮</HButton>
    <HButton type="primary">按钮</HButton>
    <HButton type="success">按钮</HButton>
    <HButton type="danger">按钮</HButton>
    <HButton type="warning">按钮</HButton>
  </fieldset>
  <fieldset>
    <legend>使用defineComponent和tsx封装的按钮组件</legend>
    <TsxButton type="default">按钮</TsxButton>
    <TsxButton type="info">按钮</TsxButton>
    <TsxButton type="primary">按钮</TsxButton>
    <TsxButton type="success">按钮</TsxButton>
    <TsxButton type="danger">按钮</TsxButton>
    <TsxButton type="warning">按钮</TsxButton>
  </fieldset>
</template>
<script setup lang="ts">
import DefaultButton from '../../components/button/default/button.vue'
import HButton from '../../components/button/h/button'
import TsxButton from '../../components/button/tsx/button'
</script>
