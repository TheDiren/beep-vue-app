import createResource from '@utils/store/vuex-resource'

const resource = createResource({ path: 'locations' })

// Add some custom functionality to the resource module
export const state = {
  ...resource.state,
  apiaries: [],
  apiaryListView: 'listView',
  apiaryEdited: false,
  hiveSearch: null,
}
export const getters = {
  ...resource.getters,
  apiaries: (state) => {
    return state.apiaries
  },
  apiaryListView: (state) => {
    return state.apiaryListView
  },
  apiaryEdited: (state) => {
    return state.apiaryEdited
  },
  hiveSearch: (state) => {
    return state.hiveSearch
  },
}
export const mutations = {
  ...resource.mutations,
  setApiaries: function(state, payload) {
    state.apiaries = payload
  },
  setApiaryEdited: function(state, bool) {
    state.apiaryEdited = bool
  },
  setApiaryListView: function(state, string) {
    state.apiaryListView = string
  },
  setData: function(state, payload) {
    state[payload.prop] = payload.value
  },
  resetState: function(state) {
    state.apiaries = []
    state.apiaryListView = 'listView'
    state.apiaryEdited = false
    state.hiveSearch = null
  },
}
export const actions = {
  ...resource.actions,
}
