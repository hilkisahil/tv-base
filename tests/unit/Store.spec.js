import mutations from "@/store/mutations";

test('"SetSearch" set "state.search" by payload', () => {
  const state = {
    search: ''
  }
  const payload = 'rollins'
  mutations.setSearch(state, payload)
  expect(state.search).toBe(payload)
})
