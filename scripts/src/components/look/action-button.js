import React from 'react'

export default function ActionButton ({ id, icon, message, onClick, onMouseDown, tabIndex }) {
  return <button
    className={`action-button ${icon}`}
    id={id}
    onClick={onClick}
    onMouseDown={onMouseDown}
    tabIndex={tabIndex}>
    <div className={`icon-container ${icon}`}>
      <div className={`icon ${icon}`} />
    </div>
    <span className='action-button-text' style={{marginRight: '0.55rem'}}>
      {message}
    </span>
  </button>
}
