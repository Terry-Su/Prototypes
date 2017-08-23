import React, { Component } from 'react'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Hidden from 'material-ui/Hidden'
import ThemeSwitch from './ThemeSwitch'
import LangSwitch from './LangSwitch'


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
        <Paper
          style={{
            background: 'none',
            padding: '2em 0 1em 0'
          }}
          children={
            <Grid container>
              <Grid item xs={7} style={{
                padding: '0 0 0 2em'
              }}>
                <Breadcrumb />
              </Grid>
              <Grid item container xs={5} justify='flex-end' align='center'>
                <div
                  style={{
                    padding: '0 2em 0 0'
                  }}
                  children={
                    <div>
                      <span
                        style={{
                          display: 'inline-block',
                          padding: '0 1.5em 0 0'
                        }}
                        children={
                          <ThemeSwitch />
                        }
                      />

                      <LangSwitch />
                    </div>
                  }
                />
              </Grid>
            </Grid>
          }
        />

        <Grid container justify='center'>
          <Grid item lg={8} md={8} sm={11} xs={11}>
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