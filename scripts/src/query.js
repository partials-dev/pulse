/* global history */

// function tryParse (string) {
//   try {
//     JSON.parse(string)
//   } catch (e) {
//     console.warn('Got an error trying to parse JSON')
//     console.warn(e)
//     return {}
//   }
// }

function getQueryVariable (variable) {
  var query = window.location.search.substring(1)
  // const stateString = window.atob(query)
  // const decodedState = tryParse(stateString
  // debugger
  // return decodedState[variable]
  var vars = query.split('&')
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=')
    if (pair[0] === variable) { return pair[1] }
  }
}

function pushState ({ bpm, bpmDelta, changeInterval }) {
  const newQuery = `?bpm=${bpm}&change_by=${bpmDelta}&change_every=${changeInterval}`
  // const encodedState = window.btoa(JSON.stringify(state)) // encode state in base64
  // const newQuery = '?state=' + encodedState
  const lastElementOfPath = last(window.location.pathname.split('/'))
  history.replaceState({}, null, lastElementOfPath + newQuery)
}

function last (array) {
  return array[array.length - 1]
}

export function updateQuery (newState) {
  pushState(newState)
}

function parseFloatIfDefined (n) {
  if (n != null) {
    return parseFloat(n)
  }
}

function getStateFromQuery () {
  return {
    bpm: parseFloatIfDefined(getQueryVariable('bpm')),
    bpmDelta: parseFloatIfDefined(getQueryVariable('change_by')),
    changeInterval: parseFloatIfDefined(getQueryVariable('change_every'))
  }
}

export function getActionsToSyncWithQuery () {
  const { bpm, bpmDelta, changeInterval } = getStateFromQuery()
  const actions = []
  if (bpm != null) { actions.push({ type: 'SET_STARTING_BPM', bpm }) }
  if (bpmDelta != null) { actions.push({ type: 'SET_BPM_DELTA', bpmDelta }) }
  if (changeInterval != null) { actions.push({ type: 'SET_CHANGE_INTERVAL', changeInterval }) }
  return actions
}
