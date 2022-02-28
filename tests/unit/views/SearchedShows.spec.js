import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from "vue-router"
import SearchedShows from "@/views/SearchedShows"

const localVue = createLocalVue()
localVue.use(Vuex)
localVue.use(VueRouter)
const routes = [{ path: '/search', component: SearchedShows, name:'Searched Shows' }]
const router = new VueRouter({ routes })
router.push({name: 'Searched Shows', query:{q: 'robot'}}).then()

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({data:
      [{show:{id:1, schedule:{days:[]}}}, {show:{id:2, schedule:{days:[]}}}]
  }))
}))
import flushPromises from "flush-promises"

describe('SearchedShows.vue', () => {
  let mutations, store

  beforeEach(() => {
    mutations = {
      setSearch: jest.fn()
    }
    store = new Vuex.Store({ mutations })
  })

  it('commit "setSearch" on component create', () => {
    shallowMount(SearchedShows, { localVue, store, router })
    // The second argument of the first call to the function was 'robot'
    expect(mutations.setSearch.mock.calls[0][1]).toBe('robot')
  })
  it('fetches async when call "searchTVShows" method', async () => {
    const wrapper = shallowMount(SearchedShows, {localVue, store, router})
    wrapper.vm.searchTVShows('rollins')
    await flushPromises()
    expect(wrapper.vm.shows.length).toBe(2)
  })
})

