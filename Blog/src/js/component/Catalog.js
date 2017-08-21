import React from 'react'
import { Menu } from 'antd'
import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'


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
          {
            [...'12345'].map((v, i) => (
              <ListItem key={i} button>目录{i + 1}</ListItem>
            ))
          }
        </List>
        
        <Tags />
      </Paper>
    </div>
  )
}