import { SET_BPM, SET_TEMPO_CHANGE_INTERVAL, SET_BPM_DELTA, INCREMENT_BEAT, RESET_BEAT } from './actions'
import beatsBeforeChange from '../beats-before-change'
import audioContext from '../audio-context'

export const defaultState = {
  beat: 0,
  bpm: 120,
  // bpmDelta: 0,
  // changeInterval: Number.POSITIVE_INFINITY
  bpmDelta: 5,
  changeInterval: 8,
  beatTimestamps: []
}

export const minBpm = 1

function append (list, last) {
  // creates a new array, unlike push
  return [...list, last]
}

function incrementBeat (state) {
  // compute new bpm
  const beat = state.beat + 1
  const justCompletedInterval = beatsBeforeChange(beat, state.changeInterval) === state.changeInterval
  const bpmDelta = justCompletedInterval ? state.bpmDelta : 0
  const bpm = state.bpm + bpmDelta

  // update beat timestamps
  const beatTimestamps = append(state.beatTimestamps, audioContext.currentTime)
  return Object.assign({}, state, { beatTimestamps, beat, bpm })
}

function bpmIsValid (bpm) {
  return bpm === null ||
    (typeof bpm === 'number' && bpm >= minBpm)
}

export default function tempoReducer (state, action = {}) {
  // make sure state has all the properties of defaultState
  state = Object.assign({}, defaultState, state)
  switch (action.type) {
    case SET_BPM:
      if (!bpmIsValid(action.bpm)) {
        throw new Error(`bpm must be null or a number at least equal to ${minBpm}`)
      }
      return Object.assign({}, state, { bpm: action.bpm })
    case SET_BPM_DELTA:
      return Object.assign({}, state, { bpmDelta: action.bpmDelta })
    case SET_TEMPO_CHANGE_INTERVAL:
      return Object.assign({}, state, { changeInterval: action.changeInterval })
    case INCREMENT_BEAT:
      return incrementBeat(state)
    case RESET_BEAT:
      return Object.assign({}, state, { beat: 0 })
    default:
      return state
  }
}
