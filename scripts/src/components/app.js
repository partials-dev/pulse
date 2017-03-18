import React from 'react'
import MetronomePage from './work/metronome-page'
import SearchPage from './work/search'
import { SET_SPIRIT_ANIMAL_SRC } from '../reducers/actions'
import gifCache from '../gif-cache'
import path from 'path'

import { connect } from 'react-redux'

function mapStateToProps ({ search }) {
  return {
    showSearch: search.show
  }
}

const preventDefault = e => {
  if (e.preventDefault) e.preventDefault()
  return false
}

function mapDispatchToProps (dispatch) {
  const dragAndDrop = {
    onDrop: e => {
      e.preventDefault()
      const src = e.dataTransfer.files[0].path
      gifCache.set({
        id: path.parse(src).name,
        url: src
      })
      dispatch({ type: SET_SPIRIT_ANIMAL_SRC, src })
      return false
    },
    onDragOver: preventDefault,
    onDragLeave: preventDefault,
    onDragEnd: preventDefault
  }
  return { dragAndDrop }
}

function App ({ showSearch, dragAndDrop }) {
  const showIfSearching = showSearch ? null : { display: 'none' }
  const showUnlessSearching = showSearch ? { display: 'none' } : null

  return <div id='app-wrapper' {...dragAndDrop}>
    <SearchPage id='search-page' style={showIfSearching} />
    <MetronomePage id='metronome' style={showUnlessSearching} />
  </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
