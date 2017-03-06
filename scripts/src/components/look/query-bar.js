import React from 'react'

export default function QueryBar ({ onChange, className, placeholder, value, tabIndex, gotRef }) {
  return <input
    className={className}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    ref={gotRef}
    tabIndex={tabIndex} />
}
