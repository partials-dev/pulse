/* global describe, it */

const { expect } = require('chai')
const { SET_BPM, SET_TEMPO_CHANGE_INTERVAL, SET_BPM_DELTA, INCREMENT_BEAT, RESET_BEAT } = require('../../reducers/actions')
const deepFreeze = require('deep-freeze')
const tempoReducer = require('../../reducers/tempo')

export default function () {
  describe('Tempo', function () {
    it('bpm should default to 120', function () {
      expect(tempoReducer()).to.have.property('bpm').that.equals(120)
    })
    it('changeInterval should default to Number.POSITIVE_INFINITY', function () {
      expect(tempoReducer()).to.have.property('changeInterval').that.equals(8)
    })
    it('bpmDelta should default to 0', function () {
      expect(tempoReducer()).to.have.property('bpmDelta').that.equals(5)
    })
    describe(SET_BPM, function () {
      it('should set the bpm value', function () {
        const beforeState = { bpm: 120 }
        const action = { type: SET_BPM, bpm: 220 }
        const expectedBpm = 220

        deepFreeze(beforeState)
        deepFreeze(action)
        const actual = tempoReducer(beforeState, action)
        expect(actual).to.have.property('bpm').that.equals(expectedBpm)
      })
    })
    describe(SET_TEMPO_CHANGE_INTERVAL, function () {
      it('should set the change interval', function () {
        const beforeState = { changeInterval: 0 }
        const action = { type: SET_TEMPO_CHANGE_INTERVAL, changeInterval: 16 }
        const expectedChangeInterval = 16

        deepFreeze(beforeState)
        deepFreeze(action)
        const actual = tempoReducer(beforeState, action)
        expect(actual).to.have.property('changeInterval').that.equals(expectedChangeInterval)
      })
    })
    describe(SET_BPM_DELTA, function () {
      it('should set the amount the bpm each changes each interval', function () {
        const beforeState = { tempo: { bpmDelta: 0 } }
        const action = { type: SET_BPM_DELTA, bpmDelta: 10 }
        const expectedBpmDelta = 10

        deepFreeze(beforeState)
        deepFreeze(action)
        const actual = tempoReducer(beforeState, action)
        expect(actual).to.have.property('bpmDelta').that.equals(expectedBpmDelta)
      })
    })
    describe(INCREMENT_BEAT, function () {
      it('should not change the bpm by bpmDelta if a new changeInterval has not been completed', function () {
        const beforeState = { bpm: 1, bpmDelta: 1, changeInterval: 2 }
        const action = { type: INCREMENT_BEAT }
        const expectedBpm = 1

        deepFreeze(beforeState)
        deepFreeze(action)
        const actual = tempoReducer(beforeState, action)
        expect(actual).to.have.property('bpm').that.equals(expectedBpm)
      })
      it('should change the tempo by bpmDelta if a new changeInterval has been completed', function () {
        const beforeState = { bpm: 1, bpmDelta: 1, changeInterval: 1 }
        const action = { type: INCREMENT_BEAT }
        const expectedBpm = 2

        deepFreeze(beforeState)
        deepFreeze(action)
        const actual = tempoReducer(beforeState, action)
        expect(actual).to.have.property('bpm').that.equals(expectedBpm)
      })
      it('should increment the beat', function () {
        const beforeState = { beat: 0 }
        const action = { type: INCREMENT_BEAT }
        const expectedBeat = 1

        deepFreeze(beforeState)
        deepFreeze(action)
        const actual = tempoReducer(beforeState, action)
        expect(actual).to.have.property('beat').that.equals(expectedBeat)
      })
    })
    describe(RESET_BEAT, function () {
      it('should set the beat back to 0', function () {
        const beforeState = { beat: 5 }
        const action = { type: RESET_BEAT }
        const expectedBeat = 0

        deepFreeze(beforeState)
        deepFreeze(action)
        const actual = tempoReducer(beforeState, action)
        expect(actual).to.have.property('beat').that.equals(expectedBeat)
      })
    })
  })
}
