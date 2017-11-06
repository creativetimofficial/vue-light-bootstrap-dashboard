import {mount} from 'vue-test-utils'
import FormGroupInput from 'src/components/UIComponents/Inputs/formGroupInput.vue'

describe('form group input', () => {
  it('should work with v-model', () => {
    const wrapper = mount(FormGroupInput, {
      propsData: {
        value: 'initial'
      }
    })
    const input = wrapper.find('input')
    input.element.value = 'new value'
    input.trigger('input')
    const emitted = wrapper.emitted()
    expect(emitted.input.length).to.equal(1)
    expect(emitted.input[0]).to.deep.equal(['new value'])
  })
  it('should have a label', () => {
    const wrapper = mount(FormGroupInput, {
      propsData: {
        label: 'my label'
      }
    })

    const label = wrapper.find('label')
    expect(label.text().trim()).to.equal('my label')
  })
})
