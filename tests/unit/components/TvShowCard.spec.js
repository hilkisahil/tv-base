import { shallowMount, createLocalVue } from '@vue/test-utils'
import VueRouter from "vue-router"
import TvShowCard from "@/components/TvShowCard"

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter({ routes: [] })

describe('TvShowCard.vue', () => {

  it('Click on container calls our method "redirectToShowDetail"', async () => {
    const mockMethod = jest.spyOn(TvShowCard.methods, 'redirectToShowDetail')
    const show = { id:2, name: 'Ronin', image:{}, rating:{} }
    const wrapper = shallowMount(TvShowCard, { localVue, router, propsData: {show} })
    await wrapper.find('div.hover-effect').trigger('click')
    expect(mockMethod).toHaveBeenCalledWith(2)
  })
})
