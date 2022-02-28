import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Error from "@/components/utility/Error";

describe('Error.vue', () => {
  it('renders text based on props', () => {
    const error = { statusCode: 500 }
    const wrapper = shallowMount(Error, {
      propsData: { error },
      stubs: { RouterLink: RouterLinkStub }
    })
    expect(wrapper.text()).toMatch('An error occurred')
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/dashboard')
  })
})
