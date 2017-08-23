import React, { Component } from 'react'
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







export default class Blog extends Component {
  componentDidMount() {
    // update body's backgroundColor
    updateBodyBackGroundColor(theme.backgroundColor)
  }

  render() {
    return (
      <MuiThemeProvider theme={theme} >
        <div>
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
}


function updateBodyBackGroundColor(backgroundColor) {
  document.getElementsByTagName('body')[0].style.backgroundColor = backgroundColor
}