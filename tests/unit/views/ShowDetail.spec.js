import { shallowMount, createLocalVue } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import ShowDetail from "@/views/ShowDetail";
import VueRouter from "vue-router";

const localVue = createLocalVue()
localVue.use(VueRouter)
const routes = [{ path: '/shows/:id', component: ShowDetail }]
const router = new VueRouter({ routes })

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({data:
      {id:1, name:'Constantine', _embedded: { seasons: [], cast: [] }}
  }))
}))

it('fetches async when component is created', async () => {
  const wrapper = shallowMount(ShowDetail, {localVue, router})
  await flushPromises()
  expect(wrapper.text()).toContain('Constantine')
})
