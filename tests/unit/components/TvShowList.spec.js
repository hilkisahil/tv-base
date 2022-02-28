import { shallowMount } from '@vue/test-utils'
import TvShowList from "@/components/TvShowList"
import TvShowCard from "@/components/TvShowCard"


describe('TvShowList.vue', () => {

  it('renders number of TvShowCard based on "shows" prop', async () => {
    const shows = [{id: 1}, {id: 2}], genre = 'Drama'
    const wrapper = shallowMount(TvShowList, { propsData: {shows, genre} })
    const cardArray = wrapper.findAllComponents(TvShowCard)
    expect(cardArray.length).toBe(2)
    expect(wrapper.text()).toContain(genre)
  })
})
