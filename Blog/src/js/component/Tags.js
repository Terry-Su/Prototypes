import React from 'react'
import {
  Tag
} from 'antd'

function TagBox({ color, children }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '5px'
    }} >
      <Tag color={color} >
        {children}
      </Tag>
    </span>
  )
}

export default function Tags() {
  return (
    <div style={{
      padding: '10px'
    }}>
      {
        [...'12345'].map((v, i) => <TagBox key={i} color={'blue'}>标签{v}</TagBox>)
      }
    </div>
  )
}