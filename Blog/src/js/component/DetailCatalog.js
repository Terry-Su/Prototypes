import React, { Component } from 'react'

import Typography from 'material-ui/Typography'
import { withTheme } from 'material-ui/styles'


class DetailCatalog extends Component {
  render() {
    const {
      theme
    } = this.props

    return (
      <div id="detailCatalog" style={{
        padding: '2em'
      }}>
        {
          [...'123'].map((v, i) => (
            <div key={i}>
              <div style={{
                fontSize: '14px',
                padding: '0.8em 0 0 0',
                color: theme.detailCatalog.titleColor
              }}>
                <b>TitleTitleTitleTitleTitle{i+1}...</b>
              </div>
              {
                [...'123'].map((v, i) => (
                  <h2 key={i} style={{
                    fontSize: '14px',
                    padding: '0.2em 0 0 1em',
                    color: theme.detailCatalog.color,
                  }}>
                    SubTitle{i+1}
                  </h2>
                ))
              }
            </div>
          ))
        }
      </div>
    )
  }
}


export default withTheme(DetailCatalog)