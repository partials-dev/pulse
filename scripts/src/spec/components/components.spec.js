/* global describe */

import './setup' // run setup code before any tests

import bpmDeltaInput from './look/bpm-delta-input'
import playToggle from './work/play-toggle'
import app from './work/app'

describe('Components', function () {
  bpmDeltaInput()
  playToggle()
  app()
})
