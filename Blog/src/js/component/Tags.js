import React, { Component } from 'react'
import Button from 'material-ui/Button'

import Tag from './Tag'



export default class Tags extends Component {
  render() {
    return (
      <div style={{
        padding: '10px'
      }}>
        <Tag active>Tag1</Tag>
        {
          [...'12345'].map((v, i) => <Tag key={i}>Tag{i+2}</Tag>)
        }
      </div>
    )
  }
}

