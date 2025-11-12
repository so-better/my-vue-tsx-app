<template>
  <fieldset v-for="item in pages">
    <legend>{{ item.title }}</legend>
    <component :is="item.component"></component>
  </fieldset>
</template>
<script setup lang="ts">
import { defineAsyncComponent, provide, ref, watch } from 'vue'

// 定义深色主题开关，实际项目中可以缓存到pina或者vuex结合本地localStorage/sessionStorage
const dark = ref(localStorage.getItem('dark') === 'true')

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

// 监听开关变化，进行开启或者关闭深色主题
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

provide('dark', dark)
</script>
<style lang="less" scoped></style>
