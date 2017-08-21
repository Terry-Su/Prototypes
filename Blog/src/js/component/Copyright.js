import React from 'react'

import {
  Layout
} from 'antd'

const {
  Footer
} = Layout

export default function Copyright() {
  return (
    <Footer id="copyright" style={{
      textAlign: 'center',
      padding: '5px'
    }}>
      Copyright © 2017 TERRY SU ALL RIGHTS RESERVED
    </Footer>
  )
} 