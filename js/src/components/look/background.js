import React from 'react'

export default function background () {
  return <div className='background'>
    <video preload='auto' autoPlay='true' loop='loop' muted='muted'>
      <source src='videos/optical-poem.mp4' type='video/mp4' />
    </video>
  </div>
}
