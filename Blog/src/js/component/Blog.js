import React from 'react'
import {
  Link,
  Router,
  Route,
  IndexRoute,
  browserHistory
} from 'react-router'
import createMuiTheme from 'material-ui/styles/theme'
import { MuiThemeProvider } from 'material-ui/styles';
import HomePage from './HomePage'
import ListPage from './ListPage'
import DetailPage from './DetailPage'
import LaboratoryPage from './LaboratoryPage'
import UnitTest from './UnitTest'

const defaultTheme = createMuiTheme()
const customStyle = {
  tag: {
    color: '108ee9',
    activeColor: '#fff',
    activeBackgroundColor: '#108ee9',    
    backgroundColor: '#d2eafb',
  }
}
const theme = createMuiTheme({
  ...defaultTheme,
  shadows: [
    "none",
  ],
  typography: {
    ...defaultTheme.typography,
    fontFamily: `Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif`,
    title: {
      ...defaultTheme.typography.title,
      fontFamily: `Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif`,
    },
    caption: {
      ...defaultTheme.typography.caption,
      fontFamily: `Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif`,
    },
    headline: {
      ...defaultTheme.typography.headline,
      fontFamily: `Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif`,
    },
    body1: {
      ...defaultTheme.typography.body1,
      fontFamily: `Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif`,
    },
    body2: {
      ...defaultTheme.typography.body2,
      fontFamily: `Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif`,
    },
    button: {
      ...defaultTheme.typography.button,
      fontFamily: `Georgia, Palatino, 'Palatino Linotype', Times, 'Times New Roman', serif`,
    },
  },
  palette: {
    ...defaultTheme.palette,
    text: {
      ...defaultTheme.palette.text,
      divider: "#ecf6fd",
    }
  },
  ...customStyle
})


export default Blog

function Blog() {
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

function Separate() {
  return (
    <div>
      <br /><br /><br /><br /><br />
    </div>
  )
}