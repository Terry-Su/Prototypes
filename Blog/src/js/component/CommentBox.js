import React, { Component } from 'react'


import Comment from './Comment'


class CommentBox extends Component {
  render() {
    return (
      <div>
        <h3 style={{
          paddingBottom: '1em'
        }}>
          Want to leave a comment? Visit <a >this post's issue page</a> on GitHub (you'll need a GitHub account).
        </h3>

        {
          [...'123'].map((v, i) => (
            <div key={i} style={{
              padding: '0 0 0.5em 0',
              margin: '0 0 2em 0',
              border: '1px solid #dfdfdf',
              borderRadius: '5px'
            }}>
              <Comment key={i} />
            </div>
          ))
        }

      </div>
    )
  }
}


export default CommentBox