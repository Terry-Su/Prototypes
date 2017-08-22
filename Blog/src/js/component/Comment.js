import React, { Component } from 'react'
import moment from 'moment'
import marked from '../util/marked'

import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'
import { withTheme } from 'material-ui/styles'

import commentContent from '../tmpData/commentContent'


class Comment extends Component {
  render() {
    const {
      theme
    } = this.props

    return (
      <div style={{
        padding: '0 0 0.5em 0',
        border: `1px solid ${theme.comment.borderColor}`,
        borderRadius: '5px'
      }}>
        <Card style={{
          background: 'none'
        }}>
          <CardHeader
            avatar={
              <Avatar src='https://avatars2.githubusercontent.com/u/23733477?v=4' />
            }
            title="UserName"
            subheader={`commented on ${moment().format('YYYY/MM/DD HH:MM')}`}
          >
          </CardHeader>
          <div
            className="ts_comment"
            style={{
              paddingLeft: '2em'
            }}
            dangerouslySetInnerHTML={{
              __html: marked(commentContent)
            }} />
        </Card>
      </div>
    )
  }
}


export default withTheme(Comment)