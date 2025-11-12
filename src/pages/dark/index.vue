<template>
  <DefaultButton @click="changeTheme">切换</DefaultButton>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import DefaultButton from '../../components/button/default/button.vue'

// 定义深色主题开关，实际项目中可以缓存到pina或者vuex结合本地localStorage/sessionStorage
const dark = ref(localStorage.getItem('dark') === 'true')

// 开启或者关闭深色主题的方法
const changeTheme = () => (dark.value = !dark.value)

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
</script>
