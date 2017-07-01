import React from 'react'
import Items from './Items'

import {
  Grid,
  Segment,
  Label
} from 'semantic-ui-react'
const { Row, Column } = Grid


export default function ItemContainer() {
  return (
    <Grid>
      <Row centered>
        <Column width={13}>
          <Items />
        </Column>
      </Row>
    </Grid>
  )
}