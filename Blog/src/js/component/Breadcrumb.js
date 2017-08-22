import React from 'react'

import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import { withTheme } from 'material-ui/styles'


export default withTheme(Breadcrumb)
function Breadcrumb({
  theme
}) {
  return (
    <div>
      <Grid container>
        <Grid item md={12}>
          <Typography style={{
            display: 'inline-block',
            color: theme.breadcrumb.color
          }} type='body2'>Home</Typography>
          <Typography style={{
            display: 'inline-block'
          }} type='caption'>&nbsp;&nbsp;/&nbsp;&nbsp;</Typography>
          <Typography style={{
            display: 'inline-block',
            color: theme.breadcrumb.color
          }} type='body2'>
            <b>List</b>
          </Typography>
        </Grid>
      </Grid>
    </div>
  )
}