import React from 'react'
import {
  Col,
  Row,
  Layout,
} from 'antd'

import Breadcrumb from './Breadcrumb'
import DetailBox from './DetailBox'
import Copyright from './Copyright'

const {
  Header
} = Layout

export default function DetailPage() {
  return (
    <div>
      <br />
      <Row type='flex' justify='center'>
        <Col xs={1} sm={1} />
        <Col xs={23} sm={23}>
          <Breadcrumb />
        </Col>
      </Row>
      <br /><br />
      <Row type='flex' justify='center'>
        <Col xs={23} sm={18}>
          <DetailBox/>
        </Col>
      </Row>

      <br /><br /><br />
      <Copyright />
    </div>
  )
}