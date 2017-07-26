import React from 'react'

import { Card, Col, Row } from 'antd'

export default function NewestColumn() {
  return (
    <div>
      <Row gutter={1}>
        <Col span={18}>
          <Card title="NewestColumn" bordered={false}>
              <ul>
                <li>Blog title 1</li>
                <li>Blog title 2</li>
                <li>Blog title 3</li>
                <li>Blog title 4</li>
                <li>Blog title 5</li>
              </ul>
          </Card>
        </Col>
      </Row>
    </div>
  )
}