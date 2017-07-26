import React from 'react'
import { Col, Row } from 'antd'

import Breadcrumb from './Breadcrumb'
import Catalog from './Catalog'
import ItemBox from './ItemBox'
import ListBox from './ListBox'
import NewestColumn from './NewestColumn'
import Notion from './Notion'
import Detail from './Detail'


export default function HomePage() {
  return (
    <div>
      <Row type="flex" gutter={1} justify={'center'}>
        <Col span={23}>
          <br/>
          <Notion />
          <br/>
          <Row>
            <Col span={16}>
              <NewestColumn />
            </Col>
            <Col span={6} offset={2}>
              <Catalog />
            </Col>

          </Row>



        </Col>
      </Row>
    </div>
  )
}