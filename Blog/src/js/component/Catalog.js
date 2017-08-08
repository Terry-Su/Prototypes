import React from 'react'
import { Menu } from 'antd'

import Tags from './Tags'

export default function Catalog() {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '10px'
    }}>
      <div>
        <Menu style={{
          border: 'none'
        }} >
          {
            [...'12345'].map((v, i) =>
              <Menu.Item key={i}>
                <div>目录{v}</div>
              </Menu.Item>
            )
          }
        </Menu>
        <Tags />
      </div>
    </div>
  )
}