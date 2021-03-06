import React from 'react'
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

function mapStateToProps ({ onLine, search: { show, query } }) {
  const gotRef = textInput => {
    if (shouldFocus(show)) {
      textInput.focus()
    }
  }
  return { value: query, gotRef, onLine }
}

function mapDispatchToProps (dispatch) {
  return {
    search: onLine => event => {
      const query = event.target.value
      dispatch({ type: RESET_SEARCH_RESULTS_PAGE })
      dispatch({ type: SET_SEARCH_QUERY, query })
      dispatch({ type: SET_SEARCH_LOADING, value: true })
      searchGifs(onLine, query).then(gifs => {
        dispatch({ type: SET_SEARCH_RESULTS, results: gifs })
        dispatch({ type: SET_SEARCH_LOADING, value: false })
      })
    }
  }
}

function SearchBar (props) {
  const onChange = props.search(props.onLine)
  return <QueryBar {...props} onChange={onChange} />
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
