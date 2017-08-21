import React from 'react'
import { Menu } from 'antd'

import Tags from './Tags'

export default function AboutMe() {
  return (
    <div style={{
      padding: '150px 0 0 0',
      textAlign: 'center',
      fontSize: '12px',
    }}>
      <a style={{
        color: '#666'
      }}>mail@mail.com</a>
      &nbsp; | &nbsp; 
      <a style={{
        color: '#666'
      }}>Github</a>
    </div>
  )
}