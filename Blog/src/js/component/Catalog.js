import React from 'react'

import Paper from 'material-ui/Paper'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import Button from 'material-ui/Button'
import { withTheme } from 'material-ui/styles'


import Tags from './Tags'


export default withTheme(Catalog)
function Catalog({
  theme
}) {
  return (
    <div style={{
      border: `1px solid ${theme.catalog.borderColor}`,
      borderRadius: '10px',
      padding: '10px',
      backgroundColor: theme.catalog.backgroundColor
    }}>
      <Paper style={{
        backgroundColor: theme.catalog.backgroundColor
      }}>
        <List>
          <ListItem button disableRipple style={{
            backgroundColor: theme.catalog.activeBackgroundColor,
            color: theme.catalog.activeColor
          }}>Category name1</ListItem>
          {
            [...'12345'].map((v, i) => (
              <ListItem
                key={i}
                button
                disableRipple
                style={{
                  color: theme.catalog.color
                }}
              >Category name{i + 2}</ListItem>
            ))
          }
        </List>

        <Tags />
      </Paper>
    </div>
  )
}