import React from 'react'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Hidden from 'material-ui/Hidden'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'



export default NewestColumn

function NewestColumn() {
  return (
    <div>
      <Paper>
        <div
          style={{
            textAlign: 'center',
            padding: '0 0 1em 0',
            borderBottom: '1px solid #ccc'
          }}>
          <Typography type='title'>
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
                      <Hidden only={['sm', 'xs']}>
                        <Grid item md={4} style={{
                          textAlign: 'center',
                          color: '#666'
                        }}>
                          2017/08/21
                        </Grid>
                      </Hidden>
                      <Grid item md={8} sm={12}>
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