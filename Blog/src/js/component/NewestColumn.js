import React from 'react'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Hidden from 'material-ui/Hidden'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { withTheme } from 'material-ui/styles'



export default withTheme(NewestColumn)

function NewestColumn({
  theme
}) {
  return (
    <div>
      <Paper style={{
        background: 'none'
      }}>
        <div
          style={{
            textAlign: 'center',
            padding: '1em 0 1em 0',
            borderBottom: `1px solid ${theme.newestColumn.lineColor}`,
          }}>
          <Typography type='title' style={{
            color: theme.newestColumn.titleColor
          }} >
            The newest
          </Typography>
        </div>

        <div
          style={{
            padding: '1em 0 0 0'
          }}
          children={
            <List>
              {
                [...'12345'].map((v, i) => (
                  <ListItem key={i}>
                    <Grid container>
                      {/* <Hidden only={['sm', 'xs']}>

                      </Hidden> */}
                      <Grid item md={4} style={{
                        textAlign: 'center',
                        color: theme.newestColumn.timeColor
                      }}>
                        <Hidden only={['xs']}>
                          <span>2017/</span>
                        </Hidden>08/21
                      </Grid>
                      <Grid item md={8} sm={12} style={{
                        color: theme.newestColumn.color
                      }}>
                        博客的标题{Math.pow(i + 1, 10)}
                      </Grid>
                    </Grid>
                  </ListItem>
                ))
              }
            </List>
          }
        />
      </Paper>
    </div>
  )
}