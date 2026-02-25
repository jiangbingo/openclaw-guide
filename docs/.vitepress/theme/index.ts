import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import PaywallCTA from './components/PaywallCTA.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // 可在此添加布局插槽
    })
  },
  enhanceApp({ app }) {
    // 注册全局组件
    app.component('PaywallCTA', PaywallCTA)
  }
}
