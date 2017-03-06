import {
  TOGGLE_SEARCH,
  SET_SEARCH_QUERY,
  SET_SEARCH_RESULTS,
  INCREMENT_SEARCH_RESULTS_PAGE,
  DECREMENT_SEARCH_RESULTS_PAGE,
  RESET_SEARCH_RESULTS_PAGE,
  // APPEND_SEARCH_RESULTS,
  SET_SEARCH_LOADING
} from './actions'

const defaultState = {
  show: false,
  query: '',
  results: [],
  page: 0,
  loading: false
}

module.exports = function (state, action = {}) {
  state = Object.assign({}, defaultState, state)
  switch (action.type) {
    case TOGGLE_SEARCH:
      return Object.assign(state, { show: !state.show })
    case SET_SEARCH_QUERY:
      let { query } = action
      if (query == null) query = ''
      return Object.assign(state, { query })
    case SET_SEARCH_RESULTS:
      let { results } = action
      if (results == null) results = []
      return Object.assign(state, { results })
    // case APPEND_SEARCH_RESULTS:
    //   const newResults = action.results || []
    //   return Object.assign(
    //     state,
    //     { results: state.results.concat(newResults) }
    //   )
    case SET_SEARCH_LOADING:
      return Object.assign(state, { loading: action.value })
    case INCREMENT_SEARCH_RESULTS_PAGE:
      return Object.assign(state, { page: state.page + 1 })
    case DECREMENT_SEARCH_RESULTS_PAGE:
      return Object.assign(state, { page: state.page - 1 })
    case RESET_SEARCH_RESULTS_PAGE:
      return Object.assign(state, { page: defaultState.page })
    default:
      return state
  }
}
