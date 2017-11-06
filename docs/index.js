import './docs.scss'
import {create} from './demo-block/plugin'
import Components from '../src/components/UIComponents'
const Vue = window.Vue
import { directive as vClickOutside } from '../node_modules/vue-clickaway'
import VTooltip from '../node_modules/v-tooltip'
import '../node_modules/vue-notifyjs/themes/default.css'
import Chartist from '../node_modules/chartist'
import VueNotify from '../node_modules/vue-notifyjs'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyAamVCoyQ4AuvBpxVRMs9P-HFkfPVQj0Kw'
  }
})

Vue.directive('click-outside', vClickOutside)
Vue.directive(VTooltip)
Vue.use(VueNotify)
window.Chartist = Chartist

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
