import React from 'react'

import Grid from 'material-ui/Grid'
import Paper from 'material-ui/Paper'
import Hidden from 'material-ui/Hidden'

import Breadcrumb from './Breadcrumb'
import Catalog from './Catalog'
import ListBox from './ListBox'
import AboutMe from './AboutMe'
import Copyright from './Copyright'
import ThemeSwitch from './ThemeSwitch'
import LangSwitch from './LangSwitch'



export default function ListPage() {
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

      <div
        style={{
          padding: '2em 0 0 0'
        }}
        children={
          <Grid container justify='center'>
            <Grid item md={3} sm={3} xs={11}>
              <Catalog />
            </Grid>

            <Hidden only={['xs']}>
              <Grid item md={1} sm={1} />
            </Hidden>

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