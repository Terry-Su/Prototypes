import React from 'react'
import Items from './Items'

import {
  Segment,
  Button,
  Accordion,
  Icon,
  Grid
} from 'semantic-ui-react'
const { Row, Column } = Grid



export default function Timeline() {
  return (
    <Grid>
      <p></p>

      <Row centered>
        <Column width={12} >
          <Button content='返回' fluid color='teal' />
        </Column>
      </Row>

      <p></p>

      <Row centered>
        <Column width={15} >
          <Accordion defaultActiveIndex={0} key={1} fluid>
            <Accordion.Title>
              <h4>
                <Icon name='dropdown' />
                year
              </h4>
            </Accordion.Title>
            <Accordion.Content>
              <Items />
              <div>
                <Accordion defaultActiveIndex={0} key={1}>
                  <Accordion.Title>
                    <h5>
                      &nbsp;&nbsp;
                    <Icon name='dropdown' />
                      month
                    </h5>
                  </Accordion.Title>
                  <Accordion.Content>
                    <Items />
                    <div>
                      <Accordion defaultActiveIndex={0} key={1}>
                        <Accordion.Title>
                          
                            &nbsp;&nbsp;&nbsp;&nbsp;
                    <Icon name='dropdown' />
                            day
                        </Accordion.Title>
                        <Accordion.Content>
                          <Items />
                        </Accordion.Content>
                      </Accordion>
                    </div>

                  </Accordion.Content>
                </Accordion>
              </div>

            </Accordion.Content>
          </Accordion>
        </Column>
      </Row>


    </Grid>
  )
}