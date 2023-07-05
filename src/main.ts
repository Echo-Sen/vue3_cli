import { createApp } from 'vue'
import App from './App.vue'
// svg
import 'virtual:svg-icons-register'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)
// 全局注册组件
import globalComponents from './components'
app.use(globalComponents)
// 国际化
// @ts-ignore
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
app.use(ElementPlus, {
  locale: zhCn,
})
// 引入全局样式
import '@/styles/index.scss'

// 引入axios
import axios from 'axios'
axios({
  url: '/api/user/login',
  method: 'post',
  data: {
    username: 'admin',
    password: '111111',
  },
})
app.mount('#app')
