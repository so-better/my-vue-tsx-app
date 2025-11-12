<template>
  <button class="btn" :class="[`btn-${type}`, `btn-${size}`, `btn-active-${active}`, { 'btn-dark': dark }]">
    <!-- 默认插槽 -->
    <slot></slot>
  </button>
</template>
<script lang="ts" setup>
/**
 * 使用vue模板语法的组件封装较为简单，同时TS的支持性很好
 */
// import type { PropType } from 'vue'
import type { Props } from '../props'

/**
 * defineProps用于定义props，这里是vue的类型声明写法
 * withDefaults用来设置默认值，只能用于defineProps的类型声明写法（不是用ts的话不要用这个方法）
 */
withDefaults(defineProps<Props>(), {
  type: 'default',
  dark: false,
  active: 'primary',
  size: 'medium'
})

/**
 * 这是传统写法，也就是非ts的写法，直接使用vue自己的props声明，即运行时的props配置
 * as 后面的写法是为了声明TS类型
 */
// defineProps({
//   type: {
//     type: String as PropType<Props['type']>,
//     default: 'default'
//   },
//   dark: {
//     type: Boolean as PropType<Props['dark']>,
//     default: false
//   },
//   active: {
//     type: String as PropType<Props['active']>,
//     default: 'primary'
//   },
//   size: {
//     type: String as PropType<Props['size']>,
//     default: 'medium'
//   }
// })
</script>
<!-- 引入less文件 -->
<style scoped src="../style.less"></style>
