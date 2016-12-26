/* global beforeEach, describe, it */

import React from 'react'
import { shallow } from 'enzyme'
import expect from '../expect'
import PlayToggle from '../../../components/work/play-toggle'
import { createStore } from 'redux'
import rootReducer from '../../../reducers'
import sinon from 'sinon'

export default function () {
  describe('<PlayToggle />', function () {
    let wrapper
    let store
    beforeEach(function () {
      store = createStore(rootReducer)
      wrapper = shallow(<PlayToggle store={store} />)
    })

    it('renders a button', function () {
      expect(wrapper).to.have.descendants('button')
    })
    it("reflects app's play state", function () {
      const notPlayingStore = { getState: sinon.stub().returns({play: false}) }
      const notPlayingWrapper = shallow(<PlayToggle store={notPlayingStore} />)
      const beforeText = notPlayingWrapper.text()

      const playingStore = { getState: sinon.stub().returns({play: true}) }
      const playingWrapper = shallow(<PlayToggle store={playingStore} />)
      const afterText = playingWrapper.text()
      expect(beforeText).to.not.equal(afterText)
    })
  })
}
