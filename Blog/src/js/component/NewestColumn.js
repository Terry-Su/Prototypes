import React from 'react'

// import {
//   Col,
//   Row,
//   Menu
// } from 'antd'
import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Hidden from 'material-ui/Hidden'
import Typography from 'material-ui/Typography'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'



export default function NewestColumn() {
  return (
    <div>
      <Paper>
        <h2 style={{
          textAlign: 'center',
          padding: '5px',
          borderBottom: '1px solid #ccc'
        }}>
          {/* The newest */}
        </h2>
        <Typography type='title'>
          test
        </Typography>
        <List>
          {
            [...'12345'].map((v, i) => (
              <ListItem key={i}>
                <Grid container>
                  <Hidden only={['sm', 'xs']}>
                    <Grid item md={4}>
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
      </Paper>
    </div>
  )
}