/* global describe, it, beforeEach */

import React from 'react'
import { mount } from 'enzyme'
import { expect } from '../expect'
import App from '../../../components/app'

import { createStore } from 'redux'
import rootReducer from '../../../reducers'

export default function () {
  describe('<App />', function () {
    let wrapper
    let store
    beforeEach(function () {
      store = createStore(rootReducer)
      wrapper = mount(<App store={store} />)
    })

    it('renders a #bpm-delta-input', function () {
      expect(wrapper).to.have.descendants('#bpm-delta-input')
    })
    it('renders a #play-toggle', function () {
      expect(wrapper).to.have.descendants('#play-toggle')
    })
  })
}
