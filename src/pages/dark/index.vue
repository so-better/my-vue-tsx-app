<template>
  <DefaultButton :dark="dark" @click="changeTheme">切换</DefaultButton>
</template>
<script setup lang="ts">
import { inject, type Ref } from 'vue'
import DefaultButton from '../../components/button/default/button.vue'

// 从inject获取App.vue透传的dark值
const dark = inject<Ref<boolean>>('dark')!

// 开启或者关闭深色主题的方法
const changeTheme = () => (dark.value = !dark.value)
</script>
