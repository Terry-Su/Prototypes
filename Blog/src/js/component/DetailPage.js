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
          background: 'none',
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
          {/* <Hidden only={['sm', 'xs']}>
            <Grid style={{
              overflow: 'hidden'
            }}>
              <div style={{
                position: 'fixed',
                height: '100%',
                top: '1em',
                padding: '1em 0 1 1.2em',
                overflow: 'auto'
              }}>
                <DetailCatalog />
              </div>
            </Grid>
          </Hidden> */}
        </Grid>

        <div
          style={{
            padding: '1em 0 0 0 '
          }}
          children={
            <Grid container justify='center'>
              <Grid item >
                <BackToTop />
              </Grid>
              {/* <Grid item xs={1} /> */}
            </Grid>
          }
        />


        <AboutMe />
        <Copyright />
      </div>
    )
  }
}


export default DetailPage