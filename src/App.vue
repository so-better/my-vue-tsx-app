<template>
  <div style="padding: 20px">
    <fieldset>
      <legend>深色/浅色主题切换</legend>
      <DefaultButton @click="changeTheme">切换</DefaultButton>
    </fieldset>
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
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import DefaultButton from './components/button/default/button.vue'
import HButton from './components/button/h/button'
import TsxButton from './components/button/tsx/button'

const dark = ref(localStorage.getItem('dark') === 'true')

const changeTheme = () => (dark.value = !dark.value)

watch(
  () => dark.value,
  newValue => {
    // 深色主题
    if (newValue) {
      document.documentElement.setAttribute('dark', '')
      localStorage.setItem('dark', 'true')
    } else {
      document.documentElement.removeAttribute('dark')
      localStorage.setItem('dark', 'false')
    }
  },
  { immediate: true }
)
</script>
<style lang="less" scoped>
fieldset {
  color: var(--font-color);
  border-color: var(--border-color);
}
</style>
