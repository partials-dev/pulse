import React from 'react'
import { connect } from 'react-redux'
import SpiritAnimalGif from './gif'
import OverlayDescription from '../../look/overlay-description'
import { TOGGLE_SEARCH } from '../../../reducers/actions'

function mapStateToProps () {
  return {}
}

function mapDispatchToProps (dispatch) {
  return {
    toggleSearch: () => dispatch({ type: TOGGLE_SEARCH })
  }
}

function SpiritAnimal ({ toggleSearch }) {
  return <OverlayDescription
    id='spirit-animal'
    description='Click to change'
    onClick={toggleSearch}>
    <SpiritAnimalGif />
  </OverlayDescription>
}

export default connect(mapStateToProps, mapDispatchToProps)(SpiritAnimal)
