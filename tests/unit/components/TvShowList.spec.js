import {mount, shallowMount} from '@vue/test-utils'
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

  it('Click on carousel previous/next button will trigger "slideLeft/slideRight" method', async () => {
    const mSlideLeft = jest.spyOn(TvShowList.methods, 'slideLeft')
    const mSlideRight = jest.spyOn(TvShowList.methods, 'slideRight')
    const shows = [{id: 1, image:{}, rating:{}}, {id: 2, image:{}, rating: {}}], genre = 'Drama'
    const wrapper = mount(TvShowList, { propsData: {shows, genre} })
    await wrapper.find('div.swiper-button-prev').trigger('click')
    expect(mSlideLeft).toHaveBeenCalled()
    await wrapper.find('div.swiper-button-next').trigger('click')
    expect(mSlideRight).toHaveBeenCalled()
  })
})
