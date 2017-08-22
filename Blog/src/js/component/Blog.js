import React from 'react'
import {
  Link,
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'
import { MuiThemeProvider, withTheme } from 'material-ui/styles';
import theme from '../theme/index'

import HomePage from './HomePage'
import ListPage from './ListPage'
import DetailPage from './DetailPage'
import LaboratoryPage from './LaboratoryPage'
import UnitTest from './UnitTest'





export default Blog

function Blog() {
  return (
    <MuiThemeProvider theme={theme} >
      <div style={{
        backgroundColor: theme.backgroundColor,
      }}>
        <Router history={browserHistory}>
          <div>
            <Route exact path="/" component={HomePage} ></Route>
            <Route path="/list" component={ListPage} />
            <Route path="/detail" component={DetailPage} />
            <Route path="/test" component={UnitTest} />
          </div>
        </Router>
      </div>
    </MuiThemeProvider>
  )
}

function Separate() {
  return (
    <div>
      <br /><br /><br /><br /><br />
    </div>
  )
}