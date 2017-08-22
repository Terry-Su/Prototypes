import React from 'react'

import { withTheme } from 'material-ui/styles'

import ListBoxItem from './ListBoxItem'


export default withTheme(ListBox)

function ListBox({
  theme
}) {
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