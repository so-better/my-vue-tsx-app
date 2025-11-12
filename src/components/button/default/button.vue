<template>
  <button class="btn" :class="{ [`btn-${type}`]: true }">
    <!-- 默认插槽 -->
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
/**
 * 使用vue模板语法的组件封装较为简单，同时TS的支持性很好
 */
import type { Props } from '../props'

/**
 * defineProps用于定义props，这里是vue的类型声明写法
 * withDefaults用来设置默认值，只能用于defineProps的类型声明写法（不是用ts的话不要用这个方法）
 */
withDefaults(defineProps<Props>(), {
  type: 'default'
})

//这是传统写法，也就是非ts的写法，直接使用vue自己的props声明，即运行时的props配置
// defineProps({
//   type: {
//     type: String,
//     default: 'default'
//   }
// })
</script>
<!-- 引入less文件 -->
<style scoped src="../style.less"></style>
