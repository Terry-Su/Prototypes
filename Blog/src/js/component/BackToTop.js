import React from 'react'

import Button from 'material-ui/Button'
import { withTheme } from 'material-ui/styles'


class BackToTop extends React.Component {
  constructor(props) {
    super(props)
  }
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
            <span>Back To Top</span>
          }
        />
      </div>
    )
  }
}

export default withTheme(BackToTop)