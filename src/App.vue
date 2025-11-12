<template>
  <fieldset v-for="item in pages">
    <legend>{{ item.title }}</legend>
    <component :is="item.component"></component>
  </fieldset>
</template>
<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
// 页面
const pages: { title: string; component: ReturnType<typeof defineAsyncComponent> }[] = [
  {
    title: '深色/浅色主题切换',
    component: defineAsyncComponent(() => import('./pages/dark/index.vue'))
  },
  {
    title: 'Button组件封装',
    component: defineAsyncComponent(() => import('./pages/button/index.vue'))
  }
]
</script>
<style lang="less" scoped></style>
