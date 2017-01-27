/* global history */

function getQueryVariable (variable) {
  var query = window.location.search.substring(1)
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] === variable) { return pair[1] }
  }
  return (false)
}

function pushState ({ bpm, bpmDelta, changeInterval }) {
  const newQuery = `?bpm=${bpm}&change_by=${bpmDelta}&change_every=${changeInterval}`
  const lastElementOfPath = last(window.location.pathname.split('/'))
  history.pushState({ bpm, bpmDelta, changeInterval }, null, lastElementOfPath + newQuery)
}

function last (array) {
  return array[array.length - 1]
}

export function updateQuery (newState) {
  pushState(newState.tempo)
}

function getState () {
  return {
    bpm: getQueryVariable('bpm'),
    bpmDelta: getQueryVariable('change_by'),
    changeInterval: getQueryVariable('change_every')
  }
}

export function getActionsToSyncWithQuery () {
  const { bpm, bpmDelta, changeInterval } = getState()
  return [
    { type: 'SET_BPM', bpm },
    { type: 'SET_BPM_DELTA', bpmDelta },
    { type: 'SET_CHANGE_INTERVAL', changeInterval }
  ]
}
