import React, { Component } from 'react'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Hidden from 'material-ui/Hidden'


import Breadcrumb from './Breadcrumb'
import DetailCatalog from './DetailCatalog'
import CommentBox from './CommentBox'
import DetailBox from './DetailBox'
import Copyright from './Copyright'
import BackToTop from './BackToTop'
import AboutMe from './AboutMe'






class DetailPage extends Component {
  render() {
    return (
      <div>
        <Paper style={{
          padding: '1em 0 1em 2em'
        }}>
          <Breadcrumb />
        </Paper>

        <Grid container justify='center'>
          <Grid item md={6} sm={11} xs={11}>
            <DetailBox />

            <div
              style={{
                padding: '2em 0 0 0'
              }}
              children={
                <CommentBox />
              }
            />
          </Grid>
          <Hidden only={['sm', 'xs']}>
            <Grid item>
              <div style={{
                position: 'fixed',
                top: '5px',
                padding: '2em 0 0 1.8em',
              }}>
                <DetailCatalog />
              </div>
            </Grid>
          </Hidden>
        </Grid>

        <AboutMe />
        <Copyright />
      </div>
    )
  }
}


export default DetailPage