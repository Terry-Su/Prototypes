import React from 'react'

import Tags from './Tags'

export default function DetailBoxAddition() {
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
        <b>Created Time:&nbsp;&nbsp;</b>
        <span>2017/07/31 19:50</span>
      </div>

      <div style={{
        padding: '5px 0 5px 0'
      }}>
        <b>Reprinting Note:&nbsp;&nbsp;</b>
        <span>
          This article is original, reprint please indicate the source
        </span>
        {/* 本文为原创文章，转载请注明出处 */}
      </div>
    </div>
  )
}