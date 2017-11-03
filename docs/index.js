import './docs.scss'
import {create} from './demo-block/plugin'
import Components from '../src/components/UIComponents'
const Vue = window.Vue
import { directive as vClickOutside } from '../node_modules/vue-clickaway'
import VTooltip from '../node_modules/v-tooltip'
import '../node_modules/vue-notifyjs/themes/default.css'
import VueNotify from '../node_modules/vue-notifyjs'
window.Vue.directive('click-outside', vClickOutside)
window.Vue.directive(VTooltip)
window.Vue.use(VueNotify)

for (let key in Components) {
  const toRegister = Components[key]
  if (toRegister.install) {
    Vue.use(toRegister)
  } else {
    Vue.component(toRegister.name, toRegister)
  }
}
window.DemoBoxVue = {
  create
}
