import { shallowMount } from '@vue/test-utils'
import Navigation from "@/components/utility/Navigation";

describe('Navigation.vue', () => {
  it('renders text and anchor tag based on props', () => {
    const items = [{text:'Home', redirectTo:'/dashboard'}, {text:'Search'}]
    const wrapper = shallowMount(Navigation, {
      propsData: { items }
    })
    expect(wrapper.text()).toMatch('Home')
    const a = wrapper.findAll('a').at(0)
    expect(a.exists()).toBe(true)
  })
})
