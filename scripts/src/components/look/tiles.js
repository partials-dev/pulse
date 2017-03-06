import React from 'react'

export default function Tiles ({ children, onClick }) {
  const tiles = children.map(child => <div className='tile' key={child.key}>{child}</div>)
  return <div className='tiles' onClick={onClick}>
    {tiles}
  </div>
}
