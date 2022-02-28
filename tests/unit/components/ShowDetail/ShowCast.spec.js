import { shallowMount } from '@vue/test-utils'
import ShowCast from "@/components/ShowDetail/ShowCast"


describe('ShowCast.vue', () => {

  it('renders text based on "cast" prop', async () => {
    const cast = [ {id: 1, person:{name:'James Calaway'}, character:{}},
                   {id: 2, person:{name:'Tom Hardy'}, character:{}} ]
    const wrapper = shallowMount(ShowCast, { propsData: {cast} })
    const cardArray = wrapper.findAll('div.card')
    expect(cardArray.length).toBe(2)
    expect(wrapper.text()).toContain('Tom Hardy')
  })
})
