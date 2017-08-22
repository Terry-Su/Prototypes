import React from 'react'

import Tags from './Tags'

export default function DetailBoxInfo() {
  return (
    <div style={{
      textAlign: 'right',
      paddingTop: '20px',
      fontSize: '14px'
    }}>
      <div style={{
        padding: '5px 0 5px 0'
      }}>
        {
          <Tags />
        }
      </div>

      <div style={{
        padding: '5px 0 5px 0'
      }}>
        <b>创建时间： </b>
        <span>2017/07/31 19:50</span>
      </div>

      <div style={{
        padding: '5px 0 5px 0'
      }}>
        <b>转载说明： </b>
        <span>本文为原创文章，转载请注明出处</span>
      </div>
    </div>
  )
}