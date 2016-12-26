/* global beforeEach, describe, it */

import React from 'react'
import { shallow } from 'enzyme'
import expect from '../expect'

import BpmDeltaInput from '../../../components/look/bpm-delta-input'

export default function () {
  describe('<BpmDeltaInput />', function () {
    let wrapper
    beforeEach(function () {
      wrapper = shallow(<BpmDeltaInput/>)
    })
    it('renders a number input', function () {
      expect(wrapper).to.have.descendants('input[type="number"]')
    })
    it('has id #bpm-delta-input', function () {
      expect(wrapper).to.have.id('bpm-delta-input')
    })
  })
}
