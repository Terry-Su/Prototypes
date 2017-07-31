import React from 'react'

import {
  Card,
  Col,
  Row,
  Menu
} from 'antd'

import NewestColumnItem from './NewestColumnItem'


export default function NewestColumn() {
  return (
    <div>
      <Card title={
        <h2 style={{
          textAlign: 'center'
        }}>最新博客</h2>
      } noHovering bordered={false} style={{
        textAlign: 'left'
      }}>
        {
          [...'12345'].map((v, i) => <div key={i} style={{
            padding: '10px 0 10px 0'
          }}>
            <a href="javascript:">
              <span style={{
                paddingLeft: '20px',
                color: '#555'
              }}>2017/07/31 </span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <h3 style={{
                display: 'inline',
              }}>博客的标题{Math.pow(i, 10)}</h3>
            </a>
          </div>)
        }

      </Card>
    </div>
  )
}