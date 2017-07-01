import React from 'react'

import { 
  Message, 
} from 'semantic-ui-react'


export default function Caveat() {
  return (
    <div id='caveat' style={{
      padding: '10px'
    }}>
      <Message negative>
			<Message.Header>提示内容</Message.Header>
		</Message>
    </div>
  )
}