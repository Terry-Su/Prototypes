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
      padding: '150px 0 20px 0'
    }}>
      Copyright © 2017 TERRY SU ALL RIGHTS RESERVED
    </Footer>
  )
} 