import React from 'react'
import {
  Card
} from 'antd'
import ListBoxItem from './ListBoxItem'

export default function ListBox() {
  return (
    <div>
      <Card noHovering bordered={false}>
        {
          [...'123456'].map((v, i) => (
          <div key={i} style={{
            padding: '20px 0 20px 0'
          }}>
            <ListBoxItem />
          </div>
        ))}
      </Card>
    </div>
  )
}