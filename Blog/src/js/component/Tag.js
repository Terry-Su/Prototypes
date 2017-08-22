import React, { Component } from 'react'

import Chip from 'material-ui/Chip'
import Button from 'material-ui/Button'
import { withStyles } from 'material-ui/styles'
import { withTheme } from 'material-ui/styles'




class Tag extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      children,
      theme,
      active
    } = this.props

    const { tag: themeTag } = theme

    return (
      <span
        style={{
          display: 'inline-block',
          padding: '0.5em'
        }}
        children={
          <span children={children} style={{
            color: !active ? themeTag.color : themeTag.activeColor,
            backgroundColor: !active ? themeTag.backgroundColor : themeTag.activeBackgroundColor,
            display: 'inline-block',
            padding: '0.3em 1.2em',
            borderRadius: '0.5em',
            fontSize: '12px',
          }} />
        }
      />
    )
  }
}

export default withTheme(Tag)

