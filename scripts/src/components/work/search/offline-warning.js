import React from 'react'
import { connect } from 'react-redux'
import Banner from '../../look/banner'

function mapStateToProps ({ onLine }) {
  return { onLine }
}

function OffLineWarning ({ onLine }) {
  const message = 'You\'re offline, fyi.'
  return onLine ? null : <Banner message={message} />
}

export default connect(mapStateToProps, null)(OffLineWarning)
