import React, { Component } from 'react'
import moment from 'moment'
import marked from '../util/marked'

import commentContent from '../tmpData/commentContent'
import Card, { CardHeader, CardContent } from 'material-ui/Card'
import Avatar from 'material-ui/Avatar'

class Comment extends Component {
  render() {
    return (
      <div>
        <Card>
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


export default Comment