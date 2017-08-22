import React from 'react'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'

import Breadcrumb from './Breadcrumb'
import Catalog from './Catalog'
import ListBox from './ListBox'
import AboutMe from './AboutMe'
import Copyright from './Copyright'



export default function ListPage() {
  return (
    <div>

      <Paper style={{
        background: 'none',
        padding: '1em 0 1em 2em'
      }}>
        <Breadcrumb />
      </Paper>

      <div
        style={{
          padding: '2em 0 0 0'
        }}
        children={
          <Grid container justify='center'>
            <Grid item md={3} sm={3} xs={11}>
              <Catalog />
            </Grid>
            <Grid item md={1} sm={1} />
            <Grid item md={6} sm={7} xs={11}>
              <ListBox />
            </Grid>
          </Grid>
        }
      />


      <AboutMe />

      <Copyright />
    </div>
  )
}