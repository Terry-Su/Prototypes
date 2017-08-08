import React from 'react'
import {
  Col,
  Row
} from 'antd'
import DetailBoxContent from './DetailBoxContent'
import DetailBoxInfo from './DetailBoxInfo'

export default function DetailBox() {
  return (
    <div id="detail">
      <h1 id='blog_title' style={{
        textAlign: 'center'
      }}>The title of blog</h1>
      <br />
      <DetailBoxContent />
      <br />
      <Row type='flex' justify='center'>
        <Col xs={23} sm={23}>
          <DetailBoxInfo />
        </Col>
      </Row>

    </div>
  )
}