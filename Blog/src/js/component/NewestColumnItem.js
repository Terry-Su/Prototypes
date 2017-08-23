import React, { Component } from 'react'
import moment from 'moment'

import Grid from 'material-ui/Grid'
import Hidden from 'material-ui/Hidden'
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import { withTheme } from 'material-ui/styles'


class NewestColumnItem extends Component {
  render() {
    const {
      theme
    } = this.props

    return (
      <ListItem>
        <Grid container>
          <Grid item xs={4} style={{
            textAlign: 'center',
          }}>
            <a style={{
              color: theme.newestColumn.timeColor
            }}>
              <Hidden only={['sm', 'xs']}>
                <span>{moment().format('YYYY/')}</span>
              </Hidden>
              {moment().format('MM/DD')}
            </a>
          </Grid>
          <Grid item xs={8}>
            <a style={{
              color: theme.newestColumn.color
            }}>
              Blog's title
          </a>
          </Grid>
        </Grid>
      </ListItem>
    )
  }

}


export default withTheme(NewestColumnItem)