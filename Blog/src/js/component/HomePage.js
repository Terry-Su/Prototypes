import React, { Component } from 'react'
import Grid from 'material-ui/Grid'

import Catalog from './Catalog'
import NewestColumn from './NewestColumn'
import Notion from './Notion'
import AboutMe from './AboutMe'
import Copyright from './Copyright'


export default class HomePage extends Component {
  render() {
    return (
      <div>
        <div
          style={{
            padding: '1em 0 3em 0'
          }}
          children={
            <Notion />
          }
        />

        <div
          style={{
            padding: '2em 0 0 0'
          }}
          children={
            <Grid container justify='center' spacing={40}>
              <Grid item md={5} sm={5} xs={11}>
                <NewestColumn />
              </Grid>
              <Grid item md={1} sm={1} xs={1}/>
              <Grid item md={3} sm={4} xs={11}>
                <Catalog />
              </Grid>
            </Grid>
          }
        />

        <div
          style={{
            padding: '3em 0 0 0'
          }}
          children={
            <AboutMe />
          }
        />

        <Copyright />
      </div>
    )
  }
}