import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import HomePage from './HomePage'
import ListPage from './ListPage'
import DetailPage from './DetailPage'
import LaboratoryPage from './LaboratoryPage'

function Separate() {
  return (
    <div>
      <br /><br /><br /><br /><br />
    </div>
  )
}

export default function Blog() {
  return (
    <div>
      {
        0 ?
          <Router>
            <div>
              <h1 style={{
                textAlign: 'center'
              }}>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <br />
                  <li><Link to="/list">list</Link></li>
                  <br />
                  <li><Link to="/detail">detail</Link></li>
                  <br />
                  <li><Link to="/laboratory">laboratory</Link></li>
                </ul>
              </h1>

              <Route exact path="/" component={HomePage} />
              <Route path="/list" component={ListPage} />
              <Route path="/detail" component={DetailPage} />
              <Route path="/laboratory" component={LaboratoryPage} />
            </div>
          </Router>
          :
          <HomePage />
      }
    </div>
  )
}