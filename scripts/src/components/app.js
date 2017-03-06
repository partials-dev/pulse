import React from 'react'
import MetronomePage from './work/metronome-page'
import SearchPage from './work/search'

import { connect } from 'react-redux'

function mapStateToProps ({ search }) {
  return {
    showSearch: search.show
  }
}

function mapDispatchToProps () {
  return {}
}

function App ({ showSearch }) {
  const showIfSearching = showSearch ? null : { display: 'none' }
  const showUnlessSearching = showSearch ? { display: 'none' } : null

  return <div>
    <SearchPage style={showIfSearching} />
    <MetronomePage style={showUnlessSearching} />
  </div>
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
