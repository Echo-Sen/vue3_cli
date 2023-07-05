import { App } from 'vue'
import SvgIcon from '@/components/SvgIcon/index.vue'

type componentsSelection = {
  [key: string]: any
}
const allComponents: componentsSelection = { SvgIcon }

export default {
  install(app: App) {
    Object.keys(allComponents).forEach((item: string) => {
      const component = allComponents[item]
      app.component(item, component)
    })
  },
}
