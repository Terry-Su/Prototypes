import React from 'react'

import Button from 'material-ui/Button'
import { withTheme } from 'material-ui/styles'


class BackToTop extends React.Component {
  render() {
    const {
      theme
    } = this.props

    return (
      <div>
        <Button
          disableRipple
          style={{
            color: theme.backToTop.color,
            background: 'none',
            padding: '1em',
            
          }}
          children={
            <a>Back To Top</a>
          }
        />
      </div>
    )
  }
}

export default withTheme(BackToTop)