import React from 'react'

import Grid from 'material-ui/Grid'
import Avatar from 'material-ui/Avatar'

import Tags from './Tags'

export default function AboutMe() {
  return (
    <Grid
      container
      justify='center'
      style={{
        paddingTop: '5em'
      }}
      children={
        <Grid
          item
          children={
            <img
              src='./images/gb-icon.png'
              width='30'
            />
          }
        />
      }
    />
  )
}