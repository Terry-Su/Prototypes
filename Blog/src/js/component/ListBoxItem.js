import React from 'react'

import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography'


export default function ListBoxItem() {
  return (
    <Paper>
      <Typography type="headline" component="h3" style={{
        padding: '10px 0'
      }}>
        博客的标题
      </Typography>
      <Typography type="caption" component="p">
        INTRODUCTION\nDo you prefer the usage of \"ES6 Promise\"? If you do, you will like the usage of\n\"Fetch\"...
      </Typography>
    </Paper>
  )
}