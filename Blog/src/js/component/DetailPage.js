import React from 'react'
import {
  Col,
  Row,
  Layout,
  BackTop,
} from 'antd'

import Breadcrumb from './Breadcrumb'
import DetailBox from './DetailBox'
import Copyright from './Copyright'
import BackToTop from './BackToTop'

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
          <DetailBox />
        </Col>
      </Row>
      <Row style={{
        paddingTop: '50px'
      }}>
        <Col span={22} style={{
          textAlign: 'right'
        }}>
          <BackToTop />
        </Col>
        <Col xs={1} sm={1}></Col>
      </Row>
      <Copyright />
    </div>
  )
}