import { defineComponent, h } from 'vue'
// 引入样式，这里就不支持局部样式了，或者可以考虑像React一样使用 CSS Module
import '../style.less'
/**
 * 使用defineComponent和h函数来封装按钮组件，这是纯js的，但是在props定义时，ts支持性较差
 * Vue3官方文档（https://cn.vuejs.org/api/general.html#definecomponent）中，提到：在将来计划提供一个 Babel 插件，自动推断并注入运行时 props (就像在单文件组件中的 defineProps 一样)，以便省略运行时 props 的声明
 */
export default defineComponent(
  // 第一个参数是props，第二个参数是ctx上下文，其中可以拿到slots、emits和attrs等，这里只需要用到slots
  (props, { slots }) => {
    return () => {
      // 通过h函数创建一个VNode 并返回
      return h(
        'button',
        {
          class: `btn btn-${props.type ?? 'default'}`
        },
        {
          // 使用默认插槽，需要注意插槽是一个方法，但是你需要先判断这个方法是否存在
          default: () => slots.default?.()
        }
      )
    }
  },
  {
    // 这里是vue的props定义，不是TS的，TS支持性很差
    props: {
      type: String
    }
  }
)
