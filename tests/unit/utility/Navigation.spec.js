import {createLocalVue, shallowMount} from '@vue/test-utils'
import VueRouter from "vue-router";
import Navigation from "@/components/utility/Navigation";

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter({ routes: [] })

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

  it('Click on anchor tag, trigger "redirect" method', async () => {
    const mockMethod = jest.spyOn(Navigation.methods, 'redirect')
    const items = [{text:'Home', redirectTo:'/dashboard'}, {text:'Search'}]
    const wrapper = shallowMount(Navigation, { localVue, router, propsData: {items} })
    await wrapper.findAll('a').at(0).trigger('click')
    expect(mockMethod).toHaveBeenCalled()
  })
})
