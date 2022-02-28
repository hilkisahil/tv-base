import { shallowMount } from '@vue/test-utils'
import ShowSeasons from "@/components/ShowDetail/ShowSeasons";


describe('ShowSeasons.vue', () => {

  it('renders text based on "seasons" prop', async () => {
    const seasons = [ {id: 1, name:'Heroes: Gone', summary:'People with extra ordinary powers gather'},
                      {id: 2, name:'Heroes: Revive'} ]
    const wrapper = shallowMount(ShowSeasons, { propsData: {seasons} })
    const cardArray = wrapper.findAll('div.card')
    expect(cardArray.length).toBe(2)
    expect(wrapper.text()).toContain('People with')
  })
})
