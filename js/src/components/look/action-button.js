import React from 'react'

function ActionButton ({ id, icon, message, onClick, onMouseDown, tabIndex }) {
  return <button
    className='action-button'
    id={id}
    onClick={onClick}
    onMouseDown={onMouseDown}
    tabIndex={tabIndex}>
      <div className={`icon-container ${icon}`}>
        <div className={`icon ${icon}`}>
        </div>
      </div>
      <span className='action-button-text' style={{marginRight: '0.55rem'}}>
        {message}
      </span>
    </button>
}

export default ActionButton
