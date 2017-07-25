import React from 'react'

import Breadcrumb from './Breadcrumb'
import Catalog from './Catalog'
import ItemBox from './ItemBox'
import ListBox from './ListBox'
import NewestColumn from './NewestColumn'
import Notion from './Notion'
import Detail from './Detail'


export default function Blog() {
  return (
    <div>
      <Notion />
      <Breadcrumb />
      <Catalog />
      <ItemBox />
      <ListBox />
      <NewestColumn />
      <Detail />

    </div>
  )
}