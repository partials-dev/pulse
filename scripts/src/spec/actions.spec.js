/* global describe, it */

const { expect } = require('chai')
const actions = require('../../reducers/actions')

describe('Actions', function () {
  it('should all have string values', function () {
    for (let key in actions) {
      expect(actions[key]).to.be.a('string')
    }
  })
})
