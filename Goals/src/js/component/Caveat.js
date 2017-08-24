import React from 'react'

import {
  Button,
  Message,
} from 'semantic-ui-react'


export default function Caveat() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '20px'
    }}>
      <Button content="显示/隐藏错误提示" onClick={() => {
        const dom = document.getElementById('caveat')
        if (dom.style.display === 'none') {
          dom.style.display = 'block'
        } else {
          dom.style.display = 'none'
        }
        
      }} />      

      <div id='caveat' style={{
        display: 'none'
      }}>
        <Message negative>
          <Message.Header>提示内容</Message.Header>
        </Message>
      </div>
    </div>
  )
}