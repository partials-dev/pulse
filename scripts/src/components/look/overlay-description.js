import React from 'react'

export default function OverlayDescription ({ id, onClick, description, children, className }) {
  return <div id={id} onClick={onClick} className={'overlay-description-wrapper ' + className}>
    {children}
    <span className='description'>
      {description}
    </span>
  </div>
}
