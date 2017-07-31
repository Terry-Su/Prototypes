import React from 'react'

import { Breadcrumb as AntdBreadcrumb } from 'antd';



export default function Breadcrumb() {
  return (
    <div>
      <AntdBreadcrumb>
        <AntdBreadcrumb.Item>主页</AntdBreadcrumb.Item>
        <AntdBreadcrumb.Item><a href="">目录1</a></AntdBreadcrumb.Item>
        <AntdBreadcrumb.Item><a href="">博客标题</a></AntdBreadcrumb.Item>
      </AntdBreadcrumb>
    </div>
  )
}