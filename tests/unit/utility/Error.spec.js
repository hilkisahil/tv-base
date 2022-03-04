import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import Error from "@/components/utility/Error";

describe('Error.vue', () => {
  it('renders text based on props', async () => {
    const wrapper = shallowMount(Error, {
      stubs: { RouterLink: RouterLinkStub }
    })
    expect(wrapper.vm.error).toEqual({statusCode: 404})
    expect(wrapper.text()).toMatch('Page not found')
    expect(wrapper.findComponent(RouterLinkStub).props().to).toBe('/dashboard')

    await wrapper.setProps({error: {statusCode: 500}})
    expect(wrapper.text()).toMatch('An error occurred')
  })
})
