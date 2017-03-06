import React from 'react'
import { connect } from 'react-redux'

import { DECREMENT_SEARCH_RESULTS_PAGE, SET_SEARCH_RESULTS, SET_SEARCH_LOADING } from '../../../reducers/actions'
import searchGifs from './search-gifs'

function PreviousPageButton ({ getPreviousPage, query, page, searchResults }) {
  const onClick = () => { getPreviousPage(query, page) }
  const button = <button onClick={onClick}>Previous</button>

  // don't render unless we have results and a page to return to
  const show = (page > 0) && (searchResults.length > 0)
  return show ? button : null
}

function mapStateToProps ({ search: { query, page, results } }) {
  return { query, page, searchResults: results }
}

function mapDispatchToProps (dispatch) {
  return {
    getPreviousPage: (query, currentPage) => {
      dispatch({ type: SET_SEARCH_LOADING, value: true })
      dispatch({ type: DECREMENT_SEARCH_RESULTS_PAGE })
      searchGifs(query, currentPage - 1).then(gifs => {
        dispatch({ type: SET_SEARCH_RESULTS, results: gifs })
        dispatch({ type: SET_SEARCH_LOADING, value: false })
      })
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviousPageButton)
