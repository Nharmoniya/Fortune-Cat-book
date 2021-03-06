import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

// @ts-ignore
describe('HelloWorld.vue', () => {
  // @ts-ignore
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    // @ts-ignore
    expect(wrapper.text()).toMatch(msg)
  })
})