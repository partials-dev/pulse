import React from 'react'
import { connect } from 'react-redux'

import { INCREMENT_SEARCH_RESULTS_PAGE, SET_SEARCH_RESULTS, SET_SEARCH_LOADING } from '../../../reducers/actions'
import searchGifs from './search-gifs'

function NextPageButton ({ onLine, getNextPage, query, page, searchResults }) {
  const onClick = () => { getNextPage(onLine, query, page) }
  const button = <button onClick={onClick}>Next</button>

  // only show button if we have some results
  return searchResults.length > 0 ? button : null
}

function mapStateToProps ({ onLine, search: { query, page, results } }) {
  return { onLine, query, page, searchResults: results }
}

function mapDispatchToProps (dispatch) {
  return {
    getNextPage: (onLine, query, currentPage) => {
      dispatch({ type: SET_SEARCH_LOADING, value: true })
      dispatch({ type: INCREMENT_SEARCH_RESULTS_PAGE })
      searchGifs(onLine, query, currentPage + 1).then(gifs => {
        dispatch({ type: SET_SEARCH_RESULTS, results: gifs })
        dispatch({ type: SET_SEARCH_LOADING, value: false })
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NextPageButton)
