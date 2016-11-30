import React from 'react'

function ActionButton ({ id, icon, message, onClick, onMouseDown, tabIndex }) {
  return <button
    className='action-button'
    id={id}
    onClick={onClick}
    onMouseDown={onMouseDown}
    tabIndex={tabIndex}>
      <i style={{ verticalAlign: 'text-bottom', marginRight: '0.5rem' }}
        className='material-icons'>{icon}</i>
      <span style={{marginRight: '0.55rem'}}>
        {message}
      </span>
    </button>
}

export default ActionButton
