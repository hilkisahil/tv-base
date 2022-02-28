import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from "vue-router"
import App from '@/App'

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
const router = new VueRouter({ routes: [] })

describe('App.vue', () => {
  let store, mutations

  beforeEach(() => {
    mutations = {
      setSearch: jest.fn()
    }
    store = new Vuex.Store({ mutations })
  })
  it('Click on Home button calls our method "redirectToDashboard"', async () => {
    const mockMethod = jest.spyOn(App.methods, 'redirectToDashboard')
    const wrapper = shallowMount(App, { localVue, store, router })
    await wrapper.find('ul > li > a.nav-link').trigger('click')
    expect(mockMethod).toHaveBeenCalled()
  })
  it('method "redirectToSearch" triggers commit if search is not empty', async () => {
    const wrapper = shallowMount(App, { localVue, store, router })
    wrapper.vm.search = 'rollins'
    await wrapper.vm.redirectToSearch()
    expect(mutations.setSearch).toHaveBeenCalled()
  })
  it('method "redirectToSearch" not triggers commit if search is empty', async () => {
    const wrapper = shallowMount(App, { localVue, store, router })
    wrapper.vm.search = ''
    await wrapper.vm.redirectToSearch()
    expect(mutations.setSearch).not.toHaveBeenCalled()
  })
})
