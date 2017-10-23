import {mount} from 'vue-test-utils'
import Overview from 'src/components/Dashboard/Views/Dashboard/Overview.vue'

function filterChildren(children, name){
  return children.filter((child)=> child.$options.name === name)
}

describe('Overview.vue', () => {
  it('should contain 4 stats cards 3 chart cards and 4 circle charts', () => {
    const wrapper = mount(Overview);
    const children = wrapper.vm.$children
    const statsCards = filterChildren(children, 'stats-card').length;
    const chartCards = filterChildren(children, 'chart-card').length;
    const circleChartCards = filterChildren(children, 'circle-chart-card').length;
    expect(statsCards).to.equal(4)
    expect(chartCards).to.equal(1)
    expect(circleChartCards).to.equal(4)

  })
})
