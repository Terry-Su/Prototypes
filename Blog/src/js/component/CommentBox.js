import React, { Component } from 'react'

import { withTheme } from 'material-ui/styles'

import Comment from './Comment'


class CommentBox extends Component {
  render() {
    const {
      theme
    } = this.props
    return (
      <div>
        <h3 style={{
          paddingBottom: '1em',
          fontSize: '16px'
        }}>
          Want to leave a comment? Visit <a >this post's issue page</a> on GitHub (you'll need a GitHub account).
        </h3>

        {
          [...'123'].map((v, i) => (
            <div key={i} style={{
              margin: '0 0 2em 0'
            }}>
              <Comment key={i} />
            </div>
          ))
        }

      </div>
    )
  }
}


export default withTheme(CommentBox)