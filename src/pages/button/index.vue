<template>
  <fieldset>
    <legend>使用Vue模板封装的按钮组件</legend>
    <div class="grid">
      <DefaultButton :dark="dark">默认按钮</DefaultButton>
      <DefaultButton :dark="dark" active="success">默认按钮</DefaultButton>
      <DefaultButton :dark="dark" active="info">默认按钮</DefaultButton>
      <DefaultButton :dark="dark" active="warning">默认按钮</DefaultButton>
      <DefaultButton :dark="dark" active="danger">默认按钮</DefaultButton>
      <DefaultButton :dark="dark" type="info">info按钮</DefaultButton>
      <DefaultButton :dark="dark" type="primary">primary按钮</DefaultButton>
      <DefaultButton :dark="dark" type="success">success按钮</DefaultButton>
      <DefaultButton :dark="dark" type="danger">danger按钮</DefaultButton>
      <DefaultButton :dark="dark" type="warning">warning按钮</DefaultButton>
      <DefaultButton :dark="dark" size="small">较小的按钮</DefaultButton>
      <DefaultButton :dark="dark" size="large">较大的按钮</DefaultButton>
    </div>
  </fieldset>
  <fieldset>
    <legend>使用defineComponent和h函数封装的按钮组件</legend>
    <div class="grid">
      <HButton :dark="dark">默认按钮</HButton>
      <HButton :dark="dark" active="success">默认按钮</HButton>
      <HButton :dark="dark" active="info">默认按钮</HButton>
      <HButton :dark="dark" active="warning">默认按钮</HButton>
      <HButton :dark="dark" active="danger">默认按钮</HButton>
      <HButton :dark="dark" type="info">info按钮</HButton>
      <HButton :dark="dark" type="primary">primary按钮</HButton>
      <HButton :dark="dark" type="success">success按钮</HButton>
      <HButton :dark="dark" type="danger">danger按钮</HButton>
      <HButton :dark="dark" type="warning">warning按钮</HButton>
      <HButton :dark="dark" size="small">较小的按钮</HButton>
      <HButton :dark="dark" size="large">较大的按钮</HButton>
    </div>
  </fieldset>
  <fieldset>
    <legend>使用defineComponent和tsx封装的按钮组件</legend>
    <div class="grid">
      <TsxButton :dark="dark">默认按钮</TsxButton>
      <TsxButton :dark="dark" active="success">默认按钮</TsxButton>
      <TsxButton :dark="dark" active="info">默认按钮</TsxButton>
      <TsxButton :dark="dark" active="warning">默认按钮</TsxButton>
      <TsxButton :dark="dark" active="danger">默认按钮</TsxButton>
      <TsxButton :dark="dark" type="info">info按钮</TsxButton>
      <TsxButton :dark="dark" type="primary">primary按钮</TsxButton>
      <TsxButton :dark="dark" type="success">success按钮</TsxButton>
      <TsxButton :dark="dark" type="danger">danger按钮</TsxButton>
      <TsxButton :dark="dark" type="warning">warning按钮</TsxButton>
      <TsxButton :dark="dark" size="small">较小的按钮</TsxButton>
      <TsxButton :dark="dark" size="large">较大的按钮</TsxButton>
    </div>
  </fieldset>
</template>
<script setup lang="ts">
import { inject, type Ref } from 'vue'
import DefaultButton from '../../components/button/default/button.vue'
import HButton from '../../components/button/h/button'
import TsxButton from '../../components/button/tsx/button'

// 通过inject获取App.vue透传的dark值
const dark = inject<Ref<boolean>>('dark')!
</script>
