// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

import ReactDOM from 'react-dom'
import React from 'react'

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/app'
import MetronomeContainer from './components/sound/metronome-container'
import rootReducer from './reducers'

import { updateQuery, getActionsToSyncWithQuery } from './query'
import gifCache from './gif-cache'
import { SET_SPIRIT_ANIMAL_SRC } from './reducers/actions'

const store = createStore(rootReducer)
const dispatch = store.dispatch.bind(store)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'))
store.subscribe(() => {
  const state = store.getState()
  MetronomeContainer({ state, dispatch })
  updateQuery(state.tempo)
  // console.log(JSON.stringify(state.search.page))
})

// hydrate app
getActionsToSyncWithQuery().forEach(dispatch)
updateQuery(store.getState())

const cachedMetadata = gifCache.get()
if (cachedMetadata) {
  dispatch({ type: SET_SPIRIT_ANIMAL_SRC, src: cachedMetadata.url })
}
