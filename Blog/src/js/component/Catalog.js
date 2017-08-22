import React from 'react'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'


import Tags from './Tags'


export default function Catalog() {
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '10px'
    }}>
      <Paper>
        <List>
          <ListItem button disableRipple style={{
            background: '#ecf6fd',
            color: '#108ee9'
          }}>目录1</ListItem>
          {
            [...'12345'].map((v, i) => (
              <ListItem key={i} button disableRipple>目录{i + 2}</ListItem>
            ))
          }
        </List>

        <Tags />
      </Paper>
    </div>
  )
}