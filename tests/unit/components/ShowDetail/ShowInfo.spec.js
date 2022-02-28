import { shallowMount } from '@vue/test-utils'
import ShowInfo from "@/components/ShowDetail/ShowInfo"


describe('ShowInfo.vue', () => {

  it('renders text based on "info" prop', async () => {
    const info = { name:'Gotham', summary:'The good. The evil. The beginning.',
                   genres:['Action', 'Drama'], schedule:{days:[]} }
    const wrapper = shallowMount(ShowInfo, { propsData: {info} })
    expect(wrapper.text()).toContain('Gotham')
    expect(wrapper.text()).toContain('Action | Drama')
  })
})
