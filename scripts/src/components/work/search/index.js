import React from 'react'
import SearchBar from './search-bar'
import OfflineWarning from './offline-warning'
import SearchResults from './results'
import CloseButton from './close-button'
import NextPageButton from './next-page-button'
import PreviousPageButton from './previous-page-button'

export default function ({ style }) {
  return <div style={style}>
    <CloseButton />
    <SearchBar />
    <OfflineWarning />
    <SearchResults />
    <PreviousPageButton />
    <NextPageButton />
  </div>
}
