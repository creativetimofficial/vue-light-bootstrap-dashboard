import {mount, createLocalVue} from 'vue-test-utils'
import Overview from 'src/components/Dashboard/Views/Overview.vue'
import VTooltip from 'v-tooltip'

let localVue = createLocalVue()
localVue.use(VTooltip)

function filterChildren (children, name) {
  return children.filter((child) => child.$options.name === name)
}

describe('Overview.vue', () => {
  it('should contain 4 stats cards 3 chart cards and 4 circle charts', () => {
    const wrapper = mount(Overview, {localVue})
    const children = wrapper.vm.$children
    const statsCards = filterChildren(children, 'stats-card').length
    const chartCards = filterChildren(children, 'chart-card').length
    expect(statsCards).to.equal(4)
    expect(chartCards).to.equal(3)
  })
})
