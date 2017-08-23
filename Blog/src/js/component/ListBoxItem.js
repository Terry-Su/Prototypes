import React from 'react'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'
import { withTheme } from 'material-ui/styles'


export default withTheme(ListBoxItem)

function ListBoxItem({
  theme
}) {
  return (
    <Paper style={{
      background: 'none'
    }}>
      <Typography type="headline" component="h3" style={{
        padding: '10px 0',
        color: theme.listBox.titleColor
      }}>
        Blog's title
      </Typography>
      <Typography type="caption" component="p" style={{
        color: theme.listBox.color
      }}>
        INTRODUCTION\nDo you prefer the usage of \"ES6 Promise\"? If you do, you will like the usage of\n\"Fetch\"...
      </Typography>
    </Paper>
  )
}