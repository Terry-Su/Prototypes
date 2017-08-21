import React from 'react'
import { render } from 'react-dom'
import {
  browserHistory
} from 'react-router'
import Blog from './Blog'

render(
  <Blog/>,
  document.getElementById('app')
)

// resolve url redirect
resolveUrl() 

function resolveUrl() {
  const Url = new URL(window.location.href)
  const param = Url.searchParams.get('p')
  if (param) {
    browserHistory.push(param)
  }
}