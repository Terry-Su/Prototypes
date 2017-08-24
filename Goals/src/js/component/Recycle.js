import React from 'react'
import Items from './Items'

import { 
  Grid, 
  Segment, 
  Button 
} from 'semantic-ui-react'
const { Row, Column } = Grid


export default function Recycle() {
  return (
    <Grid>
      <p></p>

      <Row centered>
        <Column width={12} >
          <Button content='返回' fluid color='teal' />
        </Column>
      </Row>

      <Row centered>
        <Column width={15} >
          <Items />
        </Column>
      </Row>
    </Grid>
  )
}