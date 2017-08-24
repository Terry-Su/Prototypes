import React from 'react'

import {
  Segment,
  Label
} from 'semantic-ui-react'


export default function Items() {
  return (
    <div>
      <Segment className="ListItem" basic>
        <span>
          <Label circular color='red' empty key='1' size='mini' />
          &nbsp;&nbsp;&nbsp;
            </span>

        <span style={{
          lineHeight: '22px'
        }}>
          目标名目标名
            </span>
      </Segment>

      <Segment className="ListItem" basic>
        <span>
          <Label className="Label" color='red' style={{
            marginBottom: '6px'
          }}>
            时间信息
          </Label>
          &nbsp;&nbsp;&nbsp;
            </span>

        <span style={{
          lineHeight: '22px'
        }}>
          目标名目标名
            </span>
      </Segment>
    </div>
  )
}