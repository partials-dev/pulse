import React from 'react'

export default function ({ onChange, placeholder, value, min, label, tabIndex, gotRef }) {
  return <label>
    <input
      className='number-input'
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      min={min}
      ref={gotRef}
      tabIndex={tabIndex}
      inputMode='numeric'
      type='number'
      step='1'>
    </input>
    {label}
  </label>
}
