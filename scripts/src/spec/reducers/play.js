/* global describe, it */

const { expect } = require('chai')
const { TOGGLE_PLAY } = require('../../reducers/actions')
const deepFreeze = require('deep-freeze')
const playReducer = require('../../reducers/play')

export default function () {
  describe('Play', function () {
    it('should default to false', function () {
      expect(playReducer()).to.equal(false)
    })
    describe(TOGGLE_PLAY, function () {
      it('should negate the playing value', function () {
        const beforeState = false
        const action = { type: TOGGLE_PLAY }
        const afterState = true

        deepFreeze(action)
        expect(playReducer(beforeState, action)).to.deep.equal(afterState)
      })
    })
  })
}
