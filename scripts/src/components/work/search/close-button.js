import React from 'react'
import { connect } from 'react-redux'
import { TOGGLE_SEARCH } from '../../../reducers/actions'

function mapStateToProps () {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    toggleSearch: () => { dispatch({ type: TOGGLE_SEARCH }) }
  }
}

function SearchCloseButton ({ toggleSearch }) {
  return <button onClick={toggleSearch}>
    ✕
  </button>
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCloseButton)
