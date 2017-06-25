import React from 'react'

import {
  Icon,
  Form,
  Message,
  TextArea
} from 'semantic-ui-react'


export default function Remarks() {
  return (
    <div>
      <Icon name='commenting outline' color='blue' size='large' />
      <p></p>
      <div style={{
        textAlign: 'left'
      }}>
        <Message color='yellow'>Blue</Message>
        <Form>
          <TextArea rows={3} placeholder='备注内容' />
        </Form>
      </div>
    </div>
  )
}