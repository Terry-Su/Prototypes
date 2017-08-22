import React from 'react'

import Grid from 'material-ui/Grid'

import DetailBoxContent from './DetailBoxContent'
import DetailBoxInfo from './DetailBoxInfo'

export default function DetailBox() {
  return (
    <div id="detail">
      <h1
        id='blog_title'
        style={{
          textAlign: 'center',
          padding: '1em 0 0.5em 0'
        }}
        children={
          'The title of blog'
        }
      />

      <DetailBoxContent />

      <div 
        style={{
          padding: '2em 0 0 0'
        }}
        children={
          <DetailBoxInfo />
        }
      />
      


    </div>
  )
}