import { shallowMount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Dashboard from '@/views/Dashboard'

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({data: [
      { id: 1, genres: ['Action', 'Thriller'], name: 'Constantine', rating: { average: 5 } },
      { id: 1, genres: ['Action'], name: 'Gotham', rating: { average: 8 } }
    ]}))
}))

it('fetches async when component is created', async () => {
  const wrapper = shallowMount(Dashboard)
  await flushPromises()
  expect(wrapper.vm.tvShows['Action'].length).toBe(2)
  expect(wrapper.vm.tvShows['Thriller'].length).toBe(1)
})
