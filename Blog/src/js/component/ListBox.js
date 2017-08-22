import React from 'react'


import ListBoxItem from './ListBoxItem'

export default function ListBox() {
  return (
    <div>
        {
          [...'123456'].map((v, i) => (
          <div key={i} style={{
            padding: '0 0 2em 0'
          }}>
            <ListBoxItem />
          </div>
        ))}
    </div>
  )
}