/**
 * 按钮组件的props的TS类型声明
 */
export interface Props {
  /**
   * 按钮样式
   */
  type?: 'primary' | 'default' | 'success' | 'info' | 'danger' | 'warning'
  /**
   * 是否深色模式
   */
  dark?: boolean
  /**
   * 默认样式下的激活颜色，仅在type='default'时生效
   */
  active?: 'primary' | 'success' | 'info' | 'danger' | 'warning'
  /**
   * 按钮大小
   */
  size?: 'small' | 'medium' | 'large'
}
