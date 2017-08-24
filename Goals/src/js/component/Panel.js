import React from 'react'

import Remarks from './Remarks'

import {
  Button,
  Grid,
  Input,
  Checkbox,
  Segment,
  Dropdown
} from 'semantic-ui-react'
const { Row, Column } = Grid


export default function Panel() {
  return (
    <Grid>
      <p></p>
      {/*  Name{ */}
      <Row centered>
        <Column width={14}>
          <Input id="InfoPanel_name_input" placeholder="目标" fluid />
        </Column>
      </Row>
      {/*  Name} */}

      {/* Level{ */}
      <Row centered>
        <Column width={15} textAlign='center'>
          <Button className='levelBtn' basic content='重急' color='red' />
          <Button className='levelBtn' content='重要' color='orange' />
          <Button className='levelBtn' basic content='紧急' color='yellow' />
          <Button className='levelBtn' basic content='一般' color='blue' />
        </Column>
      </Row>
      {/* Level} */}

      {/*TypeSelector{ */}
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
      {/* TypeSelector} */}

      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


      {/* Timer and Repeat{ */}
      <Row centered>
        {/* Timer{ */}
        <Column width={8} textAlign='center'>
          <Checkbox label='定时' checked={false} />
        </Column>
        {/* Timer}*/}

        {/* Repeater{ */}
        <Column width={8} textAlign='center'>
          <Checkbox label='重复' checked={false} />
        </Column>
        {/* Repeater}*/}
      </Row>
      {/* Timer and Repeat} */}

      {/*timing Info{ */}
      <Row centered>
        <Column width={6}>
          <Segment textAlign='center' >
            <h3>00:00</h3>
            <h5>0000/00/00</h5>
          </Segment>
        </Column>
        <Column width={2} textAlign='center' verticalAlign='middle'></Column>
        <Column width={6}>
          <Segment textAlign='center' >
            <h3>00:00</h3>
            <h5>0000/00/00</h5>
          </Segment>
        </Column>
      </Row>
      {/* timingInfo} */}


      {/* Remarks{ */}
      <Row centered>
        <Column width={12}  textAlign='right'>
          <Remarks />
        </Column>
      </Row>
      {/* Remarks} */}      


      {/* Confirm Btn{ */}
      <Row centered>
        <Column width={12} >
          <Button content='确认' fluid color='blue' />
        </Column>
      </Row>
      {/* Confirm Btn} */}

      {/* ContinueToAdd Btn{ */}
      <Row centered>
        <Column width={12} >
          <Button content='继续添加' fluid color='teal' />
        </Column>
      </Row>
      {/* ContinueToAdd Btn} */}

      {/* Cancel Btn{ */}
      <Row centered>
        <Column width={12} >
          <Button content='返回' fluid color='grey' />
        </Column>
      </Row>
      {/* Cancel Btn} */}

    </Grid>
  )
}