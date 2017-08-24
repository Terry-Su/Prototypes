import React from 'react'
import Items from './Items'

import {
  Segment,
  Button,
  Accordion,
  Icon,
  Grid,
  Dropdown
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
        <Column width={14}>
          <div>
            <Dropdown defaultValue={0} open fluid selection options={[
              {
                text: '目标类型1',
                value: 0
              },
              {
                text: '目标类型2',
                value: 1
              },
              {
                text: '目标类型3',
                value: 2
              }
            ]} ></Dropdown>
          </div>
        </Column>
      </Row>

      <br /><br /><br /><br /><br /><br /><br />


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