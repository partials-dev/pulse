import { connect } from 'react-redux'
import QueryBar from '../../look/query-bar'
import { SET_SEARCH_QUERY, SET_SEARCH_RESULTS, RESET_SEARCH_RESULTS_PAGE, SET_SEARCH_LOADING } from '../../../reducers/actions'
import searchGifs from './search-gifs'

var wasPreviouslyShowing = null
function shouldFocus (show) {
  const answer = show && !wasPreviouslyShowing
  wasPreviouslyShowing = show
  return answer
}

function mapStateToProps ({ search: { show, query } }) {
  const gotRef = textInput => {
    if (shouldFocus(show)) {
      textInput.focus()
    }
  }
  return { value: query, gotRef }
}

function mapDispatchToProps (dispatch) {
  return {
    onChange: event => {
      const query = event.target.value
      dispatch({ type: RESET_SEARCH_RESULTS_PAGE })
      dispatch({ type: SET_SEARCH_QUERY, query })
      dispatch({ type: SET_SEARCH_LOADING, value: true })
      searchGifs(query).then(gifs => {
        dispatch({ type: SET_SEARCH_RESULTS, results: gifs })
        dispatch({ type: SET_SEARCH_LOADING, value: false })
      })
    }
  }
}

const SearchBar = connect(mapStateToProps, mapDispatchToProps)(QueryBar)

export default SearchBar
