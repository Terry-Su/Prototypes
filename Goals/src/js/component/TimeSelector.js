import React from 'react'
import Timepicker from './TimePicker'

import {
  Button,
  Grid
} from 'semantic-ui-react'
const { Row, Column } = Grid

export default function TimeSelector() {
  return (
    <div>
      <Grid style={{ marginTop: "20px" }}>
        <Row>
          {/* startTime{ */}
          <Column width={8} style={{ textAlign: 'right' }}>
            <Button content='开始时间' primary />
          </Column>
          {/* startTime} */}

          {/* endTime{ */}
          <Column width={8} style={{ textAlign: 'left' }}>
            <Button content='结束时间' basic primary />
          </Column>
          {/* endTime} */}
        </Row>

        <Row>
          <Column>
            <div>
              <Timepicker />
            </div>
          </Column>
        </Row>

        <Row>
          <Column width={8} style={{ textAlign: 'right' }}>
            <Button content='返回' color='grey' />
          </Column>
          <Column width={8} style={{ textAlign: 'left' }}>
            <Button content='确认' color='green' />
          </Column>
        </Row>
      </Grid>
    </div>
  )
}